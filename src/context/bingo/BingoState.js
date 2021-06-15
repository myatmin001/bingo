import React,{ useReducer } from 'react';
import BingoContext from './bingoContext';
import BingoReducer from './bingoReducer';
import {
    GET_SPIN_NUMBER,
    GET_USER
} from '../type'

const BingoState = (props) => {

    const initialState = {
        numbers: 4,
        randomSpinNumbers: []
    }

    const [state,dispatch] = useReducer(BingoReducer,initialState);

    //GET USER
    const getUser = (numbers) => {
        dispatch({type: GET_USER,payload: numbers});
    }

    //SPIN ACTION
    const getSpinNumber = () => {
        dispatch({type: GET_SPIN_NUMBER})
    }

    return (
        <BingoContext.Provider
            value = {
                {
                    numbers: state.numbers,
                    randomSpinNumbers: state.randomSpinNumbers,
                    getUser,
                    getSpinNumber
                }
            }
        >
            {props.children}
        </BingoContext.Provider>
    )
}

export default BingoState
