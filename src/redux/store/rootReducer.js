import { combineReducers } from "redux";
import { estadoReducer } from "../ducks/EstadosDuck";
import { hospitalesReducer } from "../ducks/HospitalesDuck";


export const rootReducer = combineReducers({
    datos : estadoReducer ,
    hospitales : hospitalesReducer 
})