import React from 'react'
import './MachineNumbers.css';
import MachineNumberItem from './MachineNumberItem';

const MachineNumbers = () => {
    let numberItems = [];
    for (var i = 1; i < 76; i++) {
        if(i<=9){
            numberItems.push("0"+i.toString())
        }else{
            numberItems.push(i.toString());
        }
    } 
    return (
        <div className="number-container">
            {numberItems.map(numberItems => (
                // <div key={numberItems}>{numberItems}</div>
                <MachineNumberItem key={numberItems} numbers={numberItems}/>
            ))}
        </div>
    )
}

export default MachineNumbers
