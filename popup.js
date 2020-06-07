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

// Надо исправить
// Попап должен уметь себя закрывать по "крестику"
// Передайте в конструктор или селектор элемента для клика на закрытие или сам элемент