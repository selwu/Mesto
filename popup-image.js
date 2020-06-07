class PopupImage {
  constructor(container) {
    this.container = container;
    this.imageBig = container.querySelector('.popup__image');
  }

  open(link, name) {
    this.imageBig.src = link;
    this.imageBig.alt = name;
    this.container.classList.add('popup_is-opened');
  }

  close() {
    this.container.classList.remove('popup_is-opened');
  }
}
