import DataWithSkeleton from 'components/Skeleton';
import { useCallback, useEffect, useState } from 'react';
import { addDays, differenceInDays, differenceInHours } from 'date-fns';
import { VehicleType } from 'types/vehicle';
import { useCar } from 'context/car';
import * as S from './styles';
import * as B from '@styled-icons/bootstrap';
import * as Bs from '@styled-icons/boxicons-solid';
import * as Br from '@styled-icons/boxicons-regular';
import * as fl from '@styled-icons/fluentui-system-regular';
interface VehicleDataProps {
    vehicle: VehicleType;

    isFavorite: boolean;
    page?: 'home' | 'car';
}
export const VehicleData = ({ vehicle, isFavorite, page = 'home' }: VehicleDataProps) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });
    const { handleIsLoading, handleFavourite } = useCar();

    const calculateTimeLeft = useCallback(() => {
        const now = new Date();
        const eventTime = new Date(vehicle.auctionDateTime);

        const days = differenceInDays(eventTime, now);
        const hours = differenceInHours(eventTime, addDays(now, days));

        return {
            days: days > 0 ? days : 0,
            hours: hours > 0 ? hours : 0,
        };
    }, [vehicle.auctionDateTime]);

    useEffect(() => {
        setTimeout(() => {
            const timeLeft = calculateTimeLeft();
            setTimeLeft(timeLeft);
            handleIsLoading(false);
        }, 500);
    }, [calculateTimeLeft]);



    const { days, hours } = timeLeft;

    return (
        <S.DataContainer>

            <DataWithSkeleton height={32}>
                <S.TitleFavouriteContainer>

                    <S.Title >
                        {vehicle.make} {vehicle.model}
                    </S.Title>

                    <S.Favourite onClick={() => handleFavourite(vehicle)} page={page}>
                        {isFavorite ? <Bs.Heart aria-label="favourite" /> : <Br.Heart aria-label="non-favourite" />}
                    </S.Favourite>

                </S.TitleFavouriteContainer>
            </DataWithSkeleton>

            <DataWithSkeleton width={90} height={126} ishidden={page === 'car'}>
                <S.DataIconsContainer>

                    <S.IconInfoContainer>
                        <B.Calendar size={16} color='#000' />
                        <S.Info opacity={0.6}>
                            {vehicle.year}
                        </S.Info>
                    </S.IconInfoContainer>
                    <S.IconInfoContainer>
                        <Br.GasPump size={16} color='#000' />
                        <S.Info opacity={0.6}>
                            {vehicle.fuel}
                        </S.Info>
                    </S.IconInfoContainer>
                    <S.IconInfoContainer>
                        <fl.Engine size={16} color='#000' />
                        <S.Info opacity={0.6}>
                            {vehicle.engineSize}
                        </S.Info>
                    </S.IconInfoContainer>
                    <S.IconInfoContainer>
                        <fl.Transmission size={16} color='#000' />
                        <S.Info opacity={0.6}>
                            {vehicle.details.specification.transmission}
                        </S.Info>
                    </S.IconInfoContainer>
                    <S.IconInfoContainer>
                        <fl.TopSpeed size={16} color='#000' />
                        <S.Info opacity={0.6}>
                            {vehicle.mileage.toLocaleString('de-DE')}km
                        </S.Info>
                    </S.IconInfoContainer>
                </S.DataIconsContainer>

            </DataWithSkeleton>
            <S.EventInfoContainer page={page}>

                <DataWithSkeleton width={150} height={70}>
                    <S.Info opacity={0.8}>
                        {
                            (days === 0 && hours === 0) ?
                                'This event has started' :
                                `This event will begin in`
                        }
                    </S.Info>
                    {
                        (days > 0 || hours > 0) && (

                            <S.AuctionContainer>
                                <S.EventTimeContainer>
                                    <S.EventTime>
                                        <S.Info>
                                            {days}
                                        </S.Info>
                                    </S.EventTime>
                                    <S.Info fontSize='12px'>
                                        {days === 1 ? 'day' : 'days'}
                                    </S.Info>
                                </S.EventTimeContainer>
                                <S.EventTimeContainer>
                                    <S.EventTime>
                                        <S.Info>
                                            {hours}
                                        </S.Info>
                                    </S.EventTime>
                                    <S.Info fontSize='12px'>
                                        {hours === 1 ? 'hour' : 'hours'}
                                    </S.Info>
                                </S.EventTimeContainer>
                            </S.AuctionContainer>
                        )
                    }
                </DataWithSkeleton>
                <DataWithSkeleton width={90} height={52}>
                    <S.BidContainer>
                        <S.Info opacity={0.5} fontWeight={600}> Starting Bid: </S.Info>
                        <S.Price>€ {vehicle.startingBid.toLocaleString('de-DE')}</S.Price>

                    </S.BidContainer>

                </DataWithSkeleton>
            </S.EventInfoContainer>

        </S.DataContainer>
    )
}