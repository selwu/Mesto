'use strict'

const container = document.querySelector('.places-list');
const buttonOpenerNewCard = document.querySelector('.user-info__button');
const popup = document.querySelector('.popup');
const popupCloser = document.querySelector('.popup__close');
const form = document.forms.new;





function createCard(link, name) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('place-card');

  const cardImage = document.createElement('div');
  cardImage.classList.add('place-card__image');
  cardImage.setAttribute('style', `background-image: url(${link})`);

  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('place-card__delete-icon');

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('place-card__description');

  const cardName = document.createElement('h3');
  cardName.classList.add('place-card__name');
  cardName.textContent = name;

  const buttonLike = document.createElement('button');
  buttonLike.classList.add('place-card__like-icon');


  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardDescription);
  cardImage.appendChild(buttonDelete);
  cardDescription.appendChild(cardName);
  cardDescription.appendChild(buttonLike);

  return cardContainer;
}

function addToCardContainer(link, name) {
  container.appendChild(createCard(link, name));
}

function toInitialCards() {
  initialCards.forEach((item) => {
    addToCardContainer(item.link, item.name);
  })
};

function likeHandler(event) {
  if (event.target.classList.contains('place-card__like-icon')) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }
}

function popupToggleHandler() {
  popup.classList.toggle('popup_is-opened');
}

function addNewCard(event) {
  event.preventDefault();

  const name = form.elements.name.value;
  const link = form.elements.link.value;

  addToCardContainer(link, name);
  form.reset();
  popupToggleHandler();
}

function removeHandler(event) {
  if (event.target.classList.contains('place-card__delete-icon')) {
    const parent = event.target.closest('.place-card');
    container.removeChild(parent);
  }
}

container.addEventListener('click', likeHandler);
buttonOpenerNewCard.addEventListener('click', popupToggleHandler);
popupCloser.addEventListener('click', popupToggleHandler);
form.addEventListener('submit', addNewCard);
container.addEventListener('click', removeHandler);

toInitialCards();
