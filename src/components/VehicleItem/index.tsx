import { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, addDays } from 'date-fns';
import { Link } from 'react-router-dom';
import * as S from './styles';
import * as B from '@styled-icons/bootstrap';
import * as Bs from '@styled-icons/boxicons-solid';
import * as Br from '@styled-icons/boxicons-regular';
import placeholder from '../../assets/car.jpg';
import { VehicleType } from 'types/vehicle';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

interface VehicleItemProps {
    index: number;
    page: number;
    vehicle: VehicleType;
    handleCarData: (vehicle: VehicleType) => void;
    handleFavourite: (vehicle: VehicleType) => void;
    isFavorite: boolean;
}

const VehicleItem = ({ index, vehicle, handleCarData, handleFavourite, isFavorite, page }: VehicleItemProps) => {
    const [isLoading, setIsLoading] = useState(true);

    const calculateTimeLeft = () => {
        const now = new Date();
        const eventTime = new Date(vehicle.auctionDateTime);

        const days = differenceInDays(eventTime, now);
        const hours = differenceInHours(eventTime, addDays(now, days));

        return {
            days: days > 0 ? days : 0,
            hours: hours > 0 ? hours : 0,
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTimeLeft = calculateTimeLeft();
            setTimeLeft(updatedTimeLeft);
            setIsLoading(false);
        }, 1000);

        return () => clearInterval(timer);
    }, [vehicle.auctionDateTime]);

    useEffect(() => {
        setIsLoading(true); 
    }, [page]);

    const { days, hours } = timeLeft;

    return (
        <S.VehicleContainer>
            <Link to={`/${index + 1}`} onClick={() => { handleCarData(vehicle); window.scrollTo(0, 0); }}>
                {
                    isLoading ? <Skeleton width={215} height={162.4} /> : <S.Image src={placeholder} />
                }

                <S.DataContainer>
                    <S.Title>
                        {isLoading ? <Skeleton /> : `${vehicle.make} ${vehicle.model}`}
                    </S.Title>
                    <S.Info>
                        {isLoading ? <Skeleton /> : (days === 0 && hours === 0) ? 'The event has started' :
                            `The event will begin in ${days} ${days === 1 ? 'day' : 'days'} and ${hours} ${hours === 1 ? 'hour' : 'hours'}`
                        }
                    </S.Info>
                    <S.Info>
                        {
                            isLoading ? <Skeleton /> : (<> <B.Speedometer /> {vehicle.mileage}km</>)
                        }
                    </S.Info>
                    {isLoading ? <Skeleton /> : `Starting Bid: ${vehicle.startingBid}`
                    }
                </S.DataContainer>
            </Link>
            <S.Favourite onClick={() => handleFavourite(vehicle)}>
                {isFavorite ? <Bs.Heart /> : <Br.Heart />}
            </S.Favourite>
        </S.VehicleContainer>
    );
};

export default VehicleItem;
