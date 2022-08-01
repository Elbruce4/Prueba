import styled from "styled-components";

export const DivNav = styled.div`
    position: absolute;
    margin-left: 56rem;
    z-index: 5;
    width: 25rem;
    height: 37rem;
    background-color: white;
    border-left: grey solid 0.5px;
    border-top: grey solid 0.5px;
    border-bottom: grey solid 0.5px;
`

export const HeaderNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    margin-top: 0.8rem;
`
export const DivOptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;
    margin-right: 2rem;
    padding-top: 1rem;
    margin-bottom: 0.2rem;
    p {
        font-family: 'Montserrat', sans-serif;
        color: #373737;
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`

export const CloseIcon = styled.div`
    margin-right: 1rem;
    img{
        width: 0.7rem;
        height: 0.7rem;
    }
`

export const PClose = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #373737;
    font-size: 10px;
    margin: 0.5rem;
    
`