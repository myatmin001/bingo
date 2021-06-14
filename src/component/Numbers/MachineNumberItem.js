import React from 'react'
import './MachineNumberItem.css';
import { getRandomNumber } from '../../common';

const MachineNumberItem = () => {
    let numberItems = [];
    for (var i = 1; i < 76; i++) {
        numberItems.push(i);
    } 
    return (
        <div className="number-container">  
            {numberItems.map((numberItems) => 
               {getRandomNumber === numberItems?  <div key={numberItems} className="picked-spin-number">{numberItems}</div> :  <div key={numberItems}>{numberItems}</div>}
               )}
        </div>
    )
}

export default MachineNumberItem
