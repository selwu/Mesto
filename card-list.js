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
      // + Вам не кажетя что логичнее addCard заставить вызывать коллбэк? Ведь жто удобнее
      // через addCard можно создавать как много (в цикле) так и одну карточку и в поле добавлять
      this.addCard(card);
    });
  }
}
