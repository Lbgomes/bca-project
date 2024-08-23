import { styled } from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
        width: 180px;
    }
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 500;
`

