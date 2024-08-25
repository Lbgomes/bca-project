import { css, styled } from "styled-components";

interface ContainerProps {
    isHidden?: boolean
}
export const Container = styled.div<ContainerProps>`
    ${({ isHidden }) => css`
        display: ${isHidden ? 'none' : 'block'};

`}
`
