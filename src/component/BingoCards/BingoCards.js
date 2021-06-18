import React,{ Fragment, useContext,useEffect } from 'react'
import BingoCardNumberItem from './BingoCardNumberItem'
import BingoContext from '../../context/bingo/bingoContext'

const BingoCards = () => {

    const bingoContext = useContext(BingoContext);
    const {numbers,bingoCardNumbers,displayBingoCardNumbers} = bingoContext;

    useEffect(() => {
        displayBingoCardNumbers(numbers);
        // eslint-disable-next-line
    }, [numbers])

    const bingoCardItem = [];
    for (let index = 0; index < numbers; index++) {
        bingoCardItem.push(<BingoCardNumberItem key={index} cardIndex={index} cardNumbers = {bingoCardNumbers[index]} />);
    }

    return(
        <Fragment>
            {bingoCardItem}
        </Fragment>
    )
}

export default BingoCards
