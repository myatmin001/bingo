import './Playground.css';
import React,{useContext,useEffect,Fragment} from 'react';
import BingoContext from '../../context/bingo/bingoContext'
import MachineNumbers from '../Numbers/MachineNumbers';
import { getFirstNumber, getLastNumber } from '../../common';
import BingoCards from '../BingoCards/BingoCards';

const Playground = ({ match }) => {

    const bingoContext = useContext(BingoContext);
    const {randomSpinNumbers,getUser,getSpinNumber} = bingoContext;

    useEffect(() => {
        getUser(match.params.numbers)
        // eslint-disable-next-line
    }, [])

    return (
        <div className="playground-container">
            <div className="item-container machine-container">
                <div className="machine-item-container">
                    <div className="result-item">
                        <div>
                            <p>{getFirstNumber(randomSpinNumbers[randomSpinNumbers.length - 1])}</p>
                        </div>
                        <div>
                            <p>{getLastNumber(randomSpinNumbers[randomSpinNumbers.length - 1])}</p>
                        </div>
                    </div>
                    <div className="result-item">
                        <button className="spin-btn" onClick={getSpinNumber}>SPIN</button>
                    </div>
                    <Fragment>
                        <MachineNumbers />
                    </Fragment>
                </div>
            </div>
            <div className="item-container item-card-container">
                <BingoCards />
            </div>
        </div>
    )
}

export default Playground
