import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 3rem 12rem;
`


export const Image = styled.div`
    img{
        width: 12rem;
        height: 10rem;
    }
`

export const EachCarDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 1rem 1rem;
    padding: 0;
    width: 13rem;
    height: 16rem;
`

export const DivPriceAndYear = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: 2.5rem;
    width: 8rem;
`

export const PPriceAndYear = styled.p`
    margin: 0;
`

export const Name = styled.h4`
    margin-left: 4rem;
`