import styled from "styled-components";


export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
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
    width: 3rem;
    height: 3rem;
  }
`

export const Modelos = styled.div`
    color: black;
    padding-bottom: 1.2rem;
`

export const ModelosSelected = styled.div`
    padding-bottom: 1.2rem;
    border-bottom: 0.25rem red solid;
    color: red;
`

export const DivModels = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 15rem;
`