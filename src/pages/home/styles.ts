import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`
export const Container = styled.div`
max-width: 1200px;
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 2rem;
`
export const ItemPerPage = styled.input`

  width: 3rem;
  height: 2rem;

`
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 500;
`

export const PaginationContainer = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
  margin: 1rem 0;
 .pagination {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    list-style-type: none;

    a {
      border: 1px solid #b9b9b9;
      border-radius: 3px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      cursor: pointer;
    }

    li {
      border-radius: 3px;

      &.previous {
        margin-left: 0;
      }

      &.next {
        margin-right: 0;
      }

      &.active {
        a {
          border: none;
          background-color: #E4672E;
          color: #fff;
          cursor: default;
          user-select: none;
          outline: none;
        }

        svg {
          color: #000 !important;
        }
      }

      & + li {
        margin-right: 0;
        margin-left: 10px;
      }
    }

    li:hover {
      transition: all 0.1s ease;
      background-color: #E4672E;
      a{
        color: #fff;
      }
    }
  }
`


export const SkeletonImage = styled.div`
  width: 300px;
  height: 100px;
`