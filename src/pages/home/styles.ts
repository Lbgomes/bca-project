import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`
export const Container = styled.div`
max-width: 1200px;
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
`

export const VehicleContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  position: relative;
`

export const Image = styled.img`
  width: 215px;
  aspect-ratio: 13/10;
`

export const DataContainer = styled.div`

`
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 500;
`

export const Favourite = styled.div`
width: 2rem;
height: 2rem;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.white};
position: absolute;
top: 1rem;
right: 1rem;
cursor: pointer;
`

export const PaginationContainer = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
 ul {
  gap: 1rem;
  list-style-type: none;
  width: 100%;
  display: flex;

 }
 li {
  cursor: pointer;

 }
`