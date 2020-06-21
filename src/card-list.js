class CardList {
  constructor(container, createCard) {
    this.container = container;
    this.createCard = createCard;
  }

  addCard = (cardItem) => {
    const card = this.createCard(cardItem.link, cardItem.name);
    this.container.append(card);
  }

  render(cards) {
    this.initialCards
      cards.slice(0, 10).forEach((card) => {
        this.addCard(card);
      })
  }
}
