import * as S from './styles';
import Select from 'react-select';

interface FilterProps {
    title: string;
    setFilter: (e: { label: string, value: string }) => void;
    options?: { label: string, value: string }[];
    isDisabled?: boolean;
    value?: { label: string, value: string };
}

export default function Filter({ title, isDisabled = false, options = [], setFilter, value }: FilterProps) {
    const defaultOption = { label: title, value: "0" };
    const enhancedOptions = [defaultOption, ...options];

    return (
        <S.Container>
            <Select
                placeholder={title}
                options={enhancedOptions}
                value={value?.label !== "Select your filter" ? value : defaultOption}
                isDisabled={isDisabled}
                onChange={(e) => setFilter(e as { label: string, value: string })}
                aria-label='Filter'
                styles={{
                    control: (baseStyles, props) => ( console.log(props.selectProps.value),{

                        ...baseStyles,
                        width: 'fit-content',
                        border: props.selectProps.value && (props.selectProps.value as { label: string, value: string })?.value !== '0' ? "2px solid #000" : "2px solid #E4E4E4",
                        borderRadius: "10px",

                        color:"#000",
                        "div": {
                            color: props.isDisabled ? "#b9b9b9" :  "#2E2E2E",
                            fontWeight: 600,
                        },
                        "span": {
                            display: "none"
                        },
                        ":focus": {
                            borderColor: "#E3E5F2",
                        },
                        "@media(max-width: 768px)": {
                            width: "max-content",

                        }
                    }),
                    menu: (baseStyles, state) => ({
                        ...baseStyles,
                        width: "250px",
                        cursor: "pointer",
                        borderColor: "#E3E5F2",
                        zIndex: 10,
                        
                    }),
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        transition: "all 0.15s ease",
                        width: "250px",
                        cursor: "pointer",
                        color: "#000",
                        backgroundColor: state.isSelected ? "#DADADA" : "transparent",

                        "&:hover": {
                            backgroundColor: "#DADADA",
                        },
                    }),
                }}
            />
        </S.Container>
    );
}