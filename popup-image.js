class PopupImage {
  constructor(container) {
    this.container = container;
  }

  open(event, image) {
    const imagePopupBig = image;
    if (event.target.classList.contains('place-card__image')) {
      imagePopupBig.src = event.target.dataset.url;
      imagePopupBig.alt = event.target.dataset.name;
      this.container.classList.add('popup_is-opened');
    }
  }

  close(event) {
    if (event.target.classList.contains('popup__close-image')) {
      this.container.classList.remove('popup_is-opened');
    }
  }
}
