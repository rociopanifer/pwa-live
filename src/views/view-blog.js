import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewBlog extends PageViewElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      segments: { type: Array }
    };
  }

  constructor() {
      super();
      this.segments = [];
  }

  render() {
    return html`
      <div>
        <h4>BLOG</h4>
        <!-- cada vez que cambie el valor de la propiedad segments se ejecutará el método showSegments(): -->
        <p>Esto es el blog: ${this.showSegments()}</p>
      </div>
      <div>
        <p>Ver en la entrada en el blog de <a href="blog/otras cosas">Otras cosas</a>.</p>
        <p>Ver en la entrada en el blog otras cosas <a href="blog/tercera entrada">Tercera entrada</a></p>
        <p></p>
      </div>
    `;
  }

  // la primera vez que se actualiza el componente
  firstUpdated() {
    console.log('ViewBlog.firstUpdated(): ', this.segments);
  }

  showSegments() {
      return this.segments[1];
  }
}

customElements.define('view-blog', ViewBlog);