import { useState , useEffect } from "react";
import GetAllCars from "../../api/GetAllCars";
import DetailCars from "./DetailCars";
import { 
    Div,
    DivBox } from "../../styles/Cars";
import loading from "../../assets/gif/loading.gif";

const Cars = () => {

    const [data , setData] = useState([]);
    let show = false;

    useEffect(() => {
        async function data() {
            setData(await GetAllCars());
        }
        data();
    }, []);

    return (
        <DivBox>
            <Div>
                {
                    data !== [] ? 
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
    );
}

export default Cars;