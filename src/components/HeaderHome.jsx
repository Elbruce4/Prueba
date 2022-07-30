import { 
    StyledLogo,
    DivHeader,
    Modelos,
    FirstPartHeader,
    Menu,
    ModelosSelected,
    DivModels } from '../styles/HeaderHome';
  import logo from "../assets/svg/Logo.svg"
  import MenuIcon from "../assets/png/Group.png"
  
  function Header({isHome}) {

    console.log(isHome);

    return (
        <DivHeader>
          <FirstPartHeader>
            <StyledLogo>
              <img src={logo} alt="logo" />
            </StyledLogo>
            
              { isHome ?
                <DivModels>
                  <ModelosSelected>
                    Modelos
                  </ModelosSelected>
                  <Modelos>
                    Ficha del Modelo
                  </Modelos>
                </DivModels>
                :
                <DivModels>
                  <Modelos>
                    Modelos
                  </Modelos>
                  <ModelosSelected>
                    Ficha del Modelo
                  </ModelosSelected>
                </DivModels>
              
              /* <Modelos>
                Modelos
              </Modelos>
              <Modelos>
                Ficha de modelo
              </Modelos> */}
            
          </FirstPartHeader>
          <Menu>
            Menu
            <img src={MenuIcon} alt="menu" />
          </Menu>
        </DivHeader>
    );
  }
  
  export default Header;