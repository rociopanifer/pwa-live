import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewMap extends PageViewElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <select id="options" @change="${this.optionChanged}">
        <option value="">Eliga una opción</option>
        <option value="home">Home</option>
        <option value="about">About</option>
        <option value="contact">Contact</option>
        <option value="blog/bienvenida">Blog</option>
      </select>
    `;
  }

  optionChanged(e) {
      console.log('-----> option selected: ', this.shadowRoot.querySelector('#options').value);
      const page = e.target.value;
      console.log(page);
      this.dispatchEvent(new CustomEvent('navigate', {
          bubbles: true,
          composed: true,
          detail: page
      }));
      
      // Se inicializa el Select
      this.shadowRoot.querySelector('#options').value = '';
  }
}

customElements.define('view-map', ViewMap);