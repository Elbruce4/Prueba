import { 
    StyledLogo,
    DivHeader,
    Modelos,
    FirstPartHeader,
    Menu } from '../styles/HeaderHome';
  import logo from "../assets/svg/Logo.svg"
  import MenuIcon from "../assets/png/Group.png"
  
  function Header() {
    return (
        <DivHeader>
          <FirstPartHeader>
            <StyledLogo>
              <img src={logo} alt="logo" />
            </StyledLogo>
            <Modelos>
              Modelos
            </Modelos>
            <Modelos>
              Ficha de modelo
            </Modelos>
          </FirstPartHeader>
          <Menu>
            Menu
            <img src={MenuIcon} alt="menu" />
          </Menu>
        </DivHeader>
    );
  }
  
  export default Header;