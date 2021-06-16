import React,{ useReducer } from 'react';
import BingoContext from './bingoContext';
import BingoReducer from './bingoReducer';
import { getRandomNumber } from "../../common"
import {
    DISPLAY_MACHINE_NUMBERS,
    GET_SPIN_NUMBER,
    GET_USER
} from '../type'

const BingoState = (props) => {

    const initialState = {
        numbers: 4,
        numberItems: [],
        randomSpinNumbers: []
    }

    const [state,dispatch] = useReducer(BingoReducer,initialState);

    //GET USER
    const getUser = (numbers) => {
        dispatch({type: GET_USER,payload: numbers});
    }

    //Display Machin Numbers
    const displayMachineNumbers = (min,max) => {
        let numberItems = [];
        for (var i = min; i <= max; i++) {
            if(i<=9){
                numberItems.push("0"+i.toString())
            }else{
                numberItems.push(i.toString());
            }
        } 
        dispatch({type: DISPLAY_MACHINE_NUMBERS,payload: numberItems})
    }

    //SPIN ACTION
    const getSpinNumber = () => {
        var myArray = state.numberItems;
        var toRemove = state.randomSpinNumbers;
        myArray  = myArray.filter( function( el ) {
            return toRemove.indexOf( el ) < 0;
          } );
        console.log(myArray );
        const randomSpinNumbers = state.randomSpinNumbers;
        const randomNumber = getRandomNumber(myArray)!==undefined && getRandomNumber(myArray).toString();
        randomSpinNumbers.push(randomNumber);
        console.log(randomSpinNumbers);
        dispatch({type: GET_SPIN_NUMBER,payload:randomSpinNumbers})
    }

    return (
        <BingoContext.Provider
            value = {
                {
                    numbers: state.numbers,
                    randomSpinNumbers: state.randomSpinNumbers,
                    numberItems: state.numberItems,
                    getUser,
                    displayMachineNumbers,
                    getSpinNumber
                }
            }
        >
            {props.children}
        </BingoContext.Provider>
    )
}

export default BingoState
