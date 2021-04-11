import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewContact extends PageViewElement {

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
        <h4>CONTACT</h4>
        <br><br>
        <p>ñalkdjfañl añldfjkñaflkj añdjfñalfkj añldjkfñalfj</p>
        <p>ñalkdjfañl añldfjkñaflkj añdjfñalfkj añldjkfñalfj</p>
      </div>
    `;
  }
}

customElements.define('view-contact', ViewContact);