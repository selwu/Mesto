class PopupCard extends Popup {
  constructor(container, setSubmitButtonStateCard, addNewCard) {
    super(container);
    this.addCard = addNewCard;
    this.setSubmitButtonState = setSubmitButtonStateCard;
    this.setSubmitButtonState(false);
    this.card = {};
  }


  submit(form) {
    this.card.name = form.elements.name.value;
    this.card.link = form.elements.link.value;
    this.card.likes = [];

    this.addCard(this.card);
  }

}
