import { styled } from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
    }

`

