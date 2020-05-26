class CardList {
  constructor(container, cards = []) {
    this.container = container;
    this.cards = cards;
  }

  addCard(cardElement) {
    this.cards.push(cardElement);
    this.container.appendChild(cardElement);
  }

  render() {
    initialCards.forEach((item) => {
      this.addCard(this.create(item.link, item.name));
    });
  }
}
