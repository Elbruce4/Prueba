import { 
    StyledLogo,
    DivHeader,
    Modelos,
    FirstPartHeader,
    Menu,
    ModelosSelected,
    DivModels,
    PModel } from '../styles/HeaderHome';
  import logo from "../assets/svg/Logo.svg"
  import MenuIcon from "../assets/png/Group.png"
  
  function Header({isHome}) {

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
          <Menu>
            <PModel>Menu</PModel>
            <img src={MenuIcon} alt="menu" />
          </Menu>
        </DivHeader>
    );
  }
  
  export default Header;