
import{
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
        default:
            return state;
    }
}