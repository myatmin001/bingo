import React,{ Fragment, useContext,useEffect, useState } from 'react'
import BingoCardNumberItem from './BingoCardNumberItem'
import BingoContext from '../../context/bingo/bingoContext'
import { getRandomNumber, removeArray } from '../../common'

const BingoCards = () => {

    const bingoContext = useContext(BingoContext);
    const {numbers,bingoCardNumbers,displayBingoCardNumbers} = bingoContext;

    useEffect(() => {
        displayBingoCardNumbers(numbers);
    }, [numbers])

    console.log(bingoCardNumbers);

    const bingoCardItem = [];
    for (let index = 0; index < numbers; index++) {
        console.log(bingoCardNumbers[index]);
        bingoCardItem.push(<BingoCardNumberItem key={index} cardIndex={index} cardNumbers = {bingoCardNumbers[index]} />);
    }

    return(
        <Fragment>
            {bingoCardItem}
        </Fragment>
    )
}

export default BingoCards
