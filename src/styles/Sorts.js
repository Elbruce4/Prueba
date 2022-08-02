import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    top: 40px;
    right: 0.0rem;
    width: 12rem;
    background-color: white;
    z-index: 3;
    height: 20rem;
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.2);
    p {
        font-family: 'Montserrat', sans-serif;
        color: #373737;
        font-size: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        width: 138px;
        font-weight: 400;
    }
    
`

export const DivParticular = styled.div`
    display: flex;
    flex-direction: column;
    height: 3rem;
    border-bottom: 1px solid #c0baba7f;
    
`