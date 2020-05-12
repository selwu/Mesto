'use strict';

const container = document.querySelector('.places-list');
const buttonOpenerNewCard = document.querySelector('.user-info__button');
const buttonOpenerEditProfile = document.querySelector('.user-info__edit');
const cardPopup = document.querySelector('.card-popup');
const profilePopup = document.querySelector('.profile-popup');
const imagePopup = document.querySelector('.image-popup');
const imagePopupBig = document.querySelector('.popup__image');
const buttonCloserCard = cardPopup.querySelector('.popup__close');
const buttonCloserProfile = profilePopup.querySelector('.popup__close');
const buttonCloserImage = imagePopup.querySelector('.popup__close');
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const cardForm = document.forms.new;
const editForm = document.forms.edit;


function createCard(link, name) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('place-card');

  const cardImage = document.createElement('div');
  cardImage.classList.add('place-card__image');
  cardImage.setAttribute('style', `background-image: url(${link})`);
  cardImage.setAttribute('data-url', link);

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
  });
}

function likeHandler(event) {
  if (event.target.classList.contains('place-card__like-icon')) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }
}

function popupToggleHandler(popup) {
  return () => {
    popup.classList.toggle('popup_is-opened');
  };
}


function addNewCard(event) {
  event.preventDefault();

  const name = cardForm.elements.name.value;
  const link = cardForm.elements.link.value;

  addToCardContainer(link, name);
  cardForm.reset();
  popupToggleHandler(cardPopup)();
}

function removeHandler(event) {
  if (event.target.classList.contains('place-card__delete-icon')) {
    const parent = event.target.closest('.place-card');
    container.removeChild(parent);
  }
}

function originNamesHandler() {
  editForm.elements.nameEdit.value = userInfoName.textContent;
  editForm.elements.jobEdit.value = userInfoJob.textContent;
}

function submitFormEdit(event) {
  event.preventDefault();

  userInfoName.textContent = editForm.elements.nameEdit.value;
  userInfoJob.textContent = editForm.elements.jobEdit.value;

  popupToggleHandler(profilePopup)();
}

function openerHandler(event) {
  const cardPlaceName = document.querySelector('.place-card__name');

  if (event.target.classList.contains('place-card__image')) {
    imagePopupBig.src = event.target.dataset.url;
    imagePopupBig.alt = cardPlaceName.textContent;
    imagePopup.classList.toggle('popup_is-opened');
  }
}

container.addEventListener('click', likeHandler);
container.addEventListener('click', openerHandler);
buttonOpenerNewCard.addEventListener('click', popupToggleHandler(cardPopup));
buttonCloserCard.addEventListener('click', popupToggleHandler(cardPopup));
buttonOpenerEditProfile.addEventListener('click', popupToggleHandler(profilePopup));
buttonOpenerEditProfile.addEventListener('click', originNamesHandler);
buttonCloserProfile.addEventListener('click', popupToggleHandler(profilePopup));
buttonCloserImage.addEventListener('click', popupToggleHandler(imagePopup));
cardForm.addEventListener('submit', addNewCard);
editForm.addEventListener('submit', submitFormEdit);
container.addEventListener('click', removeHandler);
toInitialCards();
