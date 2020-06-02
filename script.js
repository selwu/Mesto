'use strict';


const container = document.querySelector('.places-list');
const cardPopup = document.querySelector('.card-popup');
const profilePopup = document.querySelector('.profile-popup');
const cardForm = document.querySelector('.form-card');
const profileForm = document.querySelector('.form-profile');
const buttonProfile = document.querySelector('.popup__button_edit');
const userInfoJob = document.querySelector('.user-info__job');
const userInfoName = document.querySelector('.user-info__name');
const inputName = document.querySelector('#name-edit');
const inputJob = document.querySelector('#job-edit');
const popupImageOpener = document.querySelector('.places-list');
const buttonCloserImage = document.querySelector('.popup__close-image');
const buttonOpenerProfile = document.querySelector('.user-info__edit');
const buttonCloserProfile = document.querySelector('.popup__close-profile');
const buttonOpenerNewCard = document.querySelector('.user-info__button');
const buttonCloserCard = document.querySelector('.popup__close-card');
const createCard = (link, name) => new Card(link, name).create();
const cardList = new CardList(container, initialCards, createCard);
const popupCard = new PopupCard(document.querySelector('.card-popup'), createCard, cardList.addCard);
const popupProfile = new PopupProfile(document.querySelector('.profile-popup'));
const popupImage = new PopupImage(document.querySelector('.image-popup'));
const userInfo = new UserInfo(userInfoName, userInfoJob, inputName, inputJob);
const profileFormValidator = new FormValidator(profileForm);
const cardFormValidator = new FormValidator(cardForm);


popupImageOpener.addEventListener('click', (event) => {
  popupImage.open(event, document.querySelector('.popup__image'));
});

buttonCloserImage.addEventListener('click', (event) => {
  popupImage.close(event);
});

buttonOpenerNewCard.addEventListener('click', () => {
  popupCard.open();
});

buttonCloserCard.addEventListener('click', () => {
  popupCard.close();
  popupCard.resetForm(cardForm);
});

cardPopup.addEventListener('submit', (event) => {
  event.preventDefault();
  popupCard.submit(event.target);
  popupCard.resetForm(event.target);
  popupCard.close();
});


buttonOpenerProfile.addEventListener('click', () => {
  popupProfile.open();
});

buttonOpenerProfile.addEventListener('click', () => {
  userInfo.setUserInfo(userInfoName.textContent, userInfoJob.textContent);
  profileFormValidator.isFormValid(profileForm);
  buttonProfile.removeAttribute('disabled');
  buttonProfile.classList.add('popup__button_valid');
});

buttonCloserProfile.addEventListener('click', () => {
  popupProfile.close();
});

profilePopup.addEventListener('submit', (event) => {
  event.preventDefault();
  userInfo.updateUserInfo(inputName.value, inputJob.value);
  popupProfile.close();
});


cardList.render();
cardFormValidator.setEventListeners();
profileFormValidator.setEventListeners();
