import { css, styled } from "styled-components";

export const VehicleContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    border: ${theme.border.primary};
    border-radius: ${theme.border.radius.medium};
    width: 100%;
    height: fit-content;
  a{
    border-radius: 24px;
    display: flex;
    padding: 1rem;
    align-items: center;
    text-decoration: none;
    gap: 2rem;

@media(max - width: 768px) {
  align-items: start;
  flex-direction: column;
}

}
`}
`
export const SkeletonContainer = styled.div`

`
export const Image = styled.img`
  ${({ theme }) => css`
  width: 215px;
  aspect-ratio: 13/10;
  border-radius: ${theme.border.radius.smallHalf};
  `}
`

export const DataContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1.2rem;
width: 100%;
align-self: end;

@media(max-width: 768px) {
  width: 100%;
}
`

export const Title = styled.h2`
  ${({ theme }) => css`

  color: ${theme.colors.black};
  font-size: ${theme.font.sizes.medium};
  font-weight: 500;
`}
`

export const InfoContainer = styled.div`

`
interface InfoProps {
  opacity?: number;
  fontWeight?: number;
  fontSize?: string;
}

export const IconInfoContainer = styled.div`

  display: flex;
  align-items: center;
  gap: 0.5rem;
  `
export const Info = styled.p<InfoProps>`
  ${({ theme, opacity = 1, fontWeight = 500, fontSize }) => css`

  color: ${theme.colors.black};
  font-size: ${fontSize ? fontSize : theme.font.sizes.xsmall};
  font-weight: ${fontWeight};
  opacity: ${opacity};

`}
`
export const AuctionContainer = styled.div`

  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
  `

export const EventTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `
export const EventTime = styled.div`
  ${({ theme, }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.border.radius.small};
  background-color: ${theme.colors.background};
  width: 35px;
  height: 35px;

`}
`

export const BidContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

`

export const Price = styled.p`
  ${({ theme }) => css`

  color: ${theme.colors.black};
  font-size: ${theme.font.sizes.medium};
  font-weight: 600;
`}
`

export const EventInfoContainer = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: flex-end;
`

export const Favourite = styled.button`
  ${({ theme }) => css`
  border: none;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.3rem;
  cursor: pointer;
  background-color:  ${theme.colors.white};

`}
`
