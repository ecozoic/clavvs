import { observable, action } from 'mobx';

class Store {
  @observable timer = 0;

  constructor() {
    this.startTimer();
  }

  @action('start timer')
  startTimer() {
    setInterval(action('timer increment', () => {
      this.timer += 1;
    }), 1000);
  }

  @action('reset timer')
  resetTimer() {
    this.timer = 0;
  }
}

export default Store;
