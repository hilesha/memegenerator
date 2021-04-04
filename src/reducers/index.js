import {combineReducers} from "redux";
import {NEW_MEME, RECEIVE_MEMES} from "../actions";

function memes(state = [], action) {
    switch (action.type) {
        case RECEIVE_MEMES:
            return action.memes;
        default:
            return state;
    }
}

function mymemes(state = [], action) {
    switch (action.type) {
        case NEW_MEME:
            state = [...state, action.meme]
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({memes, mymemes})

export default rootReducer
