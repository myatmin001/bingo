import './Playground.css';
import React,{useContext,useEffect,Fragment} from 'react';
import BingoContext from '../../context/bingo/bingoContext'
import MachineNumberItem from '../Numbers/MachineNumberItem';

const Playground = ({ match }) => {

    const bingoContext = useContext(BingoContext);
    const {numbers,getUser} = bingoContext;

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
                            <p>0</p>
                        </div>
                        <div>
                            <p>0</p>
                        </div>
                    </div>
                    <div className="result-item">
                        <button className="spin-btn">SPIN</button>
                    </div>
                    <Fragment>
                        <MachineNumberItem />
                    </Fragment>
                </div>
            </div>
            <div className="item-container card-container">
                <div>
                    <div>
                        <div>
                            Bingo Card
                        </div>
                        <div>
                            Bingo Card
                        </div>
                    </div>
                    <div>
                        <div>
                            Bingo Card
                        </div>
                        <div>
                            Bingo Card
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playground