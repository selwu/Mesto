class PopupImage extends Popup {
  constructor(container, imageBig) {
    super(container)
    // + Надо исправить
    // Этот элемент уже готовый в конструктор передайте
    this.imageBig = imageBig;
  }

  open(link, name) {
    this.imageBig.src = link;
    this.imageBig.alt = name;
    this.container.classList.add('popup_is-opened');
  }

  // close вообще переопределять не надо
  // Исправьте
}