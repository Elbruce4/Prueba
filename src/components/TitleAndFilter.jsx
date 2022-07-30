import { 
    Div,
    Title,
    Filters,
    IntroFilter,
    DivFilters,
    Filter,
    Order } from "../styles/TitleAndFilter";

const TitleAndFilter = () => {
    return (
        <Div>   
            <Title>Descubrí todos los modelos</Title>
            <DivFilters>             
                <Filters>
                    <IntroFilter>
                        Filtrar por:
                    </IntroFilter>
                    <Filter>Todos</Filter>
                    <Filter>Autos</Filter>
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