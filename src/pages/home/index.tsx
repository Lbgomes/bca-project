import { VehicleType } from '../../types/vehicle';
import { useEffect, useMemo, useState } from 'react';
import * as S from './styles'
import Filter from 'components/Filter';
import ReactPaginate from 'react-paginate';
import { useCar } from 'context/car';
import VehicleList from 'components/VehiclesList';
import SwitchSelector from "react-switch-selector";
import * as E from '@styled-icons/evaicons-outline/Options2Outline'
function Home() {
    interface Options {
        label: string
        value: string
    }

    const defaultFilter = { label: 'Select your filter', value: '0' };

    const { vehiclesData, handleIsLoading, handleFavourite, favorites } = useCar()
    const [isFiltersOpen, setIsFiltersOpen] = useState(true)
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(15)
    const [itemOffset, setItemOffset] = useState(0);
    const [filters, setFilters] = useState({
        maker: defaultFilter,
        model: defaultFilter,
        bidMin: defaultFilter,
        bidMax: defaultFilter,
        sortBy: defaultFilter,
        isFavorite: { label: 'All', value: 'all' },
    });

    const getModelsByMaker = (selectedMaker: string) => {
        return vehiclesData.reduce((acc, vehicle: VehicleType, index) => {
            if (vehicle.make === selectedMaker && !acc.some(item => item.label === vehicle.model)) {
                acc.push({ label: vehicle.model, value: (index + 1).toString() });
            }
            return acc;
        }, [] as { label: string, value: string }[]);
    };

    const allMakers = vehiclesData.reduce((acc, vehicle: VehicleType, index) => {
        if (!acc.some(item => item.label === vehicle.make)) {
            acc.push({ label: vehicle.make, value: (index + 1).toString() });
        }
        return acc;
    }, [] as { label: string, value: string }[]);

    const allBids = vehiclesData.reduce((acc, vehicle: VehicleType, index) => {
        if (!acc.some(item => item.label === vehicle.startingBid.toString())) {
            acc.push({ label: vehicle.startingBid.toString(), value: (index + 1).toString() });
        }
        return acc;
    }, [] as { label: string, value: string }[]);


    const FavoriteOptions = [
        {
            label: 'All',
            value: 'all',
            selectedBackgroundColor: "#fff",
        },
        {
            label: "Favorites only",
            value: "favorites",
            selectedBackgroundColor: "#fff"
        }
    ];
    const sortByOptions = [
        { label: 'Make', value: '1' },
        { label: 'Lowest → Highest Price', value: '2' },
        { label: 'Highest → Lowest Price', value: '3' },
        { label: 'Lowest → Highest Milage', value: '4' },
        { label: 'Highest → Lowest Milage', value: '5' },
        { label: 'Lowest → Highest Auction date', value: '6' },
        { label: 'Highest → Lowest Auction date ', value: '7' },
    ]
    const allModels = getModelsByMaker(filters.maker.label);



    const filteredVehicles = useMemo(() => {
        let bidMinValue = parseInt(filters.bidMin.label);
        let bidMaxValue = parseInt(filters.bidMax.label);

        if (bidMaxValue < bidMinValue) {
            [bidMinValue, bidMaxValue] = [bidMaxValue, bidMinValue];

            setFilters(prevFilters => ({
                ...prevFilters,
                bidMin: { ...prevFilters.bidMax, label: bidMinValue.toString() },
                bidMax: { ...prevFilters.bidMin, label: bidMaxValue.toString() },
            }));
        }

        const filtered = vehiclesData.filter(vehicle => {
            const isMakerMatch = filters.maker.value !== '0' ? vehicle.make === filters.maker.label : true;
            const isModelMatch = filters.model.value !== '0' ? vehicle.model === filters.model.label : true;
            const isFavoriteMatch = filters.isFavorite.value === 'all' ? true : vehicle.favourite === (filters.isFavorite.value === 'favorites');

            const isBidMinMatch = filters.bidMin.value !== '0' ? vehicle.startingBid >= bidMinValue : true;
            const isBidMaxMatch = filters.bidMax.value !== '0' ? vehicle.startingBid <= bidMaxValue : true;

            return isMakerMatch && isModelMatch && isBidMinMatch && isBidMaxMatch && isFavoriteMatch;
        });

        const sorted = filtered.sort((a, b) => {
            switch (filters.sortBy.value) {
                case '1':
                    return a.make.localeCompare(b.make);
                case '2':
                    return a.startingBid - b.startingBid;
                case '3':
                    return b.startingBid - a.startingBid;
                case '4':
                    return a.mileage - b.mileage;
                case '5':
                    return b.mileage - a.mileage;
                case '6':
                    return new Date(a.auctionDateTime).getTime() - new Date(b.auctionDateTime).getTime();
                case '7':
                    return new Date(b.auctionDateTime).getTime() - new Date(a.auctionDateTime).getTime();
                default:
                    return 0;
            }
        });

        return sorted;

    }, [vehiclesData, filters]);

    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(filteredVehicles.length / itemsPerPage);
    const currentItems = filteredVehicles.slice(itemOffset, endOffset);
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % filteredVehicles.length;
        setCurrentPage(event.selected);
        setItemOffset(newOffset);
        window.scrollTo(0, 0);
    };

    const handleFilterChange = (filterName: string) => (selectedOption: Options) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: selectedOption,
        }));
    };

    useEffect(() => {
        handleFilterChange('model')(defaultFilter)
    }, [filters.maker])

    useEffect(() => {
        setFilters(prevFilters => ({
            ...prevFilters,
            model: defaultFilter,
        }));
    }, [filters.maker]);

    useEffect(() => {
        handleIsLoading(true);
    }, [currentPage])

    return (
        <S.Main>

            <S.FiltersContainer>
                <E.Options2Outline size={24} onClick={() => setIsFiltersOpen(!isFiltersOpen)} />
                {
                    isFiltersOpen && (
                        <S.FilterGroup>
                            <Filter title="Maker" setFilter={handleFilterChange('maker')} options={allMakers} />
                            <Filter title="Model" setFilter={handleFilterChange('model')} options={allModels} isDisabled={filters.maker.value === '0'} />
                            <Filter title="Starting Bid Min" setFilter={handleFilterChange('bidMin')} options={allBids.sort((a, b) => parseInt(a.label) - parseInt(b.label))} value={filters.bidMin} />
                            <Filter title="Starting Bid Max" setFilter={handleFilterChange('bidMax')} options={allBids.sort((a, b) => parseInt(a.label) - parseInt(b.label))} value={filters.bidMax} />
                            <Filter title="Sort by" setFilter={handleFilterChange('sortBy')} options={sortByOptions} />
                            <S.SwitchContainer>
                                <SwitchSelector
                                    onChange={(e: any) => {
                                        handleIsLoading(true);
                                        setFilters(prevFilters => ({
                                            ...prevFilters,
                                            isFavorite: { label: e.label, value: e },
                                        }))
                                    }}
                                    options={FavoriteOptions}
                                    wrapperBorderRadius={8}
                                    optionBorderRadius={6}
                                    initialSelectedIndex={0}
                                    backgroundColor={"#EEEEEE"}
                                    fontColor={"#585858"}
                                />
                            </S.SwitchContainer>
                        </S.FilterGroup>

                    )
                }

            </S.FiltersContainer>
            <S.Container>
                <S.Title>Results</S.Title>
                <VehicleList currentItems={currentItems} handleFavourite={handleFavourite} favorites={favorites} page={currentPage} />

            </S.Container>
            <S.PaginationContainer>
                <S.PaginationWrapper>
                    <ReactPaginate
                        breakLabel="..."
                        nextClassName='arrow'
                        previousClassName='arrow'
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={pageCount}
                        activeClassName='active'
                        containerClassName={'pagination'}
                        renderOnZeroPageCount={null}
                    />
                </S.PaginationWrapper>
                <S.ItemPerPageContainer>
                    <S.ItemPerPage
                        onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                        value={itemsPerPage}
                        type="number"
                    />
                    results per page
                </S.ItemPerPageContainer>
            </S.PaginationContainer>


        </S.Main>
    );
}

export default Home;
