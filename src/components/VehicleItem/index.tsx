import { useState, useEffect, useCallback } from 'react';
import { differenceInDays, differenceInHours, addDays } from 'date-fns';
import { Link } from 'react-router-dom';
import * as S from './styles';
import placeholder from '../../assets/car.jpg';
import { VehicleType } from 'types/vehicle';
import 'react-loading-skeleton/dist/skeleton.css'
import { useCar } from 'context/car';
import DataWithSkeleton from 'components/Skeleton';
import { VehicleData } from 'components/VehicleData';

interface VehicleItemProps {
    index: number;
    page?: number;
    vehicle: VehicleType;
    handleCarData: (vehicle: VehicleType) => void;
    handleFavourite: (vehicle: VehicleType) => void;
    isFavorite: boolean;
}

const VehicleItem = ({ index, vehicle, handleCarData, handleFavourite, isFavorite }: VehicleItemProps) => {

    return (
        <S.VehicleContainer>

            <Link to={`/${index + 1}`} onClick={() => { handleCarData(vehicle); window.scrollTo(0, 0); }}>
                <S.ImageContainer>
                <DataWithSkeleton width={215} height={162.4}>
                    <S.Image src={placeholder} />
                </DataWithSkeleton>
                </S.ImageContainer>

        <VehicleData vehicle={vehicle} handleFavourite={handleFavourite} isFavorite={isFavorite} />
            </Link>


        </S.VehicleContainer>
    );
};

export default VehicleItem;
