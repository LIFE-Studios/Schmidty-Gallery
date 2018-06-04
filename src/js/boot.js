import "../style/main.scss";

export default class Boot {
  constructor () {
    console.log('que pasa');
  }
}

window.onload = () => new Boot;
