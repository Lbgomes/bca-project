import Skeleton from 'react-loading-skeleton';
import * as S from './styles';
import { useCar } from 'context/car';

interface DataWithSkeletonProps {
    children: React.ReactNode;
    width?: number;
    height?: string | number | undefined;
    ishidden?: string;
}

function DataWithSkeleton({ children, width = 150, height, ishidden = 'false' }: DataWithSkeletonProps) {
    const { isLoading } = useCar()

    return (
        <S.Container ishidden={ishidden.toString()} aria-label='container'>
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