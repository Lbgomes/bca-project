import { styled } from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 1350px) {
        grid-template-columns: repeat(1, 1fr);
    place-items: center;

    }

`

export const NoResults = styled.div`

`