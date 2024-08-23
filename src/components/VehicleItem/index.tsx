import { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, addDays } from 'date-fns';
import { Link } from 'react-router-dom';
import * as S from './styles';
import * as B from '@styled-icons/bootstrap';
import * as Bs from '@styled-icons/boxicons-solid';
import * as Br from '@styled-icons/boxicons-regular';
import placeholder from '../../assets/car.jpg';
import { VehicleType } from 'types/vehicle';

interface VehicleItemProps {
    index: number;
    vehicle: VehicleType;
    handleCarData: (vehicle: VehicleType) => void;
    handleFavourite: (vehicle: VehicleType) => void;
    isFavorite: boolean;
}

const VehicleItem = ({ index, vehicle, handleCarData, handleFavourite, isFavorite }: VehicleItemProps) => {
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
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [vehicle.auctionDateTime]);

    const { days, hours } = timeLeft;

    return (
        <S.VehicleContainer>
            <Link to={`/${index + 1}`} onClick={() => { handleCarData(vehicle); window.scrollTo(0, 0); }}>
                <S.Image src={placeholder} />
                <S.DataContainer>
                    <S.Title>{vehicle.make} {vehicle.model}</S.Title>
                    <S.Info>
                        {(days === 0 && hours === 0) ? 'The event has started' :
                            `The event will begin in ${days} ${days === 1 ? 'day' : 'days'} and ${hours} ${hours === 1 ? 'hour' : 'hours'}`
                        }
                    </S.Info>
                    <S.Info><B.Speedometer /> {vehicle.mileage}km</S.Info>
                    Starting Bid: {vehicle.startingBid}
                </S.DataContainer>
            </Link>
            <S.Favourite onClick={() => handleFavourite(vehicle)}>
                {isFavorite ? <Bs.Heart /> : <Br.Heart />}
            </S.Favourite>
        </S.VehicleContainer>
    );
};

export default VehicleItem;
