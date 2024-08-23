import { useCar } from "context/car"
import * as S from './styles'
import placeholder from '../../assets/car.jpg'
import * as B from '@styled-icons/bootstrap'
import * as Br from '@styled-icons/boxicons-regular'
import * as fl from '@styled-icons/fluentui-system-regular'
import * as M from '@styled-icons/material-outlined/PersonSearch'
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
function Car() {

    const { vehiclesData, handleCarData, carData } = useCar()
    const { pathname } = useLocation()

    useEffect(() => {
        if (!carData) {
            const id = pathname.split('/')[1]
            handleCarData(vehiclesData[parseInt(id) - 1])
        }
    })
    return (

        <S.Main>
            {
                carData && (
                    <S.Container>
                        <S.ContentContainer>
                            <S.ImageContainer>
                                <S.Image src={placeholder} />
                            </S.ImageContainer>
                            <S.InfoContainer>
                                <S.InfoTitle> {carData.make} {carData.model} {carData.mileage} km</S.InfoTitle>
                                <S.InfoText>{carData.startingBid} €</S.InfoText>
                                <S.InfoText>{carData.auctionDateTime}</S.InfoText>
                            </S.InfoContainer>
                        </S.ContentContainer>
                        <S.DataContainer>

                            <S.Title>Highlights</S.Title>

                            <S.HighlightDataContainer>
                                <S.Highlight>
                                    <B.Speedometer />
                                    <S.HighlightText>Mileage</S.HighlightText>
                                    <S.HighlightText>{carData.mileage} km</S.HighlightText>

                                </S.Highlight>

                                <S.Highlight>
                                    <B.Calendar />
                                    <S.HighlightText>Year</S.HighlightText>
                                    <S.HighlightText>{carData.year}</S.HighlightText>

                                </S.Highlight>
                                <S.Highlight>
                                    <Br.GasPump />
                                    <S.HighlightText>Gas</S.HighlightText>
                                    <S.HighlightText>{carData.fuel}</S.HighlightText>
                                </S.Highlight>
                                <S.Highlight>
                                    <fl.Engine />
                                    <S.HighlightText>Engine Size</S.HighlightText>
                                    <S.HighlightText>{carData.engineSize}</S.HighlightText>
                                </S.Highlight>
                                <S.Highlight>
                                    <fl.Transmission />
                                    <S.HighlightText>Gear Type</S.HighlightText>
                                    <S.HighlightText>{carData.details.specification.transmission}</S.HighlightText>
                                </S.Highlight>
                                <S.Highlight>
                                    <M.PersonSearch />
                                    <S.HighlightText>Past owners</S.HighlightText>
                                    <S.HighlightText>{carData.details.ownership.numberOfOwners}</S.HighlightText>

                                </S.Highlight>
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
                                <S.Detail>
                                    <S.DetailContent>
                                        Maker
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.make}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Model
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.make}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Engine Size
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.engineSize}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Fuel
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.fuel}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Year
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.year}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Mileage
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.mileage} km
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        StartingBid
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.startingBid}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        VehicleType
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.specification.vehicleType}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Colour
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.specification.colour}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Fuel
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.specification.fuel}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Transmission
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.specification.transmission}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Number of doors
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.specification.numberOfDoors}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Co2 emissions
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.specification.co2Emissions}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Nox emissions
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.specification.noxEmissions}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Number of keys
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.specification.numberOfKeys}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Log book
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.ownership.logBook}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Number of owners
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.ownership.numberOfOwners}
                                    </S.DetailContent>
                                </S.Detail>
                                <S.Detail>
                                    <S.DetailContent>
                                        Date of registration
                                    </S.DetailContent>
                                    <S.DetailContent>
                                        {carData.details.ownership.dateOfRegistration}
                                    </S.DetailContent>
                                </S.Detail>
                            </S.DetailsContainer>
                        </S.DataContainer>

                    </S.Container>
                )
            }

        </S.Main>

    )
}

export default Car