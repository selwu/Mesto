class PopupCard extends Popup {
  constructor(obj) {
    super(obj.cardPopup);
    this.createCard = obj.createCard;
    this.addCard = obj.addNewCard;
    this.setSubmitButtonState = obj.setSubmitButtonStateCard;
    this.setSubmitButtonState(false);
  }


  submit(form) {
    const name = form.elements.name.value;
    const link = form.elements.link.value;

    this.addCard(this.createCard(link, name));
    
  }

}
