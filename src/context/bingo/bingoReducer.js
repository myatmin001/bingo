import { getRandomNumber } from "../../common"
import{
    GET_SPIN_NUMBER,
    GET_USER
} from "../type"

// eslint-disable-next-line
export default (state,action) => {
    switch(action.type){
        case GET_USER:
            return{
                ...state,
                numbers: action.payload
            }
        case GET_SPIN_NUMBER:
            let randomSpinNumbers = [];
            let randomNumber = getRandomNumber();
            randomSpinNumbers.push(randomNumber.toString());
            return{
                ...state,
                randomSpinNumbers: randomSpinNumbers
            }
        default:
            return state;
    }
}