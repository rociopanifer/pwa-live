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
      <div>
        <p>Si lo deseas puedes <a href="/contact">contactar</a> con nosotros</p>
        <p>Si lo deseas puedes ir a la <a href="/blog/bienvenida">bienvenida</a> del blog</p>
      </div>
    `;
  }
}

customElements.define('view-home', ViewHome);