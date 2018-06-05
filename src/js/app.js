import "../style/main.css";
import Gallery from 'blueimp-gallery';
import images from '../data/images.json';
import { Image } from './components/Image.js';

/**
 * Photo Gallery App based on the module 'gallery' from blueimp
 * - photos are loaded from a static json file and then iterated over the set
 *  to create an image component grid. Photo click events are captured and
 *  handled by the Gallery module.
 */
class App {
  constructor () {
    this.container = document.getElementById('blueimp-gallery');
    this.links = document.getElementById('links');
    this.images = images || null;
  }

  /**/
  init () {
    try {
      if (this.images) this.render(() => this.setBindings());
    } catch (e) {
      console.error('Error init', e);
    }
  }

  /**/
  render (cb) {
    this.images.forEach(image => this.links.innerHTML += Image(image));
    cb();
  }

  /**/
  setBindings () {
    this.links.onclick = (event) => {
      event = event || window.event;
      const target = event.target || event.srcElement;
      const link = target.src ? target.parentNode : target;
      const options = { index: link, event: event };
      const links = this.links.getElementsByTagName('a');
      Gallery(links, options);
    };
  }
}

window.onload = () => (new App).init();
