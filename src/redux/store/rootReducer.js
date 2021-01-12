import { combineReducers } from "redux";
import { estadoReducer } from "../ducks/EstadosDuck";
import { hospitalesReducer } from "../ducks/HospitalesDuck";
import { PlanetasDuck } from "../ducks/PlanetasDuck";


export const rootReducer = combineReducers({
    datos : estadoReducer ,
    hospitales : hospitalesReducer ,
    planetas : PlanetasDuck
})