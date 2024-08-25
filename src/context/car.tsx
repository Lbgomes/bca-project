import { createContext, ReactNode, useContext, useState } from "react";
import { VehicleType } from "types/vehicle";
import Data from '../vehicles_dataset.json'


type CarProviderProps = {
    children: ReactNode;
};

type CarContextData = {
    vehiclesData: VehicleType[];
    handleFavourite: (vehicle: VehicleType) => void;
    favorites: VehicleType[];
    isLoading: boolean;
    handleIsLoading: (data: boolean) => void;
    carData?: VehicleType;
    handleCarData: (data: VehicleType) => void;
};

export const CarContext = createContext({} as CarContextData);

const CarContextProvider = ({ children }: CarProviderProps) => {
    const [vehiclesData, setVehiclesData] = useState<VehicleType[]>(Data)
    const [favorites, setFavorites] = useState<VehicleType[]>(() =>
        Data.filter(vehicle => vehicle.favourite === true)
    );
    const [carData, setCarData] = useState<VehicleType>();
    const [isLoading, setIsLoading] = useState(true);
    const handleCarData = (data: VehicleType) => {
        setCarData(data);
    };

    const handleIsLoading = (data: boolean) => {
        setIsLoading(data);
    };
    const handleFavourite = (vehicle: VehicleType) => {
        if (favorites.includes(vehicle)) {
            setFavorites(favorites.filter((fav) => fav !== vehicle))
        } else {
            setFavorites([...favorites, vehicle])
        }
    }

    const value = {
        vehiclesData,
        carData,
        handleCarData,
        isLoading,
        handleIsLoading,
        favorites,
        handleFavourite
    };


    return (
        <CarContext.Provider value={value}>
            {children}
        </CarContext.Provider>
    );
};

const useCar = () => useContext(CarContext);
export { CarContextProvider, useCar };