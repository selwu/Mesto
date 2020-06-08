class Card {
  constructor(link, name, openImageCallback) {
    this.link = link;
    this.name = name;
    this.openImageCallback = openImageCallback;
  }

  create() {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('place-card');

    const cardImage = document.createElement('div');
    this.cardImage = cardImage;
    cardImage.classList.add('place-card__image');
    cardImage.setAttribute('style', `background-image: url(${this.link})`);
    cardImage.setAttribute('data-url', this.link);
    cardImage.setAttribute('data-name', this.name);

    const buttonDelete = document.createElement('button');
    this.buttonDelete = buttonDelete;
    buttonDelete.classList.add('place-card__delete-icon');

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('place-card__description');

    const cardName = document.createElement('h3');
    cardName.classList.add('place-card__name');
    cardName.textContent = this.name;

    const buttonLike = document.createElement('button');
    this.buttonLike = buttonLike;
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
    this.buttonLike.classList.toggle('place-card__like-icon_liked');
  }

  remove = () => {

    this.deleteEventListeners();
    this.cardElement.remove();
  }

  zoom = () => {
    this.openImageCallback(this.link, this.name);
  }

  setEventListeners() {
    this.buttonLike.addEventListener('click', this.like);
    this.buttonDelete.addEventListener('click', this.remove);
    this.cardImage.addEventListener('click', this.zoom);
  }

  deleteEventListeners() {
    this.buttonLike.removeEventListener('click', this.like);
    this.buttonDelete.removeEventListener('click', this.remove);
    this.cardImage.removeEventListener('click', this.zoom);
  }

}
