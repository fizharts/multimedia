import { combineReducers } from "redux";
import { estadoReducer } from "../ducks/EstadosDuck";


export const rootReducer = combineReducers({
    datos : estadoReducer
})