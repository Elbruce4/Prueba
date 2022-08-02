const initState = {
    cars : [],
    copyCars : [],
    oneCar : {},
    change : false
}

function rootReducer (state = initState , {type , payload}) {
    switch(type) {
        case "GET_ALL_CARS":
            return {
                ...state,
                cars : payload,
                copyCars: payload
            }
        case "GET_ONE_CAR":
            return {
                ...state,
                oneCar : payload
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
        case "ORDER": 
            if(payload === "nothing") {
                return {
                    ...state,
                    cars : state.copyCars,
                    change : !state.change
                }
            }
            if(payload === "newest") {
                let sort = state.cars.sort((a,b) => {
                    if(a.year > b.year) return 1;
                    if(b.year > a.year) return -1;
                    return 0;
                })
                return {
                    ...state,
                    cars : sort,
                    change : !state.change
                }
            } else if( payload === "expensive") {
                let sort = state.cars.sort((a,b) => {
                    if(a.price < b.price) return 1;
                    if(b.price < a.price) return -1;
                    return 0;
                });
                return {
                    ...state,
                    cars : sort,
                    change : !state.change
                }
            } else if( payload === "cheaper") {
                let sort = state.cars.sort((a,b) => {
                    if(a.price > b.price) return 1;
                    if(b.price > a.price) return -1;
                    return 0;
                });
                return {
                    ...state,
                    cars : sort,
                    change : !state.change
                }
            }
            break;
        case "CLEAN_CARS":
            return {
                oneCar : payload
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;
