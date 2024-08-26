import styled, { css } from "styled-components";


export const HeaderContainer = styled.header`

    display: flex;
    padding: 1.5rem;
    box-shadow: 0px 2px 4px 0px #00000014;
    
    
    `
export const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    a{
        text-decoration: none;

    }
`

export const Title = styled.h2` 
display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
`

export const Favourite = styled.button`
${({ theme }) => css`
border: none;
width: 1.5rem;
height: 1.5rem;
display: flex;
cursor: pointer;
background-color:  ${theme.colors.white};
`}
`

export const ModalContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.5rem;
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: 999;
background-color: rgba(0, 0, 0, 0.5);
`

export const Modal = styled.div`
${({ theme }) => css`
display: flex;
flex-direction: column;
padding: 1.5rem 1rem;
align-items: start;
justify-content: center;
max-width: 350px;
width: fit-content;
height: fit-content;
position: relative;
border-radius: ${theme.border.radius.smallHalf};
gap: ${theme.spacings.xsmall};
background-color: ${theme.colors.white};
`}
`

export const ModalTitle = styled.h3`
${({ theme }) => css`
color: ${theme.colors.black};
font-size: 24px;
font-weight: 600;
`}
`
export const ModalSubtitle = styled.p`
    display: flex;
    gap: 0.4rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray};	

`
export const ModalImageContainer = styled.div`
${({ theme }) => css`

display: flex;
gap: ${theme.spacings.xxxsmall}; 
`}
`


export const ModalDataContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
`


export const Button = styled.button`
${({ theme }) => css`
border: none;
width: 100%;
height: 40px;
padding: 0.3rem;
cursor: pointer;
border-radius: ${theme.border.radius.small};
background-color:  ${theme.colors.darkGray};
font-weight: 600;
font-size: 16px;
a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${theme.colors.white};

    }
`}
`
export const Image = styled.img`
${({ theme }) => css`
width: 170px;
/* aspect-ratio: 1 / 1; */
border-radius: ${theme.border.radius.small};
`}
`

export const CloseContainer = styled.div`
${({ theme }) => css`

position: absolute;
top: 1rem;
right: 1rem;
cursor: pointer;

`}
`