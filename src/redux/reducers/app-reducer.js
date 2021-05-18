import {
    INCREMENTAR_CONTADOR,
    DECREMENTAR_CONTADOR
} from '../constants';

const initialState = {
    counter: 0
}

export const app = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENTAR_CONTADOR:
            return {
                ...state, // spread operator
                counter: state.counter + 1
            }
        case DECREMENTAR_CONTADOR:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}