import { css, styled } from "styled-components";

interface ContainerProps {
    ishidden?: boolean
}
export const Container = styled.div<ContainerProps>`
    ${({ ishidden }) => css`
        display: ${ishidden ? 'none' : 'block'};

`}
`
