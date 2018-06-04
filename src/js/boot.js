import "../style/main.css";
import blueimp from 'blueimp-gallery';

export default class Boot {
  constructor () {
    this.blueimp = blueimp || {};
  }
  init () {
    console.log('roll it');
  }
}

window.onload = () => (new Boot).init();
