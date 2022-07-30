import { 
    DivNav,
    HeaderNav,
    PClose,
    CloseIcon,
    DivOptions } from "../styles/NavBar";
import close from "../assets/svg/xIcon.svg"

const NavBar = ({toggle , show}) => {
    return (
        <DivNav>
            <HeaderNav>
                <PClose>Cerrar</PClose>
                <CloseIcon>
                    <img src={close} alt="close" onClick={() => toggle(!show)}/>
                </CloseIcon>
                
            </HeaderNav>
            <DivOptions>
                <p>Modelos</p>
                <p>Servicios y Accesorios</p>
                <p>Financiación</p>
                <p>Reviews y comunidad</p>
            </DivOptions>
            <DivOptions>
                <p>Toyota Mobility Service</p>
                <p>Toyota Gazoo Racing</p>
                <p>Toyota Hibridos</p>
            </DivOptions>
            <DivOptions>
                <p>Concesionarios</p>
                <p>Test Drive</p>
                <p>Contacto</p>
            </DivOptions>
            <DivOptions>
                <p>Activades</p>
                <p>Servicios al Cliente</p>
                <p>Ventas Especiales</p>
                <p>Innovación</p>
                <p>Prensa</p>
                <p>Acerca de...</p>
            </DivOptions>
        </DivNav>
    )
}

export default NavBar;