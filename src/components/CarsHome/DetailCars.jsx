import { 
    Image,
    EachCarDetail,
    DivPriceAndYear,
    PPriceAndYear,
    Name } from "../../styles/Cars";

const DetailCars = ({name , price , year , photo}) => {
    return (
        <EachCarDetail>
            <Name>{name}</Name>
            <DivPriceAndYear>
                <PPriceAndYear>{year}</PPriceAndYear>
                <PPriceAndYear>|</PPriceAndYear>
                <PPriceAndYear>${price}</PPriceAndYear>
            </DivPriceAndYear>
            <Image>
                <img src={photo} alt="car" />
            </Image>
        </EachCarDetail>
    );
}

export default DetailCars;