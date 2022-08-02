import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    @media (max-width: 414px) {
        max-width: 404px;
    }

`

export const DivTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: auto;
    @media (max-width: 414px) {
        width: 414px;
        margin-left: 2rem;
    }
`

export const Title = styled.h2`
    margin-right: 20rem;
    color: #373737;
    font-weight: 700px;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 414px) {
        font-size: 35px;
        margin-right: 1rem;
        margin-left: 1.5rem;
    }
`

export const DivFilters = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60rem;
    border-bottom: 0.05rem outset gray;
    @media (max-width: 414px) {
        width: 380px;
        justify-content: start;
    }
`
export const Filters = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40rem;
    margin-right: 20rem;
    @media (max-width: 414px) {
        margin-right: 1rem;
        width: 200px;
        margin-left: 2rem;
    }
   
`

export const Order = styled.div`
    width: 7.5rem;
    position: relative;
`

export const MenuDown = styled.div`
    display: flex;
    flex-direction: row;
`

export const IntroFilter = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: start;
    color: black;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    img {
        margin-top: 0.1rem;
        width: 0.7rem;
        height: 1rem;
    }
    p{
        margin: 0;
        width: 6rem;
    }
`

export const Filter = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #373737;    
    font-size: 14px;
    :hover{
        background-color: #F7F7F7;
        border-radius: 1rem;
    }
    @media (max-width: 414px) {
        display: none;
    }
`