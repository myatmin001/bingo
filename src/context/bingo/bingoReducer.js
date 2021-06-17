
import{
    DISPLAY_BINGO_CARD_NUMBERS,
    DISPLAY_EACH_BINGO_CARD_NUMBERS,
    DISPLAY_MACHINE_NUMBERS,
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
        case DISPLAY_MACHINE_NUMBERS:
            return{
                ...state,
                numberItems: action.payload
            }
        case GET_SPIN_NUMBER:
            return{
                ...state,
                randomSpinNumbers: action.payload
            }
        case DISPLAY_BINGO_CARD_NUMBERS:
            return{
                ...state,
                bingoCardNumbers: action.payload
            }
        case DISPLAY_EACH_BINGO_CARD_NUMBERS:
            return{
                ...state,
                bingoEachCardNumbers: action.payload
            }
        default:
            return state;
    }
}