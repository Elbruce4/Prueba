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
    @media (max-width: 414px) {
        flex-direction: column;
        width: 414px;
        margin: 0.5rem 1rem;
        img{
            width: 20rem;
            height: 20rem;
        }
    }
`
export const RigthSizeTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 8rem 5rem;
    width: 35rem;
    @media (max-width: 414px) {
        width: 340px;
        margin: 1rem 1rem;
    }
`

export const DivImg = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 8rem;
    width: 70rem;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 414px) {
        display: none;
    }
`

export const DetailDivImg = styled.div`
    display: flex;
    flex-direction: Column;
    justify-content: center;
    width: 15rem;
    img {
        width: 15rem;
        height: 8rem;
        padding: 0.5rem;
        border-radius: 20px;
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
    @media (max-width: 414px) {
        flex-direction: column;
        width: 340px;
        margin: 1rem 1rem;
    }
`

export const DetailSize = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0rem 5rem;
    @media (max-width: 414px) {
        margin: 0 1rem;
    }
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

export const H5 = styled.h5`
    font-family: 'Montserrat', sans-serif;
    //font-weight: 700;
    font-weight: bold;
    color: #373737;
    margin-bottom: 0;
`

export const H2 = styled.h2`
    margin-top: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    color: #373737;
    font-size: 2rem;
    @media (max-width: 414px) {
        margin-bottom: 0.5rem;
    }
`

export const P = styled.p`
    text-align: start;
    color: #373737;
    font-family: 'Montserrat', sans-serif;
`