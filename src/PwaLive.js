import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router';
import { styles } from './pwa-live-styles';

import './views/view-about';
import './views/view-home';
import './views/view-contact';
import './views/view-map';
import './views/view-blog';

import 'dile-tabs/dile-tabs';
import 'dile-pages/dile-pages';

export class PwaLive extends LitElement {
  static get properties() {
    return {
      page: { type: String },
      segments: { type: Array},
    };
  }

  static get styles() {
    return [
      styles,
      css`
        h1 {
          font-weight: 300;
        }
    `];
  }

  constructor() {
    super();
    this.page = 'home';
    this.segments = [];

    //this.addEventListener('navigate', (e) => this.navigate(e));
  }

  firstUpdated() {
    installRouter((location) => this.handleNavigation(location.pathname));
  }

  render() {
    return html`
      <h1>Mi aplicación progresiva</h1>
      
      <!-- nav>
        <a href="home">Home</a>
        <a href="about">About</a>
        <a href="contact">Contact</a>
        <a href="mapa">Mapa</a>
      </nav -->
      <dile-tabs selected="${this.page}" attrForSelected="name" @dile-tabs-selected-changed="${this.navigate}">
        <dile-tab name="home">Home</dile-tab>
        <dile-tab name="about">About</dile-tab>
        <dile-tab name="contact">Contact</dile-tab>
        <dile-tab name="mapa">Mapa</dile-tab>
        <dile-tab name="blog">Blog</dile-tab>
      </dile-tabs>

      <dile-pages selected="${this.page}" attrForSelected="name">
        <view-home name="home" ?active="${this.page === 'home'}"></view-home>
        <view-about name="about" ?active="${this.page === 'about'}"></view-about>
        <view-contact name="contact" ?active="${this.page === 'contact'}"></view-contact>
        <view-map @navigate="${this.navigate}" name="mapa" ?active="${this.page === 'mapa'}"></view-map>
        <view-blog name="blog" ?active="${this.page === 'blog'}" .segments="${this.segments}"></view-blog>
      </dile-pages>
    `;
  }

  handleNavigation(path) {
    console.log('+++ path: ', path);

    // Se decodifica la url: sustituir los %20 por espacios en blanco 
    path = decodeURIComponent(path);
    let pathAux = path === '/' ? 'home' : path.slice(1);

    // se extraen los segmentos de la variable pathAux
    this.segments = pathAux.split('/');
    this.page = this.segments[0];
  }

  navigate(e) {
    const page = e.detail;
    // se actualiza la ruta que hay escrita en el navegador (el href)
    window.history.pushState({}, '', '/' + page);
    this.handleNavigation(window.location.pathname);
  }

}
