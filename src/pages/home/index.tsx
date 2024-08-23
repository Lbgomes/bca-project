import { VehicleType } from '../../types/vehicle';
import { useEffect, useMemo, useState } from 'react';
import * as S from './styles'
import Filter from 'components/Filter';
import ReactPaginate from 'react-paginate';
import { useCar } from 'context/car';
import VehicleList from 'components/VehiclesList';
function Home() {
    interface Options {
        label: string
        value: string
    }

    const defaultFilter = { label: 'Select your filter', value: '0' };

    const { vehiclesData } = useCar()

    const [currentPage, setCurrentPage] = useState(0);
    const [favorites, setFavorites] = useState<VehicleType[]>([])
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [itemOffset, setItemOffset] = useState(0);
    const [filters, setFilters] = useState({
        maker: defaultFilter,
        model: defaultFilter,
        bidMin: defaultFilter,
        bidMax: defaultFilter,
        sortBy: defaultFilter,
        isFavorite: defaultFilter,
    });

    const getModelsByMaker = (selectedMaker: string) => {
        return vehiclesData.reduce((acc, vehicle: VehicleType, index) => {
            if (vehicle.make === selectedMaker && !acc.some(item => item.label === vehicle.model)) {
                acc.push({ label: vehicle.model, value: index.toString() });
            }
            return acc;
        }, [] as { label: string, value: string }[]);
    };

    const allMakers = vehiclesData.reduce((acc, vehicle: VehicleType, index) => {
        if (!acc.some(item => item.label === vehicle.make)) {
            acc.push({ label: vehicle.make, value: index.toString() });
        }
        return acc;
    }, [] as { label: string, value: string }[]);

    const allBids = vehiclesData.reduce((acc, vehicle: VehicleType, index) => {
        if (!acc.some(item => item.label === vehicle.startingBid.toString())) {
            acc.push({ label: vehicle.startingBid.toString(), value: index.toString() });
        }
        return acc;
    }, [] as { label: string, value: string }[]);


    const favoriteOptions = [
        { label: 'Favorite', value: '1' },
        { label: 'Not Favorite', value: '2' }
    ]

    const sortByOptions = [
        { label: 'Make', value: '1' },
        { label: 'Lowest price', value: '2' },
        { label: 'Highest price', value: '3' },
        { label: 'Milage asc', value: '4' },
        { label: 'Milage desc', value: '5' },
        { label: 'Auction date asc', value: '6' },
        { label: 'Auction date desc', value: '7' },
    ]
    const allModels = getModelsByMaker(filters.maker.label);



    const filteredVehicles = useMemo(() => {
        const filtered = vehiclesData.filter(vehicle => {
            const isMakerMatch = filters.maker.value !== '0' ? vehicle.make === filters.maker.label : true;
            const isModelMatch = filters.model.value !== '0' ? vehicle.model === filters.model.label : true;
            const isFavoriteMatch = filters.isFavorite.value !== '0' ? (filters.isFavorite.label === 'Favorite' ? favorites.includes(vehicle) : !favorites.includes(vehicle)) : true;

            const bidMinValue = parseInt(filters.bidMin.label);
            const bidMaxValue = parseInt(filters.bidMax.label);

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

    }, [vehiclesData, filters, favorites]);

    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(filteredVehicles.length / itemsPerPage);
    const currentItems = filteredVehicles.slice(itemOffset, endOffset);
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % filteredVehicles.length;
        setCurrentPage(event.selected);
        setItemOffset(newOffset);
        window.scrollTo(0, 0);
    };

    const handleFavourite = (vehicle: VehicleType) => {
        if (favorites.includes(vehicle)) {
            setFavorites(favorites.filter((fav) => fav !== vehicle))
        } else {
            setFavorites([...favorites, vehicle])
        }
    }

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
        const initialFavorites = vehiclesData.filter((vehicle: VehicleType) => vehicle.favourite === true)
        setFavorites(initialFavorites)
    }, [vehiclesData])

    useEffect(() => {
        setFilters(prevFilters => ({
            ...prevFilters,
            model: defaultFilter,
        }));
    }, [filters.maker]);

    return (
        <S.Main>

            <S.Title>Filters</S.Title>
            <S.FilterContainer>
                <Filter title="Maker" filter={filters.maker.label} setFilter={handleFilterChange('maker')} options={allMakers} />
                <Filter title="Model" filter={filters.model.label} setFilter={handleFilterChange('model')} options={allModels} value={filters.maker.value} isDisabled={filters.maker.value === '0'} />
                <Filter title="Favorite" filter={filters.isFavorite.label} setFilter={handleFilterChange('isFavorite')} options={favoriteOptions} />
                <Filter title="Starting bid minimum" filter={filters.bidMin.label} setFilter={handleFilterChange('bidMin')} options={allBids.sort((a, b) => parseInt(a.label) - parseInt(b.label))} />
                <Filter title="Starting bid maximum" filter={filters.bidMax.label} setFilter={handleFilterChange('bidMax')} options={allBids.sort((a, b) => parseInt(a.label) - parseInt(b.label))} />
                <Filter title="Order by" filter={filters.sortBy.label} setFilter={handleFilterChange('sortBy')} options={sortByOptions} />
                <S.ItemPerPage type="number" value={itemsPerPage} onChange={(e) => setItemsPerPage(parseInt(e.target.value))} />
            </S.FilterContainer>

            <S.Container>
                <VehicleList currentItems={currentItems} handleFavourite={handleFavourite} favorites={favorites} page={currentPage} />

                <S.PaginationContainer>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={pageCount}
                        activeClassName='active'
                        containerClassName={'pagination'}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </S.PaginationContainer>
            </S.Container>

        </S.Main>
    );
}

export default Home;
