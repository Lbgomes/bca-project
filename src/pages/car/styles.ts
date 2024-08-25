import styled from "styled-components";

export const Main = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Container = styled.div`
    max-width: 1300px;
    width: 100%;
    display: flex;
    flex-direction: column;

`

export const ContentContainer = styled.div`

display: flex;
gap: 1rem;
@media(max-width: 1000px) {
    flex-direction: column;
}
`

export const ImageContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.5rem;
    width: fit-content;
`

export const Image = styled.img`
    max-width: 750px;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 10/7;
`


export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.white};

`
export const InfoTitle = styled.h1`

    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.sizes.small};
`
export const InfoText = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.sizes.large};
    font-weight: 700;
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    width: 100%;
    padding: 2rem 1rem;

`

export const Title = styled.h2`
margin-top: 1.5rem;
    padding: 1rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
`

export const HighlightDataContainer = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-between;
    @media(max-width: 800px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 1rem;
        place-items: center;
    }
`

export const Highlight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    svg {
        width: 1.5rem;
    }
`


export const HighlightText = styled.p`

    color: ${({ theme }) => theme.colors.black};
    font-size: 15px;
    font-weight: 500;

`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 130rem;
  @media(max-width: 800px){
  max-width: 80%;
  }
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

`

export const Text = styled.p`
  font-size: 1rem;
`
export const DetailsContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;


`

export const Detail = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;

`

export const DetailContent = styled.p`


`