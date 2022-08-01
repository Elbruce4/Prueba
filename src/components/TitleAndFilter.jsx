import { 
    Div,
    Title,
    Filters,
    IntroFilter,
    DivFilters,
    Filter,
    Order,
    DivTitle } from "../styles/TitleAndFilter";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { filterCars } from "../redux/actions";

const TitleAndFilter = () => {

    const dispatch = useDispatch();

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
                    <Filter>Picks up y Comerciales</Filter>
                    <Filter>SUVs y crossover</Filter>
                </Filters>
                <Order>
                    <IntroFilter>
                        Ordernar por
                    </IntroFilter>
                </Order>
            </DivFilters>
        </Div>
    );
}

export default TitleAndFilter