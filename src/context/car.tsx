import { createContext, ReactNode, useContext, useState } from "react";
import { VehicleType } from "types/vehicle";


type CarProviderProps = {
    children: ReactNode;
};

type CarContextData = {
    carData: VehicleType;
    handleCarData: (data: VehicleType) => void;
};

export const CarContext = createContext({} as CarContextData);

const CarContextProvider = ({ children }: CarProviderProps) => {

    const [carData, setCarData] = useState<VehicleType>({} as VehicleType);
    console.log(carData, 'carData');

    const handleCarData = (data: VehicleType) => {
        setCarData(data);
    };
    const value = {
        carData,
        handleCarData
    };


    return (
        <CarContext.Provider value={value}>
            {children}
        </CarContext.Provider>
    );
};

const useCar = () => useContext(CarContext);
export { CarContextProvider, useCar };