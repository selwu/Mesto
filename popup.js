class Popup {
  constructor(container) {
    this.container = container;
  }

  close() {
    this.container.classList.remove('popup_is-opened');
  }

  open() {
    this.container.classList.add('popup_is-opened');
  }
}
