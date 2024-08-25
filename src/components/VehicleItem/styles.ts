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
    
    @media(max-width: 768px) {
      align-items: start;
      flex-direction: column;
    }
  }
`}
`

export const SkeletonContainer = styled.div`

`
export const ImageContainer = styled.div`
  width: 215px;
  aspect-ratio: 13/10;

  @media(max-width: 768px) {
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
  @media(max-width: 768px) {
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