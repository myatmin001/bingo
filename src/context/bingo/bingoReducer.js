import{
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
        default:
            return state;
    }
}