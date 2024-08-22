import { styled } from "styled-components";

export const VehicleContainer = styled.div`
a{
  display: flex;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  text-decoration: none;
}
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

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.smallest};
  font-weight: 500;

  svg {
    width: 1.4rem;
  }
`

export const Favourite = styled.div`
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
