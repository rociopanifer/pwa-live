import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewHome extends PageViewElement {

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
        <h4>HOME</h4>
        <input type="text">
      </div>
    `;
  }
}

customElements.define('view-home', ViewHome);