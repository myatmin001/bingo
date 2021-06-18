import React, { useContext } from 'react'
import BingoContext from '../../context/bingo/bingoContext'

const BingoCardNumberItem = ({cardIndex,cardNumbers}) => {

    const bingoContext = useContext(BingoContext);
    const {randomSpinNumbers} = bingoContext;

    return (
        <div className="card-container">
            <div className="card-item card-header">
                <h3>BINGO CARD {cardIndex + 1}</h3>
            </div>
            <div className="card-item card-numbers">
                {
                    cardNumbers !== undefined && cardNumbers.map(cardNumbers => (
                        <div key={cardNumbers} className={`${randomSpinNumbers.includes(cardNumbers) && "picked-spin-number"} ${cardNumbers==="*" && "picked-spin-number"}`}>{cardNumbers}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default BingoCardNumberItem
