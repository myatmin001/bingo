import React, { useContext } from 'react';
import BingoContext from '../../context/bingo/bingoContext';
import './MachineNumberItem.css'

const MachineNumberItem = ({numbers}) => {

    const bingoContext = useContext(BingoContext);
    const {randomSpinNumbers} = bingoContext;
    return (
        <div className={`${randomSpinNumbers.includes(numbers) && "picked-spin-number"}`}>{numbers}</div>
    )
}

export default MachineNumberItem
