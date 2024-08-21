import { styled } from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.sizes.medium};
    font-weight: 500;
`

