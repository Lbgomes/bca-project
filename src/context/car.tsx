import { createContext, ReactNode, useContext, useState } from "react";
import { VehicleType } from "types/vehicle";
import Data from '../vehicles_dataset.json'


type CarProviderProps = {
    children: ReactNode;
};

type CarContextData = {
    isLoading: boolean;
    handleIsLoading: (data: boolean) => void;
    vehiclesData: VehicleType[];
    carData?: VehicleType;
    handleCarData: (data: VehicleType) => void;
};

export const CarContext = createContext({} as CarContextData);

const CarContextProvider = ({ children }: CarProviderProps) => {
    const [vehiclesData, setVehiclesData] = useState<VehicleType[]>(Data)
    const [carData, setCarData] = useState<VehicleType>();
    const [isLoading, setIsLoading] = useState(true);
    const handleCarData = (data: VehicleType) => {
        setCarData(data);
    };

    const handleIsLoading = (data: boolean) => {
        setIsLoading(data);
    };
    const value = {
        vehiclesData,
        carData,
        handleCarData,
        isLoading,
        handleIsLoading
    };


    return (
        <CarContext.Provider value={value}>
            {children}
        </CarContext.Provider>
    );
};

const useCar = () => useContext(CarContext);
export { CarContextProvider, useCar };