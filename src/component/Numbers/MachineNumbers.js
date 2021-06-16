import React,{ useContext, useEffect } from 'react'
import './MachineNumbers.css';
import MachineNumberItem from './MachineNumberItem';
import BingoContext from '../../context/bingo/bingoContext';

const MachineNumbers = () => { 
    const bingoContext = useContext(BingoContext);
    const {numberItems,displayMachineNumbers} = bingoContext;

    useEffect(() => {
        displayMachineNumbers(1,75);
        // eslint-disable-next-line
    }, [])
    return (
        <div className="number-container">
            {numberItems.map(numberItems => (
                <MachineNumberItem key={numberItems} numbers={numberItems}/>
            ))}
        </div>
    )
}

export default MachineNumbers
