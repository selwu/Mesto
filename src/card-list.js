class CardList {
  constructor(container, createCard) {
    this.container = container;
    this.createCard = createCard;
  }

  addCard = (cardItem) => {
    const card = this.createCard(cardItem.link, cardItem.name, cardItem.likes.length);
    this.container.append(card);
  }

  render(cards) {
      cards.forEach((card) => {
          this.addCard(card);
        })
  }
}
