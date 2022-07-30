import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const DivTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0.5rem 10rem;
    width: 70rem;
    img{
        width: 30rem;
        height: 30rem;
    }
`
export const RigthSizeTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 8rem 5rem;
    width: 35rem;
`

export const DivImg = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 12rem;
    width: 60rem;
    justify-content: space-around;
`

export const DetailDivImg = styled.div`
    display: flex;
    flex-direction: Column;
    justify-content: center;
    img {
        width: 15rem;
        height: 8rem;
        padding: 0.5rem;
    }
`

export const Detail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60rem;
    margin: 1rem 10rem;
    img {
        width: 25;
        height: 15rem;
    }
`

export const DetailSize = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0rem 5rem;
`

export const H4 = styled.h4`
    height: 29px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;

    letter-spacing: -0.4px;

    color: #373737;
`