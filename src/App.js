import { 
  DivHome,
  StyledLogo,
  DivHeader,
  Modelos,
  FirstPartHeader,
  Menu } from './styles/Home';
import './App.css';
import logo from "./assets/svg/Logo.svg"
import MenuIcon from "./assets/png/Group.png"

function Home() {
  return (
    <DivHome>
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
    </DivHome>
  );
}

export default Home;
