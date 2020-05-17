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

function isValidate(input) {
  input.setCustomValidity('');

  if (input.validity.valueMissing) {
    input.setCustomValidity('Это обязательное поле');
    return false;
  }

  if (input.validity.tooShort) {
    input.setCustomValidity('Должно быть от 2 до 30 символов');
    return false;
  }

  if (input.validity.typeMismatch && input.type === 'url') {
    input.setCustomValidity('Здесь должна быть ссылка');
    return false;
  }

  return input.checkValidity();
}


function isFieldValid(input) {
  const errorElem = input.parentNode.querySelector(`#${input.id}-error`);
  const valid = isValidate(input);
  errorElem.textContent = input.validationMessage;
  return valid;
}

function setSubmitButtonState(button, state) {
  if (state) {
    button.removeAttribute('disabled');
    button.classList.add('popup__button_valid');
  } else {
    button.setAttribute('disabled', 'true');
    button.classList.remove('popup__button_valid');
  }
}

function handlerInputForm(event) {
  const submit = event.currentTarget.querySelector('.button');
  const [...inputs] = event.currentTarget.elements;

  isFieldValid(event.target);

  if (inputs.every(isValidate)) {
    setSubmitButtonState(submit, true);
  } else {
    setSubmitButtonState(submit, false);
  }
}

function isFormValid(form) {
  const inputs = Array.from(form.elements);
  let valid = true;

  inputs.forEach((input) => {
    if (input.type !== 'submit') {
      if (!isFieldValid(input)) valid = false;
    }
  });
  return valid;
}

function sendForm(event) {
  event.preventDefault();
  const currentForm = event.target;
  const isValid = isFormValid(currentForm);

  if (isValid) {
    console.log('Ok!');
    event.target.reset();
  } else {
    console.log('Not ok!');
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
cardForm.addEventListener('submit', sendForm);
cardForm.addEventListener('input', handlerInputForm, true);
editForm.addEventListener('submit', submitFormEdit);
editForm.addEventListener('submit', sendForm);
editForm.addEventListener('input', handlerInputForm, true);
container.addEventListener('click', removeHandler);

toInitialCards();
