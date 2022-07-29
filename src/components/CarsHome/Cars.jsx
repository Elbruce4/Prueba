import { useState , useEffect } from "react";
import GetAllCars from "../../api/GetAllCars";

const Cars = () => {

    const [data , setData] = useState([]);

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
        <div>
            {
                data != null ? data.name : "aloha"
            }
        </div>
    );
}

export default Cars;