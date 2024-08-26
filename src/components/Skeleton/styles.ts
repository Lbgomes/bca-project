import { css, styled } from "styled-components";

interface ContainerProps {
    ishidden?: string
}
export const Container = styled.div<ContainerProps>`
    ${({ ishidden }) => css`
        display: ${ishidden === 'true' ? 'none' : 'block'};

`}
`
