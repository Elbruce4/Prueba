import axios from "axios";

async function GetOneCar (id) {
    try {
        var info = await axios.get(`https://challenge.agenciaego.tech/api/models/${id}/`).then(obj => obj.data);
        return info;
    } catch (error) {
        return error;
    }
}

export default GetOneCar