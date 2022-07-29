const axios = require('axios');

async function GetAllCars () {
    try {
        var data = await axios.get("https://challenge.agenciaego.tech/api/models/")
                        .then(obj => obj.data);
        return data;               
    } catch (error) {
        return error;
    }
}

export default GetAllCars;