const initState = {
    cars : [],
    copyCars : [],
    oneCar : {}
}

function rootReducer (state = initState , {type , payload}) {
    switch(type) {
        case "GET_ALL_CARS":
            return {
                ...state,
                cars : payload,
                copyCars: payload
            }
        case "FILTER":
            if(payload === "alls") {
                return {
                    ...state,
                    cars : state.copyCars
                }
            } else if(payload === "onlyCars") {
                let filter = state.copyCars.filter((obj) => obj.segment !== "SUVs" && obj.segment !== "Pickups y Comerciales");
                return {
                    ...state,
                    cars : filter
                }
            } else if(payload === "onlyPicks") {
                let filter = state.copyCars.filter((obj) => obj.segment === "Pickups y Comerciales");
                return {
                    ...state,
                    cars : filter
                }
            } else if(payload === "onlySuvs") {
                let filter = state.copyCars.filter((obj) => obj.segment === "SUVs");
                return {
                    ...state,
                    cars : filter
                }
            }
            break;
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;
