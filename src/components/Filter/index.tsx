import * as S from './styles';
import Select from 'react-select';

interface FilterProps {
    title: string;
    setFilter: (e: { label: string, value: string }) => void;
    options?: { label: string, value: string }[];
    isDisabled?: boolean;
}

export default function Filter({ title, isDisabled = false, options = [], setFilter }: FilterProps) {
    const defaultOption = { label: "Select your filter", value: "0" };
    const enhancedOptions = [defaultOption, ...options];

    return (
        <S.Container>
            <Select
                placeholder={title}
                options={enhancedOptions}
                isDisabled={isDisabled}
                onChange={(e) => setFilter(e as { label: string, value: string })}
                aria-label='Filter'
                styles={{
                    control: (baseStyles, props) => ({

                        ...baseStyles,
                        width: 'fit-content',
                        border: props.selectProps.value ? "2px solid #000" : "2px solid #E4E4E4",
                        borderRadius: "10px",
                        color: "#000",
                        "div": {
                            color: "#2E2E2E",
                            fontWeight: 600,
                        },
                        "span": {
                            display: "none"
                        },
                        ":focus": {
                            borderColor: "#E3E5F2",
                        },
                    }),
                    menu: (baseStyles, state) => ({
                        ...baseStyles,
                        width: "250px",
                        cursor: "pointer",
                        borderColor: "#E3E5F2",
                        zIndex: 10
                    }),
                }}
            />
        </S.Container>
    );
}