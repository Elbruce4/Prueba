import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 2rem 12rem;
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
    margin-bottom: 0.5rem;
    width: 8rem;
`

export const PPriceAndYear = styled.p`
    margin: 0;
    font-size: 12px;
`

export const Name = styled.h3`
    color: ${({selectColor}) => selectColor ? "red" : "black"};
    margin-left: 4rem;
    margin-bottom: 0.5rem;
`

export const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 20px;
    width: 10rem;
    height: 8rem;
    margin-left: 1.5rem;
    padding: .5rem 0rem;
    text-align: center;
`