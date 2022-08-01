import { 
    Div,
    Title,
    Filters,
    IntroFilter,
    DivFilters,
    Filter,
    Order,
    DivTitle } from "../styles/TitleAndFilter";

const TitleAndFilter = () => {
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