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
    const { vehiclesData} = useCar()
    const [favorites, setFavorites] = useState<VehicleType[]>([])
    const [maker, setMaker] = useState<Options>({ label: '', value: '0' })
    const [model, setModel] = useState<Options>({ label: '', value: '0' })
    const [bidMin, setBidMin] = useState<Options>({ label: '', value: '0' })
    const [bidMax, setBidMax] = useState<Options>({ label: '', value: '0' })
    const [sortBy, setSortBy] = useState<Options>({ label: '', value: '0' })
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [isFavorite, setIsFavorite] = useState<Options>({ label: '', value: '0' })
    const [itemOffset, setItemOffset] = useState(0);

    const getModelsByMaker = (selectedMaker: string) => {
        return vehiclesData.reduce((acc, vehicle: VehicleType, index) => {
            if (vehicle.make === selectedMaker && !acc.some(item => item.label === vehicle.model)) {
                acc.push({ label: vehicle.model, value: index });
            }
            return acc;
        }, [] as { label: string, value: number }[]);
    };

    const allMakers = vehiclesData.reduce((acc, vehicle: VehicleType, index) => {
        if (!acc.some(item => item.label === vehicle.make)) {
            acc.push({ label: vehicle.make, value: index });
        }
        return acc;
    }, [] as { label: string, value: number }[]);

    const allBids = vehiclesData.reduce((acc, vehicle: VehicleType, index) => {
        if (!acc.some(item => item.label === vehicle.startingBid.toString())) {
            acc.push({ label: vehicle.startingBid.toString(), value: index });
        }
        return acc;
    }, [] as { label: string, value: number }[]);


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
    const allModels = getModelsByMaker(maker.label);



    const filteredVehicles = useMemo(() => {
        const filtered = vehiclesData.filter(vehicle => {
            const isMakerMatch = maker.label ? vehicle.make === maker.label : true;
            const isModelMatch = model.label ? vehicle.model === model.label : true;

            const isFavoriteMatch = isFavorite.label ? (isFavorite.label === 'Favorite' ? favorites.includes(vehicle) : !favorites.includes(vehicle)) : true;

            const bidMinValue = parseInt(bidMin.label);
            const bidMaxValue = parseInt(bidMax.label);

            const isBidMinMatch = bidMin.label ? vehicle.startingBid >= bidMinValue : true;
            const isBidMaxMatch = bidMax.label ? vehicle.startingBid <= bidMaxValue : true;

            return isMakerMatch && isModelMatch && isBidMinMatch && isBidMaxMatch && isFavoriteMatch;
        });

        const sorted = filtered.sort((a, b) => {
            switch (sortBy.value) {
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

    }, [vehiclesData, maker, model, isFavorite, bidMin, bidMax, favorites, sortBy]);


    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(filteredVehicles.length / itemsPerPage);
    const currentItems = filteredVehicles.slice(itemOffset, endOffset);
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % filteredVehicles.length;
        setItemOffset(newOffset);
    };

    const handleFavourite = (vehicle: VehicleType) => {
        if (favorites.includes(vehicle)) {
            setFavorites(favorites.filter((fav) => fav !== vehicle))
        } else {
            setFavorites([...favorites, vehicle])
        }
    }

    useEffect(() => {
        setModel({ label: '', value: '0' })
    }, [maker])

    useEffect(() => {
        const initialFavorites = vehiclesData.filter((vehicle: VehicleType) => vehicle.favourite === true)
        setFavorites(initialFavorites)
    }, [vehiclesData])

    return (
        <S.Main>

            <S.Title>Filters</S.Title>
            <S.FilterContainer>
                <Filter title="Maker" filter={maker.label} setFilter={setMaker} options={allMakers} />
                <Filter title="Model" filter={model.label} setFilter={setModel} options={allModels} value={maker.value} isDisabled={!maker.label} />
                <Filter title="Favorite" filter={isFavorite.label} setFilter={setIsFavorite} options={favoriteOptions} />
                <Filter title="Starting bid minimum" filter={bidMin.label} setFilter={setBidMin} options={allBids.sort((a, b) => parseInt(a.label) - parseInt(b.label))} />
                <Filter title="Starting bid maximum" filter={bidMax.label} setFilter={setBidMax} options={allBids.sort((a, b) => parseInt(a.label) - parseInt(b.label))} />
                <Filter title="Order by" filter={sortBy.label} setFilter={setSortBy} options={sortByOptions} />
                <S.ItemPerPage type="number" value={itemsPerPage} onChange={(e) => setItemsPerPage(parseInt(e.target.value))} />
            </S.FilterContainer>

            <S.Container>
                <VehicleList currentItems={currentItems} handleFavourite={handleFavourite} favorites={favorites} />

                <S.PaginationContainer>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                </S.PaginationContainer>
            </S.Container>

        </S.Main>
    );
}

export default Home;
