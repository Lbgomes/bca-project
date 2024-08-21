import * as S from './styles'
import Select from 'react-select';
interface FilterProps {
    title: string
    filter: string
    setFilter: (e: { label: string, value: string }) => void
    value?: string
    options?: any
    isDisabled?: boolean

}

export default function Filter({ title, isDisabled = false, filter, options, setFilter, value }: FilterProps) {

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <Select options={options} defaultValue={{ label: "selecione uma opção", value: "0" }} value={{ label: filter, value }} isDisabled={isDisabled} onChange={(e) => setFilter(e as { label: string, value: string })} />
        </S.Container>
    )
}