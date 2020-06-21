class CardList {
  constructor(container, initialCards, createCard) {
    this.container = container;
    this.initialCards = initialCards;
    this.createCard = createCard;
  }

  addCard = (cardItem) => {
    const card = this.createCard(cardItem.link, cardItem.name);
    this.container.append(card);
  }

  render() {
    this.initialCards
      .then(cards => {
        cards.slice(0, 10).forEach((card) => {
          this.addCard(card);
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
