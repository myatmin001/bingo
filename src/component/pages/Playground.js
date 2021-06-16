import './Playground.css';
import React,{useContext,useEffect,Fragment} from 'react';
import BingoContext from '../../context/bingo/bingoContext'
import MachineNumbers from '../Numbers/MachineNumbers';
import { getFirstNumber, getLastNumber } from '../../common';

const Playground = ({ match }) => {

    const bingoContext = useContext(BingoContext);
    const {numbers,randomSpinNumbers,getUser,getSpinNumber} = bingoContext;

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
            <div className="item-container">
                
                <div className="card-container">
                    <div className="card-item card-header">
                        <h3>BINGO CARD</h3>
                    </div>
                    <div className="card-item card-numbers">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>  
                        <div>12</div>
                        <div>13</div>
                        <div>14</div>  
                        <div>15</div>
                        <div>16</div>
                        <div>17</div>
                        <div>18</div>
                        <div>19</div>  
                        <div>20</div>
                        <div>21</div>
                        <div>22</div>  
                        <div>23</div>
                        <div>24</div>
                        <div>25</div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-item card-header">
                        <h3>BINGO CARD</h3>
                    </div>
                    <div className="card-item card-numbers">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>  
                        <div>12</div>
                        <div>13</div>
                        <div>14</div>  
                        <div>15</div>
                        <div>16</div>
                        <div>17</div>
                        <div>18</div>
                        <div>19</div>  
                        <div>20</div>
                        <div>21</div>
                        <div>22</div>  
                        <div>23</div>
                        <div>24</div>
                        <div>25</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playground
