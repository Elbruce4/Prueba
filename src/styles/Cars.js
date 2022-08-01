import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 2rem 12rem;
    @media (max-width: 414px) {
        flex-direction: column;
        margin-left: 5rem;
        margin-top:0;
        margin-bottom: 0;
    }
`
export const DivBox = styled.div`
    position: relative;
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
    @media (max-width: 414px) {
        margin-top:0;
        margin-bottom: 0;
    }
    
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
    font-family: 'Montserrat', sans-serif;
`

export const Name = styled.h3`
    font-family: 'Montserrat', sans-serif;
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