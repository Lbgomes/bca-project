import { useCar } from "context/car";
import { VehicleType } from "types/vehicle";
import VehicleItem from "components/VehicleItem";
import * as S from "./styles";
interface VehicleListProps {
    page: number,
    favorites: VehicleType[],
    currentItems: VehicleType[],
    handleFavourite: (vehicle: VehicleType) => void
}

const VehicleList = ({ page, currentItems, handleFavourite, favorites }: VehicleListProps) => {
    const { handleCarData } = useCar();

    return (
        <S.Container>
            {currentItems.map((vehicle, index) => (
                <VehicleItem
                    key={index}
                    page={page}
                    index={index}
                    vehicle={vehicle}
                    handleCarData={handleCarData}
                    handleFavourite={handleFavourite}
                    isFavorite={favorites.includes(vehicle)}
                />
            ))}
            {currentItems.length === 0 && <S.NoResults>No results found</S.NoResults>}
        </S.Container>
    );
};

export default VehicleList;
