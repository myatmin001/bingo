import React,{ useReducer } from 'react';
import BingoContext from './bingoContext';
import BingoReducer from './bingoReducer';
import { getRandomNumber, removeArray, shuffle } from "../../common"
import {
    DISPLAY_BINGO_CARD_NUMBERS,
    DISPLAY_EACH_BINGO_CARD_NUMBERS,
    DISPLAY_MACHINE_NUMBERS,
    GET_SPIN_NUMBER,
    GET_USER
} from '../type'

const BingoState = (props) => {

    const initialState = {
        numbers: 4,
        numberItems: [],
        randomSpinNumbers: [],
        bingoCardNumbers: [],
        bingoEachCardNumbers:[]
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
        // myArray  = myArray.filter( function( el ) {
        //     return toRemove.indexOf( el ) < 0;
        //   } );
        var myArr = removeArray(myArray,toRemove)
        console.log(myArr);
        const randomSpinNumbers = state.randomSpinNumbers;
        const randomNumber = getRandomNumber(myArr)!==undefined && getRandomNumber(myArr).toString();
        randomSpinNumbers.push(randomNumber);
        console.log(randomSpinNumbers);
        dispatch({type: GET_SPIN_NUMBER,payload:randomSpinNumbers})
    }

    //Display number for each bingo card number
    const displayBingoCardNumbers = (num) => {

        let numberItems = [];
        for (var i = 1; i <= 75; i++) {
            if(i<=9){
                numberItems.push("0"+i.toString())
            }else{
                numberItems.push(i.toString());
            }
        } 

        
        let cardNumbers = [];
        for (let x = 0; x < num; x++) {
            let bingoRandomNumbers = [];
            for (let index = 0; index <25; index++) {
                if(index === 12){
                    bingoRandomNumbers.push("*");
                }else{
                    bingoRandomNumbers.push(getRandomNumber(removeArray(numberItems,bingoRandomNumbers))!==undefined && getRandomNumber(removeArray(numberItems,bingoRandomNumbers)).toString());
                }
            }
            cardNumbers.push(bingoRandomNumbers);
        }
        // 
        dispatch({type: DISPLAY_BINGO_CARD_NUMBERS,payload: cardNumbers})
    }

    //Each Bingo Card Number
    const displayBingoEachCardNumber=(displayCardNumbers)=>{
        let cardNumbers = displayCardNumbers;
        shuffle(cardNumbers);
        dispatch({type: DISPLAY_EACH_BINGO_CARD_NUMBERS,payload: cardNumbers});

    }

    return (
        <BingoContext.Provider
            value = {
                {
                    numbers: state.numbers,
                    randomSpinNumbers: state.randomSpinNumbers,
                    numberItems: state.numberItems,
                    bingoCardNumbers: state.bingoCardNumbers,
                    bingoEachCardNumbers: state.bingoEachCardNumbers,
                    getUser,
                    displayMachineNumbers,
                    getSpinNumber,
                    displayBingoCardNumbers,
                    displayBingoEachCardNumber
                }
            }
        >
            {props.children}
        </BingoContext.Provider>
    )
}

export default BingoState
