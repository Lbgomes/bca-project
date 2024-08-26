import { Link } from 'react-router-dom';
import * as S from './styles';
import placeholder from '../../assets/car.jpg';
import { VehicleType } from 'types/vehicle';
import 'react-loading-skeleton/dist/skeleton.css'
import DataWithSkeleton from 'components/Skeleton';
import { VehicleData } from 'components/VehicleData';
import * as Bs from '@styled-icons/boxicons-solid';
import * as Br from '@styled-icons/boxicons-regular';

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
                    <DataWithSkeleton >
                        <S.Image src={placeholder} />
                    </DataWithSkeleton>
                </S.ImageContainer>

                <VehicleData vehicle={vehicle} isFavorite={isFavorite} />
            </Link>
                <S.Favourite onClick={() => handleFavourite(vehicle)} aria-label='favourite-button'>
                    {isFavorite ? <Bs.Heart aria-label="favourite" /> : <Br.Heart aria-label="non-favourite" />}
                </S.Favourite>


        </S.VehicleContainer>
    );
};

export default VehicleItem;
