import { 
    Image,
    EachCarDetail,
    DivPriceAndYear,
    PPriceAndYear,
    Name } from "../../styles/Cars";
import { useState } from "react";

const DetailCars = ({name , price , year , photo , show}) => {

    const [buttonOn , setButtonOn] = useState(show);


    console.log("show:" , show);
    return (
        <EachCarDetail 
            onMouseLeave={() => {setButtonOn(!buttonOn)}}
            onMouseEnter={() => {setButtonOn(!buttonOn)}}
        >
            <Name>{name}</Name>
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
                <button>Ver modelo</button>
                :
                undefined
            }
        </EachCarDetail>
    );
}

export default DetailCars;