class PopupCard extends Popup {
  constructor(container, createCard, addCard) {
    super(container);
    this.createCard = createCard;
    this.addCard = addCard;
  }


  submit(form) {
    const name = form.elements.name.value;
    const link = form.elements.link.value;

    this.addCard(this.createCard(link, name));
  }

  resetForm(form) {
    const button = form.querySelector('.button');
    const spans = form.querySelectorAll('span');
    // Используйте метод setSubmitButtonState соответствующего экземпляра класса валидатора
    // Метод надо в конструктор передать
    button.setAttribute('disabled', 'true');
    button.classList.remove('popup__button_valid');
    // Чистка текста ошибок -- это зона ответственности класса-валидатора
    // Этот метод следует добавить туда
    spans.forEach((item) => {
      const span = item;
      span.textContent = '';
    });

    form.reset();
    this.close();
  }

}
