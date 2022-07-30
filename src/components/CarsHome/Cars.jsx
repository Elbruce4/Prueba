import { useState , useEffect } from "react";
import GetAllCars from "../../api/GetAllCars";
import DetailCars from "./DetailCars";
import { Div } from "../../styles/Cars";

const Cars = () => {

    const [data , setData] = useState([]);
    let show = false;

    useEffect(() => {
        async function data() {
            setData(await GetAllCars());
        }
        data();
    }, []);

    useEffect(() => {
        console.log(data)
    },[data])

    return (
        <Div>
            {
                data !== [] ? 
                data.map(obj => {
                        return <DetailCars
                           key={obj.id}
                           name={obj.name}
                           price={obj.price}
                           year={obj.year}
                           photo={obj.thumbnail}
                           show = {show}
                       />
                })
                : 
                "aloha"
            }
        </Div>
    );
}

export default Cars;