import React,{ useReducer } from 'react';
import BingoContext from './bingoContext';
import BingoReducer from './bingoReducer';
import { dupArr, getIndexOfEachCardNumber, getRandomNumber, isItemInArray, removeArray, shuffle } from "../../common"
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
        bingoEachCardNumbers:[],
        winnningCombinations: [
            [0,1,2,3,4],
            [4,8,16,20],
            [0,5,10,15,20],
            [4,9,14,19,24],
            [20,21,22,23,24],
            [0,6,18,24],
            [5,6,7,8,9],
            [10,11,13,14],
            [15,16,17,18,19],
            [1,6,11,16,21],
            [2,7,17,22],
            [3,8,13,18,23]
        ],
        indexNumbersOfEachCrads:[]

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
        var myArr = removeArray(myArray,toRemove)
        // console.log(myArr);
        const randomSpinNumbers = state.randomSpinNumbers;
        const randomNumber = getRandomNumber(myArr)!==undefined && getRandomNumber(myArr).toString();
        randomSpinNumbers.push(randomNumber);
        // if(randomSpinNumbers.length>=4){
        //     console.log("Push Index and Decide Number");
        // }
        var indexCardNumbers = state.indexNumbersOfEachCrads;
        if(indexCardNumbers.length === 0){
            for (let j = 0; j < state.numbers; j++) {
                indexCardNumbers.push([]);
            }
        }
        for (let index = 0; index < state.numbers; index++) {
            var getIndex = [];
            var getIndexAndValue = getIndexOfEachCardNumber(state.bingoCardNumbers,randomNumber);
            if(getIndexAndValue.length>0){
                for (let i = 0; i < getIndexAndValue.length; i++) {
                    if(getIndexAndValue[i][0] === index){
                        if(indexCardNumbers[index]===undefined){
                            getIndex.push(getIndexAndValue[i][1]);
                            indexCardNumbers[index] = getIndex;
                            break;
                        }else{
                            indexCardNumbers[index].push(getIndexAndValue[i][1]);
                            break;
                        }

                    }
                }
            }
        }
        console.log(indexCardNumbers);

        dispatch({type: GET_SPIN_NUMBER,payload:[randomSpinNumbers,indexCardNumbers]})

        if(state.randomSpinNumbers.length >= 4){
            for (let index = 0; index < state.indexNumbersOfEachCrads.length; index++) {
                // if(isItemInArray(state.winnningCombinations,state.indexNumbersOfEachCrads[index])){
                //     alert(`Winner is Bingo Card ${index+1}`);
                //     break;
                // }

                for (let i = 0; i < state.winnningCombinations.length; i++) {
                    var dup = dupArr(state.indexNumbersOfEachCrads[index],state.winnningCombinations[i]);
                    dup.sort(function(a, b) {
                        return a - b;
                      });
                    if(isItemInArray(state.winnningCombinations[i],dup)){
                            alert(`Winner is Bingo Card ${index+1}`);
                            break;
                    }
                }

            }
        }
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
