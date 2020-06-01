class CardList {
  constructor(container, cards, createCard) {
    this.container = container;
    this.cards = cards;
    this.createCard = createCard;
  }

  addCard = (cardItem) => {
    this.container.append(cardItem);
  }

  render() {
    this.cards.forEach((element) => {
      const card = this.createCard(element.link, element.name);
      this.addCard(card);
    });
  }
}
