import styled from "styled-components";


export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
`
export const FirstPartHeader = styled.div`
    width: 25rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Menu = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 4rem;
    img{
        width: 1rem;
        height: 1rem;
    }
`

export const StyledLogo = styled.div`
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const Modelos = styled.div`
    color: black;
    padding-bottom: 1.2rem;
`

export const ModelosSelected = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: ${({size}) => size ? "6rem" : "9rem"};
    padding-bottom: 0.8rem;
    border-bottom: 0.25rem red solid;
    color: #EB0A1E;
`

export const PModel = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: .80rem;
    font-weight: bold;
`

export const DivModels = styled.div`
    /* margin-left: 10rem;
    position: absolute; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 15rem;
`