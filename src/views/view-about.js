import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewAbout extends PageViewElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h4>ABOUT 2</h4>
        <p>ñaldkfjñalkfj añlkdfjñalfkj añsldkjfñalksdfjñalskdjf lakdjflakhf</p>
        <img src="https://picsum.photos/300/200" alt="esto es una imagen">
        <p>ñaldkfjñalkfj añlkdfjñalfkj añsldkjfñalksdfjñalskdjf lakdjflakhf</p>
        <p>ñaldkfjñalkfj añlkdfjñalfkj añsldkjfñalksdfjñalskdjf lakdjflakhf</p>
        <p>ñaldkfjñalkfj añlkdfjñalfkj añsldkjfñalksdfjñalskdjf lakdjflakhf</p>
    </div>
    `;
  }
}

customElements.define('view-about', ViewAbout);