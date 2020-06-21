class Popup {
  constructor(container) {
    this.container = container;
    this.setEventListener();
  }

  close() {
    this.container.classList.remove('popup_is-opened');
  }

  open() {
    this.container.classList.add('popup_is-opened');
  }

  setEventListener() {
    this.closeButton = this.container.querySelector('.popup__close');
    this.closeButton.addEventListener('click', () => this.close());
  }
}

