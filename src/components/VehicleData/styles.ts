import { css, styled } from "styled-components";
interface pageProps {
  page?: 'home' | 'car'
}
export const AuctionContainer = styled.div`

  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
  `

export const EventInfoContainer = styled.div<pageProps>`
  ${({ page = 'home' }) => css`
justify-content: space-between;
display: flex;
flex-direction: ${page === 'car' ? 'column' : 'row'};
align-items: ${page === 'car' ? 'flex-start' : 'flex-end'};
gap: ${page === 'car' ? '1.5rem' : '0'};
`}
`
export const DataIconsContainer = styled.div`

  display: flex;
  gap: 0.5rem;
  flex-direction: column;

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

interface InfoProps {
  opacity?: number;
  fontWeight?: number;
  fontSize?: string;
}


export const Info = styled.p<InfoProps>`
  ${({ theme, opacity = 1, fontWeight = 500, fontSize }) => css`
  text-transform: capitalize;
  color: ${theme.colors.black};
  font-size: ${fontSize ? fontSize : theme.font.sizes.xsmall};
  font-weight: ${fontWeight};
  opacity: ${opacity};

`}
`


export const DataContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
align-self: end;

@media(max-width: 768px) {
  width: 100%;
}
`


export const TitleFavouriteContainer = styled.div`

  display: flex;
  justify-content: space-between;

`

export const Title = styled.h2`
  ${({ theme }) => css`

  color: ${theme.colors.black};
  font-size: ${theme.font.sizes.medium};
  font-weight: 600;
`}
`

export const IconInfoContainer = styled.div`

  display: flex;
  align-items: center;
  gap: 0.5rem;
  `