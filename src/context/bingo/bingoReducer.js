
import{
    DISPLAY_BINGO_CARD_NUMBERS,
    DISPLAY_MACHINE_NUMBERS,
    GET_SPIN_NUMBER,
    GET_USER,
    RESTART_STATE,
    WINNING_STATE
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
                randomSpinNumbers: action.payload[0],
                indexNumbersOfEachCrads:action.payload[1]
            }
        case DISPLAY_BINGO_CARD_NUMBERS:
            return{
                ...state,
                bingoCardNumbers: action.payload
            }
        case WINNING_STATE:
            return{
                ...state,
                winningContent: action.payload[0],
                winningState: action.payload[1]
            }
        case RESTART_STATE:
            return{
                ...state,
                randomSpinNumbers: [],
                indexNumbersOfEachCrads:[],
                winningContent: '',
                winningState: false
            }
        default:
            return state;
    }
}