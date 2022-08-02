import { 
    Div,
    Title,
    Filters,
    IntroFilter,
    DivFilters,
    Filter,
    Order,
    DivTitle,
    MenuDown } from "../../styles/TitleAndFilter";
import { useDispatch } from "react-redux/es/exports";
import { filterCars } from "../../redux/actions";
import Sorts from "./Sorts";
import { useState } from "react";
import openIcon from "../../assets/svg/bottomDown.svg"
import hideIcon from "../../assets/svg/iconHide.svg"

const TitleAndFilter = () => {

    const dispatch = useDispatch();
    let [show , setShow] = useState(false);
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
                    </IntroFilter>
                    <Filter onClick={() => filter("alls")}>Todos</Filter>
                    <Filter onClick={() => filter("onlyCars")}>Autos</Filter>
                    <Filter onClick={() => filter("onlyPicks")}>Picks up y Comerciales</Filter>
                    <Filter onClick={() => filter("onlySuvs")}>SUVs y crossover</Filter>
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