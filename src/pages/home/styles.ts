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
  flex-wrap: wrap;
  gap: 1rem;
`
export const Container = styled.div`
max-width: 1200px;
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 2rem;
`
export const ItemPerPage = styled.input`

  width: 3rem;
  height: 2rem;

`
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 500;
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