class PopupImage extends Popup {
  constructor(container, imageBig) {
    super(container)
    this.imageBig = imageBig;
  }

  open(link, name) {
    this.imageBig.src = link;
    this.imageBig.alt = name;
    this.container.classList.add('popup_is-opened');
  }
}