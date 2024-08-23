import * as S from './styles';
import Select from 'react-select';

interface FilterProps {
    title: string;
    filter: string;
    setFilter: (e: { label: string, value: string }) => void;
    value?: string;
    options?: { label: string, value: string }[];
    isDisabled?: boolean;
}

export default function Filter({ title, isDisabled = false, filter, options = [], setFilter, value }: FilterProps) {
    const defaultOption = { label: "Select your filter", value: "0" };
    const enhancedOptions = [defaultOption, ...options];

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <Select 
                options={enhancedOptions} 
                isDisabled={isDisabled} 
                onChange={(e) => setFilter(e as { label: string, value: string })} 
            />
        </S.Container>
    );
}