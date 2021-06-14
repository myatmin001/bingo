import React,{ useReducer } from 'react';
import BingoContext from './bingoContext';
import BingoReducer from './bingoReducer';
import {
    GET_USER
} from '../type'

const BingoState = (props) => {

    const initialState = {
        numbers: 4
    }

    const [state,dispatch] = useReducer(BingoReducer,initialState);

    //GET USER
    const getUser = (numbers) => {
        dispatch({type: GET_USER,payload: numbers});
    }

    return (
        <BingoContext.Provider
            value = {
                {
                    numbers: state.numbers,
                    getUser
                }
            }
        >
            {props.children}
        </BingoContext.Provider>
    )
}

export default BingoState
