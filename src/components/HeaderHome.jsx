import { 
    StyledLogo,
    DivHeader,
    Modelos,
    FirstPartHeader,
    Menu,
    ModelosSelected,
    DivModels,
    PModel,
    DivNavBar} from '../styles/HeaderHome';
  import logo from "../assets/svg/Logo.svg"
  import MenuIcon from "../assets/png/Group.png"
  import { useState } from 'react';
  import NavBar from './NavBar';
  
  function Header({isHome}) {

    const [showNav , setShowNav] = useState(false);

    return (
        <DivHeader>
          <FirstPartHeader>
            <StyledLogo>
              <img src={logo} alt="logo" />
            </StyledLogo>
            
              { isHome ?
                <DivModels>
                  <ModelosSelected size={isHome}>
                    <PModel>Modelos</PModel>
                  </ModelosSelected>
                  <Modelos>
                    <PModel>Ficha de modelos</PModel>
                  </Modelos>
                </DivModels>
                :
                <DivModels>
                  <Modelos >
                    <PModel>Modelos</PModel>
                  </Modelos>
                  <ModelosSelected size={isHome}>
                    <PModel>Ficha de modelos</PModel>
                  </ModelosSelected>
                </DivModels>
              
              }
            
          </FirstPartHeader>
          
            
            {
              showNav ?
              <DivNavBar>
                <NavBar 
                  toggle = {setShowNav}
                  show = {showNav}
                />
              </DivNavBar>
              :
              <Menu>
                <PModel>Menu</PModel>
                <img src={MenuIcon} alt="menu" onClick={() => {
                  console.log("va");
                  setShowNav(!showNav)}} />
              </Menu>
            }
        </DivHeader>
    );
  }
  
  export default Header;