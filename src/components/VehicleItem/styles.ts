import { css, styled } from "styled-components";

export const VehicleContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    border: ${theme.border.primary};
    border-radius: ${theme.border.radius.medium};
    width: 100%;
  a{
    height: 90%;
    border-radius: 24px;
    display: flex;
    padding: 1rem;
    align-items: center;
    text-decoration: none;
    gap: 2rem;
    
    @media(max-width: 650px) {
      height: auto;
      align-items: start;
      flex-direction: column;
    }
  }
  @media(max-width: 650px) {
    max-width: 90%;
  }
`}
`

export const SkeletonContainer = styled.div`

`
export const ImageContainer = styled.div`
    align-self: flex-start;
  width: 215px;
  aspect-ratio: 13/10;

  @media(max-width: 650px) {
    width: 100%;
  aspect-ratio: 13/10;
    .react-loading-skeleton{
      width: 100% !important;
      height: 100% !important;
      aspect-ratio: 13/10;
    }
  }
`

export const Image = styled.img`
  ${({ theme }) => css`
  width: 215px;
  aspect-ratio: 13/10;
  border-radius: ${theme.border.radius.smallHalf};
  @media(max-width: 650px) {
    width: 100%;
  }
  `}
`

export const InfoContainer = styled.div`

`
interface InfoProps {
  opacity?: number;
  fontWeight?: number;
  fontSize?: string;
}

export const Info = styled.p<InfoProps>`
  ${({ theme, opacity = 1, fontWeight = 500, fontSize }) => css`

  color: ${theme.colors.black};
  font-size: ${fontSize ? fontSize : theme.font.sizes.xsmall};
  font-weight: ${fontWeight};
  opacity: ${opacity};

`}
`

export const Favourite = styled.div`
${({ theme }) => css`
width: 1.5rem;
height: 1.5rem;
display: flex;
position: absolute;
top: 1rem;
right: 1rem;
padding: 0.3rem;
cursor: pointer;
border-radius: ${theme.border.radius.smallHalf};
z-index: 10
color: ${theme.colors.black};
background-color:  ${theme.colors.white};
@media (max-width: 768px) {
  top: 1.5rem;
  right: 1.5rem;
}
`}
`