const axios = require('axios');

export const GetAllCars = () => {
    return async function (dispatch) {
        console.log("llama a la funcion");
        try {
            var data = await axios.get("https://challenge.agenciaego.tech/api/models/").then(obj => obj.data);
            console.log(`datita: ${data}`);
            return dispatch({
                payload: data,
                type: "GET_ALL_CARS"
            })
        } catch (error) {
            return error;
        }
    }
}

export const filterCars = (type) => {
    console.log("tamos")
    return function (dispatch) {
        dispatch({
            type : "FILTER",
            payload : type
        })
    } 
}