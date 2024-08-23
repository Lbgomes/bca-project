import { styled } from "styled-components";

export const VehicleContainer = styled.div`
  position: relative;
  
a{
  display: flex;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  text-decoration: none;
  gap: 2rem;

  @media(max-width: 768px) {
    align-items: start;
    flex-direction: column;
  }

}
`
export const SkeletonContainer = styled.div`

`
export const Image = styled.img`
  width: 215px;
  aspect-ratio: 13/10;
`

export const DataContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
width: 30%;

@media(max-width: 768px) {
  width: 100%;
}
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 500;
`

export const InfoContainer = styled.div`

  svg {
    width: 1.4rem;
  }
`

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;

`

export const Favourite = styled.button`
border: none;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.colors.neutral};
  cursor: pointer;

  svg {
    color:  #E4672E;
  }
`
