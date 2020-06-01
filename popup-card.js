class PopupCard extends Popup {
  constructor(container, createCard, addCard) {
    super(container);
    this.createCard = createCard;
    this.addCard = addCard;
  }


  submit(event) {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const link = event.target.elements.link.value;

    this.addCard(this.createCard(link, name));
    this.resetForm(event.target);
  }

  resetForm(form) {
    const button = form.querySelector('.button');
    const spans = form.querySelectorAll('span');

    button.setAttribute('disabled', 'true');
    button.classList.remove('popup__button_valid');
    spans.forEach((item) => {
      const span = item;
      span.textContent = '';
    });

    form.reset();
    this.close();
  }

}
