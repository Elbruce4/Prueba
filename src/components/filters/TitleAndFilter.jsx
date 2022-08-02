import { 
    Div,
    Title,
    Filters,
    IntroFilter,
    DivFilters,
    Filter,
    Order,
    DivTitle,
    MenuDown,
    NavFilters,
    ParticularNavFilter,
    Logo } from "../../styles/TitleAndFilter";
import { useDispatch } from "react-redux/es/exports";
import { filterCars } from "../../redux/actions";
import Sorts from "./Sorts";
import { useState } from "react";
import openIcon from "../../assets/svg/bottomDown.svg"
import hideIcon from "../../assets/svg/iconHide.svg"


const TitleAndFilter = () => {

    const dispatch = useDispatch();
    let [show , setShow] = useState(false);
    let [showFilters , setShowFilters] = useState(false);
    const filter = (type) => {
        console.log("va");
        dispatch(filterCars(type));
    }
    
    return (
        <Div>
            <DivTitle>
                <Title>Descubrí todos los modelos</Title>
            </DivTitle>   
            <DivFilters>             
                <Filters>
                    <IntroFilter>
                        Filtrar por:
                        <Logo>
                        {showFilters ?
                                <img src={hideIcon} alt="icon" onClick={() => setShowFilters(!showFilters)} />
                                :
                                <img src={openIcon} alt="icon" onClick={() => setShowFilters(!showFilters)} />}
                        </Logo>
                    </IntroFilter>
                    <Filter onClick={() => filter("alls")}>Todos</Filter>
                    <Filter onClick={() => filter("onlyCars")}>Autos</Filter>
                    <Filter onClick={() => filter("onlyPicks")}>Picks up y Comerciales</Filter>
                    <Filter onClick={() => filter("onlySuvs")}>SUVs y crossover</Filter>
                    
                    {
                        showFilters ? 
                            <NavFilters>
                                <ParticularNavFilter onClick={() => filter("alls")}>Todos</ParticularNavFilter>
                                <ParticularNavFilter onClick={() => filter("onlyCars")}>Autos</ParticularNavFilter>
                                <ParticularNavFilter onClick={() => filter("onlyPicks")}>Picks up y Comerciales</ParticularNavFilter>
                                <ParticularNavFilter onClick={() => filter("onlySuvs")} >SUVs y crossover</ParticularNavFilter>
                            </NavFilters>
                        :
                        undefined

                    }
                        

                </Filters>
                <Order>
                    <IntroFilter >
                        <MenuDown>
                            <p>Ordernar por</p>
                            {
                                show ?
                                <img src={hideIcon} alt="icon" onClick={() => setShow(!show)} />
                                :
                                <img src={openIcon} alt="icon" onClick={() => setShow(!show)} />
                            }
                            
                        </MenuDown>
                        {
                            show ? 
                            <Sorts></Sorts>
                            :
                            undefined
                        }
                    </IntroFilter>
                </Order>
            </DivFilters>
        </Div>
    );
}

export default TitleAndFilter