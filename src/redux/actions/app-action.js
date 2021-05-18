import {
    INCREMENTAR_CONTADOR,
    DECREMENTAR_CONTADOR
} from '../constants';


// action creator: (creacion de acciones) devuelven el objeto que yo necesito pasarle al reducer para poder realizar esta acción.
export const incrementarContador = () => {
    return {
        type: INCREMENTAR_CONTADOR
    }
}

export const decrementarContador = () => {
    return {
        type: DECREMENTAR_CONTADOR
    }
}