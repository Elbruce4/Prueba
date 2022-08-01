import { useEffect } from "react";
import DetailCars from "./DetailCars";
import { 
    Div,
    DivBox } from "../../styles/Cars";
import loading from "../../assets/gif/loading.gif";
import { useSelector , useDispatch } from "react-redux";
import { GetAllCars } from "../../redux/actions";

const Cars = () => {

    let show = false;
    const dispatch = useDispatch();
    let data = useSelector((obj) => obj.cars);

    useEffect(() => {
        console.log("entra al effect");
        dispatch(GetAllCars());
    }, [dispatch]);

    return (
        <div>

            
            <DivBox>
                <Div>
                    {
                        data !== undefined ? 
                        data.map(obj => {
                                return <DetailCars
                                key={obj.id}
                                id={obj.id}
                                name={obj.name}
                                price={obj.price}
                                year={obj.year}
                                photo={obj.thumbnail}
                                show = {show}
                            />
                        })
                        : 
                        <div>
                            <img src={loading} alt="loading..." />
                        </div>
                    }
                </Div>
            </DivBox>
        </div>
    );
}

export default Cars;