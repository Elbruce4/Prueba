import { 
    Image,
    EachCarDetail,
    DivPriceAndYear,
    PPriceAndYear,
    Name,
    Button } from "../../styles/Cars";
import { useState } from "react";
import {Link} from "react-router-dom"

const DetailCars = ({name , price , year , photo , show , id}) => {

    const [buttonOn , setButtonOn] = useState(show);

    return (
        <EachCarDetail 
            onMouseLeave={() => {
                console.log("entra");
                setButtonOn(false)}}
            onMouseEnter={() => {setButtonOn(true)}}>
            <Name selectColor={buttonOn}>{name.length > 8 ? name.slice(0,5) : name}</Name>
            <DivPriceAndYear>
                <PPriceAndYear>{year}</PPriceAndYear>
                <PPriceAndYear>|</PPriceAndYear>
                <PPriceAndYear>${price}</PPriceAndYear>
            </DivPriceAndYear>
            <Image>
                <img src={photo} alt="car" />
            </Image>
            {
                buttonOn ?
                <Button>
                <Link to={`/${id}`} >
                    Ver Modelo
                </Link>
                </Button>
                :
                undefined
            }
        </EachCarDetail>
    );
}

export default DetailCars;