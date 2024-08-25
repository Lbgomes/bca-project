import styled, { css } from 'styled-components'

export const Main = styled.div`
  height: 100%;
  max-width: 1300px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; 
  padding: 0 1rem;
`
export const FiltersContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`
export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

`
export const SwitchContainer = styled.div`
  ${({ theme }) => css`
  width: 250px;
  .react-switch-selector-option-selected{

    /* height: auto; */
    /* padding: 0.5rem; */
box-shadow: 0px 1px 3px 0px #0000001A;

  }
  .react-switch-selector-option {
    white-space: nowrap;
    /* display: flex; */
    align-items: center;
    justify-content: center;
  }

  .go3615043926:before {
  }
label {
  font-weight: 700;
  font-size: ${theme.font.sizes.xsmall};
  color: ${theme.colors.gray};
}

`}
`

export const Container = styled.div`
width: 100%;
min-height: 700px;
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 2rem;
`



export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 500;
`

export const PaginationContainer = styled.div`
  ${({ theme }) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
    .pagination {
    display: flex;
    gap: 0.3rem;
    margin: 0 auto;
   background-color: ${theme.colors.background};
   padding: 0.2rem;
   border-radius: ${theme.border.radius.xsmall};
    font-size: 14px;
    font-weight: 600;
    list-style-type: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
    .arrow {
      display: none;
    }
    a {
      border-radius: 3px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.gray};
      cursor: pointer;
    }

    li {
      border-radius: 3px;

      &.active {
        a {
          border: none;
          background-color: ${theme.colors.white};
          border-radius: ${theme.border.radius.xsmall};
          cursor: default;
          user-select: none;
          box-shadow: 0px 1px 2px 0px #0000000F;
          outline: none;
        }

        svg {
          color: #000 !important;
        }
      }
    }

    li:hover {
      transition: all 0.1s ease;
      background-color: ${theme.colors.white};
      border-radius: ${theme.border.radius.xsmall};
      box-shadow: 0px 1px 2px 0px #0000000F;

    }
  `}
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin: 4rem 0;
`

export const ItemPerPageContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 600;
    border: ${theme.border.primary};
    border-radius: ${theme.border.radius.small};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `}
`
  
export const ItemPerPage = styled.input`
  border: none;
  width: 3rem;
  height: 1.5rem;
`
export const SkeletonImage = styled.div`
  width: 300px;
  height: 100px;
`