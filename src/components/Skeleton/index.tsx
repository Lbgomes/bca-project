import Skeleton from 'react-loading-skeleton';
import * as S from './styles';
import { useCar } from 'context/car';

interface DataWithSkeletonProps {
    children: React.ReactNode;
    width?: number;
    height?: string | number | undefined;
    isHidden?: boolean;
}

function DataWithSkeleton({ children, width = 150, height, isHidden = false }: DataWithSkeletonProps) {
    const { isLoading } = useCar()

    return (
        <S.Container isHidden={isHidden}>
            {isLoading ?
                <S.Container aria-label='loading' >
                    <Skeleton aria-label="loading" width={width ? width : 'auto'} height={height ? height : 'auto'} borderRadius={'10px'} />
                </S.Container> : (
                    <>
                        {children}
                    </>
                )
            }
        </S.Container>
    );
};

export default DataWithSkeleton