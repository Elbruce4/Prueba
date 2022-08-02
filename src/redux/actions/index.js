const axios = require('axios');

export const GetAllCars = () => {
    return async function (dispatch) {
        try {
            var data = await axios.get("https://challenge.agenciaego.tech/api/models/").then(obj => obj.data);
            return dispatch({
                payload: data,
                type: "GET_ALL_CARS"
            })
        } catch (error) {
            return error;
        }
    }
}

export const GetOneCar = (id) => {
    return async function(dispatch) {
        try {
            var info = await axios.get(`https://challenge.agenciaego.tech/api/models/${id}/`).then(obj => obj.data);
            return dispatch({
                payload: info,
                type: "GET_ONE_CAR"
            });
        } catch (error) {
            return error;
        }
    }
}

export const CleanCars = () => {
    return function (dispatch) {
        dispatch({
            payload: {},
            type : "CLEAN_CARS"
        })
    }
}

export const filterCars = (type) => {
    return function (dispatch) {
        dispatch({
            type : "FILTER",
            payload : type
        })
    } 
}

export const orderCars = (type) => {
    return function (dispatch) {
        dispatch({
            type : "ORDER",
            payload : type
        })
    } 
}