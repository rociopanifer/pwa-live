import { LitElement } from 'lit-element';

export class PageViewElement  extends LitElement {

  static get properties() {
    return {
      active: { type: Boolean }
    };
  }

  // Only render this page it it's actually visible.
  // Método del ciclo de vida: te dice si el componente se tiene que actualizar o no.
  shouldUpdate() {
    // Se va a actualizar si la propiedad 'active' es igual a true.
    return this.active;
  }

}

customElements.define('page-view-element', PageViewElement);