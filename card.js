class Card {
  constructor(link, name) {
    this.link = link;
    this.name = name;
  }

  create() {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('place-card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('place-card__image');
    cardImage.setAttribute('style', `background-image: url(${this.link})`);
    cardImage.setAttribute('data-url', this.link);
    cardImage.setAttribute('data-name', this.name);

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('place-card__delete-icon');

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('place-card__description');

    const cardName = document.createElement('h3');
    cardName.classList.add('place-card__name');
    cardName.textContent = this.name;

    const buttonLike = document.createElement('button');
    buttonLike.classList.add('place-card__like-icon');


    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardDescription);
    cardImage.appendChild(buttonDelete);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(buttonLike);

    this.cardElement = cardContainer;
    this.setEventListeners();
    return cardContainer;
  }

  like = () => {
    const  button = this.cardElement.querySelector('.place-card__like-icon');
    button.classList.toggle('place-card__like-icon_liked');
  }

  remove = () => {
    this.cardElement.remove();
    this.deleteEventListeners();
  }

  setEventListeners() {
    this.cardElement.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    this.cardElement.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
  }

  deleteEventListeners() {
    this.cardElement.querySelector('.place-card__like-icon').removeEventListener('click', this.like);
    this.cardElement.querySelector('.place-card__delete-icon').removeEventListener('click', this.remove);
  }

}
