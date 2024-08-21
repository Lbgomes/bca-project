import { VehicleType } from '../../types/vehicle';
import Data from '../../vehicles_dataset.json'
import { useEffect, useMemo, useState } from 'react';
import * as S from './styles'
import placeholder from '../../assets/car.avif'
import Filter from 'components/Filter';
import ReactPaginate from 'react-paginate';

function Home() {

    const [vehiclesData, setVehiclesData] = useState<VehicleType[]>(Data)
    console.log(vehiclesData.length)
    const [favorites, setFavorites] = useState<VehicleType[]>([])
    const [maker, setMaker] = useState<{ label: string, value: string }>({ label: '', value: '0' })
    const [model, setModel] = useState<{ label: string, value: string }>({ label: '', value: '0' })
    const [bidMin, setBidMin] = useState<{ label: string, value: string }>({ label: '', value: '0' })
    const [bidMax, setBidMax] = useState<{ label: string, value: string }>({ label: '', value: '0' })
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const [isFavorite, setIsFavorite] = useState<{ label: string, value: string }>({ label: '', value: '0' })
    const [itemOffset, setItemOffset] = useState(0);


    const handleFavourite = (vehicle: VehicleType) => {
        if (favorites.includes(vehicle)) {
            setFavorites(favorites.filter((fav) => fav !== vehicle))
        } else {
            setFavorites([...favorites, vehicle])
        }
    }

    const filteredVehicles = useMemo(() => {
        return vehiclesData.filter(vehicle => {
            const isMakerMatch = maker.label ? vehicle.make === maker.label : true;
            const isModelMatch = model.label ? vehicle.model === model.label : true;

            // Check if the vehicle should be filtered by favorite status
            const isFavoriteMatch = isFavorite.label ? (isFavorite.label === 'Favorite' ? favorites.includes(vehicle) : !favorites.includes(vehicle)) : true;

            const bidMinValue = parseInt(bidMin.label);
            const bidMaxValue = parseInt(bidMax.label);

            const isBidMinMatch = bidMin.label ? vehicle.startingBid >= bidMinValue : true;
            const isBidMaxMatch = bidMax.label ? vehicle.startingBid <= bidMaxValue : true;

            return isMakerMatch && isModelMatch && isBidMinMatch && isBidMaxMatch && isFavoriteMatch;
        });
    }, [vehiclesData, maker, model, isFavorite, bidMin, bidMax, favorites]);

    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(filteredVehicles.length / itemsPerPage);
    const currentItems = filteredVehicles.slice(itemOffset, endOffset);
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % filteredVehicles.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    useEffect(() => {
        setModel({ label: '', value: '0' })
    }, [maker])

    useEffect(() => {
        const initialFavorites = vehiclesData.filter((vehicle: VehicleType) => vehicle.favourite === true)
        setFavorites(initialFavorites)
    }, [vehiclesData])


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

    const getModelsByMaker = (selectedMaker: string) => {
        return vehiclesData.reduce((acc, vehicle: VehicleType, index) => {
            // Only include models that belong to the selected maker
            if (vehicle.make === selectedMaker && !acc.some(item => item.label === vehicle.model)) {
                acc.push({ label: vehicle.model, value: index });
            }
            return acc;
        }, [] as { label: string, value: number }[]);
    };
    const favoriteOptions = [
        { label: 'Favorite', value: '1' },
        { label: 'Not Favorite', value: '2' }
    ]
    const allModels = getModelsByMaker(maker.label);
    return (
        <S.Main>

            <S.Title>Filters</S.Title>
            <S.FilterContainer>
                <Filter title="Maker" filter={maker.label} setFilter={setMaker} options={allMakers} />
                <Filter title="Model" filter={model.label} setFilter={setModel} options={allModels} value={maker.value} isDisabled={!maker.label} />
                <Filter title="Favorite" filter={isFavorite.label} setFilter={setIsFavorite} options={favoriteOptions} />
                <Filter title="Starting bid minimum" filter={bidMin.label} setFilter={setBidMin} options={allBids.sort((a, b) => parseInt(a.label) - parseInt(b.label))} />
                <Filter title="Starting bid maximum" filter={bidMax.label} setFilter={setBidMax} options={allBids.sort((a, b) => parseInt(a.label) - parseInt(b.label))} />
                <input type="number" onChange={(e) => setItemsPerPage(parseInt(e.target.value))} />
            </S.FilterContainer>

            <S.Container>
                {currentItems.map((vehicle: VehicleType, index) => (
                    <S.VehicleContainer key={index}>
                        <S.Image src={placeholder} />
                        <S.DataContainer>
                            <S.Title>{vehicle.make} {vehicle.model}</S.Title>
                        </S.DataContainer>
                        Starting Bid: {vehicle.startingBid}
                        <S.Favourite onClick={() => handleFavourite(vehicle)}>
                            {/* {favorites.includes(vehicle) ? <FavoriteIcon sx={{ color: '#E4672E' }} /> : <FavoriteBorderIcon sx={{ color: '#E4672E' }} />} */}
                        </S.Favourite>
                    </S.VehicleContainer>
                ))}
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
