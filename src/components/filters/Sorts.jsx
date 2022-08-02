import { 
    DivSort,
    DivParticular } from "../../styles/Sorts";
import { orderCars } from "../../redux/actions";
import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import { GetAllCars } from "../../redux/actions";


const Sorts = () => {

    let dispatch = useDispatch();
    
    const [refresh , setRefresh] = useState(false);
    
    const activeFilter = (type) => {
        dispatch(orderCars(type));
        setRefresh(!refresh);
        console.log(refresh);
    }

    return (
        <DivSort>
            <DivParticular onClick={() => dispatch(GetAllCars())}>
                <p>Nada</p>
            </DivParticular>
            <DivParticular onClick={() => activeFilter("cheaper")}>
                <p>De <strong>menor</strong> a <strong>mayor</strong> precio</p>
            </DivParticular>
            <DivParticular onClick={() => activeFilter("expensive")}>
                <p>De <strong>mayor</strong> a <strong>menor</strong> precio</p>
            </DivParticular>
            <DivParticular>
                <p>Mas <strong>nuevos</strong> primero</p>
            </DivParticular>
            <div>
                <p>Mas <strong>viejos</strong> primero</p>   
            </div>
        </DivSort>
    )
}

export default Sorts;