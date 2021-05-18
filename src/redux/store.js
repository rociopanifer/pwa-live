// importamos la función createStore, de Redux
import { createStore } from 'redux';
// importamos nuestro reducer
import { app } from './reducers/app-reducer';

// creamos el store con la función createStore(), enviando el reducer como parámetro.
// exportamos el store para que otros lo puedan importar fuera de este módulo.
export const store = createStore(app);
