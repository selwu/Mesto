class CardList {
  constructor(container, cards) {
    this.container = container;
    this.cards = cards;
  }

  addCard(cardElement) {
    this.cards.push(cardElement);
    this.container.appendChild(cardElement);
  }

  render() {
    this.cards.forEach(element => {
      const card = new Card(element.link, element.name);
      this.addCard(card.create());
      card.setEventListeners();
    });
  }
}
