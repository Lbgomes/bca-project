import { useCar } from "context/car"
import * as S from './styles'
import placeholder from '../../assets/car.jpg'
import * as B from '@styled-icons/bootstrap'
import * as Br from '@styled-icons/boxicons-regular'
import * as fl from '@styled-icons/fluentui-system-regular'
import * as M from '@styled-icons/material-outlined/PersonSearch'
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { VehicleData } from "components/VehicleData"
function Car() {

    type Options = { label: string, value: string }
    const { vehiclesData, handleCarData, carData } = useCar()
    const { pathname } = useLocation()
    const [details, setDetails] = useState<Options[]>([] as Options[])
    const id = pathname.split('/')[1]

    interface HighlightProps {
        label: string
        value: string
        Icon: React.ReactNode
    }
    const RenderHighlight = ({ Icon, label, value }: HighlightProps) => (
        <S.Highlight>
            {Icon}
            <S.HighlightText>{label}</S.HighlightText>
            <S.HighlightText>{value}</S.HighlightText>
        </S.Highlight>
    );

    useEffect(() => {
        if (!carData) {
            handleCarData(vehiclesData[parseInt(id) - 1])
        }
    })
    useEffect(() => {
        if (carData)
            setDetails([
                { label: "Maker", value: carData.make },
                { label: "Model", value: carData.model },
                { label: "Engine Size", value: carData.engineSize },
                { label: "Fuel Type", value: carData.fuel },
                { label: "Year", value: carData.year.toString() },
                { label: "Mileage", value: `${carData.mileage} km` },
                { label: "Starting Bid", value: `$${carData.startingBid.toLocaleString()}` },
                { label: "Vehicle Type", value: carData.details.specification.vehicleType },
                { label: "Colour", value: carData.details.specification.colour },
                { label: "Fuel (Specification)", value: carData.details.specification.fuel },
                { label: "Transmission", value: carData.details.specification.transmission },
                { label: "Number of Doors", value: carData.details.specification.numberOfDoors.toString() },
                { label: "CO2 Emissions", value: carData.details.specification.co2Emissions },
                { label: "NOx Emissions", value: carData.details.specification.noxEmissions.toString() },
                { label: "Number of Keys", value: carData.details.specification.numberOfKeys.toString() },
                { label: "Log Book", value: carData.details.ownership.logBook },
                { label: "Number of Owners", value: carData.details.ownership.numberOfOwners.toString() },
                { label: "Date of Registration", value: new Date(carData.details.ownership.dateOfRegistration).toLocaleDateString() }
            ])
    }, [carData])
    return (

        <S.Main>
            {
                carData && (
                    <>
                        <S.Container>
                            <S.ContentContainer>
                                <S.ImageContainer>
                                    <S.Image src={placeholder} />
                                </S.ImageContainer>

                            </S.ContentContainer>
                            <S.DataContainer>
                                <S.InfoContainer device="mobile">
                                    <VehicleData vehicle={carData} isFavorite={carData.favourite} page="car" />
                                </S.InfoContainer>
                                <S.Title>Highlights</S.Title>

                                <S.HighlightDataContainer>
                                    <RenderHighlight Icon={<B.Speedometer />} label="Mileage" value={`${carData.mileage.toLocaleString('de-DE')} km`} />
                                    <RenderHighlight Icon={<B.Calendar />} label="Year" value={carData.year.toString()} />
                                    <RenderHighlight Icon={<Br.GasPump />} label="Fuel Type" value={carData.fuel} />
                                    <RenderHighlight Icon={<fl.Engine />} label="Engine Size" value={carData.engineSize} />
                                    <RenderHighlight Icon={<fl.Transmission />} label="Gear Type" value={carData.details.specification.transmission} />
                                    <RenderHighlight Icon={<M.PersonSearch />} label="Past owners" value={carData.details.ownership.numberOfOwners.toString()} />
                                </S.HighlightDataContainer>

                                <S.Title>Acessories and Features</S.Title>

                                <S.List>
                                    {carData.details.equipment.map((item, index) => (
                                        <S.Item key={index}>
                                            <Br.Check size={24} />
                                            <S.Text dangerouslySetInnerHTML={{ __html: item }}></S.Text></S.Item>
                                    ))}
                                </S.List>
                                <S.Title>Details</S.Title>
                                <S.DetailsContainer>
                                    {details.map((item, index) => (
                                        <S.Detail key={index}>
                                            <S.DetailContent>
                                                {item.label}
                                            </S.DetailContent>
                                            <S.DetailContent>
                                                {item.value}
                                            </S.DetailContent>
                                        </S.Detail>
                                    ))}
                                </S.DetailsContainer>
                            </S.DataContainer>

                        </S.Container>
                        <S.InfoContainer device="desktop">
                            <VehicleData vehicle={carData} isFavorite={carData.favourite} page="car" />
                        </S.InfoContainer>
                    </>

                )
            }
        </S.Main>

    )
}

export default Car