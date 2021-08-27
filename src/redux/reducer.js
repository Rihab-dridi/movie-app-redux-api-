import { DISPLAY } from "./action-types";

const intialState={
    moviesList:[]
}


export const MoviesReducer =( state=intialState, action )=>{

switch (action.type) {
   
case DISPLAY: return {
    ...state,
    moviesList:action.payload
}
    default: return state
        

}}