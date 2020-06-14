class CardList {
  constructor(container, cards, createCard) {
    this.container = container;
    this.cards = cards;
    this.createCard = createCard;
  }

  addCard = (cardItem) => {
    const card = this.createCard(cardItem.link, cardItem.name);
    this.container.append(card);
  }

  render() {
    this.cards.forEach((card) => {
      this.addCard(card);
    });
  }
}
