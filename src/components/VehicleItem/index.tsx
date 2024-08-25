import { useState, useEffect, useCallback } from 'react';
import { differenceInDays, differenceInHours, addDays } from 'date-fns';
import { Link } from 'react-router-dom';
import * as S from './styles';
import * as Bs from '@styled-icons/boxicons-solid';
import * as Br from '@styled-icons/boxicons-regular';
import * as fl from '@styled-icons/fluentui-system-regular';
import placeholder from '../../assets/car.jpg';
import { VehicleType } from 'types/vehicle';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useCar } from 'context/car';

interface VehicleItemProps {
    index: number;
    page: number;
    vehicle: VehicleType;
    handleCarData: (vehicle: VehicleType) => void;
    handleFavourite: (vehicle: VehicleType) => void;
    isFavorite: boolean;
}

const VehicleItem = ({ index, vehicle, handleCarData, handleFavourite, isFavorite, page }: VehicleItemProps) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });
    const { isLoading, handleIsLoading } = useCar()
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
    }, [calculateTimeLeft, page]);

    useEffect(() => {
        handleIsLoading(true);
    }, [page])

    const { days, hours } = timeLeft;


    interface DataWithSkeletonProps {
        children: React.ReactNode;
        width?: number;
        height?: number;
    }

    const DataWithSkeleton = ({ children, width = 200, height }: DataWithSkeletonProps) => {
        return (
            <S.InfoContainer>
                {isLoading ?
                    <S.SkeletonContainer aria-label='loading' >
                        <Skeleton aria-label="loading" width={width ? width : 'auto'} height={height ? height : 'auto'} borderRadius={'10px'} />
                    </S.SkeletonContainer> : (
                        <>
                            {children}
                        </>
                    )
                }
            </S.InfoContainer>
        );
    };

    return (
        <S.VehicleContainer>
            <Link to={`/${index + 1}`} onClick={() => { handleCarData(vehicle); window.scrollTo(0, 0); }}>

                <DataWithSkeleton width={215} height={162.4}>
                    <S.Image src={placeholder} />
                </DataWithSkeleton>

                <S.DataContainer>

                    <DataWithSkeleton>
                        <S.Title>
                            {vehicle.make} {vehicle.model}
                        </S.Title>
                    </DataWithSkeleton>


                    <DataWithSkeleton>
                        <S.IconInfoContainer>
                            <fl.TopSpeed size={16} color='#000' />
                            <S.Info opacity={0.6}>
                                {vehicle.mileage.toLocaleString('de-DE')}km
                            </S.Info>
                        </S.IconInfoContainer>
                    </DataWithSkeleton>
                    <S.EventInfoContainer>

                        <DataWithSkeleton>
                            <S.Info opacity={0.8}>
                                {
                                    (days === 0 && hours === 0) ?
                                        'This event has started' :
                                        `This event will begin in`
                                }
                            </S.Info>
                            {
                                (days !== 0 && hours !== 0) && (

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
                        <DataWithSkeleton>
                            <S.BidContainer>
                                <S.Info opacity={0.5} fontWeight={600}> Starting Bid: </S.Info>
                                <S.Price>€ {vehicle.startingBid.toLocaleString('de-DE')}</S.Price>

                            </S.BidContainer>

                        </DataWithSkeleton>
                    </S.EventInfoContainer>

                </S.DataContainer>
            </Link>

            <S.Favourite onClick={() => handleFavourite(vehicle)}>
                {isFavorite ? <Bs.Heart aria-label="favourite" /> : <Br.Heart aria-label="non-favourite" />}
            </S.Favourite>
        </S.VehicleContainer>
    );
};

export default VehicleItem;
