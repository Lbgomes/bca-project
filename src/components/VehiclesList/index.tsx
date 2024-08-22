import { useCar } from "context/car";
import { VehicleType } from "types/vehicle";
import * as S from './styles';
import VehicleItem from "components/VehicleItem";

interface VehicleListProps {
    currentItems: VehicleType[],
    favorites: VehicleType[],
    handleFavourite: (vehicle: VehicleType) => void
}

const VehicleList = ({ currentItems, handleFavourite, favorites }: VehicleListProps) => {
    const { handleCarData } = useCar();

    return (
        <>
            {currentItems.map((vehicle, index) => (
                <VehicleItem
                    key={index}
                    index={index}
                    vehicle={vehicle}
                    handleCarData={handleCarData}
                    handleFavourite={handleFavourite}
                    isFavorite={favorites.includes(vehicle)}
                />
            ))}
        </>
    );
};

export default VehicleList;
