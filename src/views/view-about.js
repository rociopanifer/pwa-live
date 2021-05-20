import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

// REDUX
// conexión de esta vista con el store de redux a través de pwa-helpers 
// mixin (es una función que devuelve una clase que extiende de una superclase):
import { connect } from 'pwa-helpers/connect-mixin';
// se importa el store para poder lanzar las acciones
import { store } from '../redux/store';
// se importan las acciones para lanzarlas
import {
  incrementarContador,
  decrementarContador
} from '../redux/actions/app-action';

class ViewAbout extends connect(store)(PageViewElement) {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      counter: { type: Number }
    };
  }

  render() {
    return html`
      <div>
        <h4>ABOUT</h4>
        <p>Mi contador vale ${this.counter}</p>
        <button @click="${this.incrementar}">+ 1</button>
        <button @click="${this.decrementar}">- 1</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <img src="https://picsum.photos/300/200" alt="esto es una imagen">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </div>
    `;
  }

  // este método está dentro del mixin y se ejecuta cada vez que el objeto state cambie de estado
  stateChanged(state) {
    console.log('state: ', state);
    this.counter = state.counter;
  }

  incrementar() {
    console.log('incrementar');
    // se lanza la acción para que se incremente el contador
    const accion = incrementarContador();
    store.dispatch(accion);
  }

  decrementar() {
    console.log('decrementar');
    // se lanza la acción para que se decremente el contador
    store.dispatch(decrementarContador());
  }

}

customElements.define('view-about', ViewAbout);