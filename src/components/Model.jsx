import Header from "./HeaderHome";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import GetOneCar from "../api/GetOneCar";

const Model = () => {

    var isHome = false;
    const [data , setData] = useState([]);
    let { modelId } = useParams();

    useEffect(() => {
        async function getData () {
            setData(await GetOneCar(modelId));
        } 
        getData();
    },[modelId]);

    useEffect(() => {
        console.log(data);
    },[data])

    return (
        <div>
            <Header isHome={isHome}></Header>
            <div>

            </div>
        </div>
    )
}

export default Model;