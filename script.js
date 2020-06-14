'use strict';

(() => {
  const errorMessages = {
    valueMissing: 'Это обязательное поле',
    tooShort: 'Должно быть от 2 до 30 символов',
    typeMismatch: 'Здесь должна быть ссылка',
  };
  const container = document.querySelector('.places-list');
  const cardPopup = document.querySelector('.card-popup');
  const profilePopup = document.querySelector('.profile-popup');
  const cardForm = document.querySelector('.form-card');
  const profileForm = document.querySelector('.form-profile');
  const userInfoJob = document.querySelector('.user-info__job');
  const userInfoName = document.querySelector('.user-info__name');
  const inputName = document.querySelector('#name-edit');
  const inputJob = document.querySelector('#job-edit');
  const buttonCloserImage = document.querySelector('.popup__close-image');
  const buttonOpenerProfile = document.querySelector('.user-info__edit');
  const buttonCloserProfile = document.querySelector('.popup__close-profile');
  const buttonOpenerNewCard = document.querySelector('.user-info__button');
  const buttonCloserCard = document.querySelector('.popup__close-card');
  const imageBig = document.querySelector('.popup__image');
  const popupImage = new PopupImage(document.querySelector('.image-popup'), imageBig);
  const profileFormValidator = new FormValidator(profileForm, errorMessages);
  const cardFormValidator = new FormValidator(cardForm, errorMessages);
  const openImageCallback = (link, name) => {
    popupImage.open(link, name);
  };
  const setSubmitButtonStateCard = (state) => {
    cardFormValidator.setSubmitButtonState(state);
  };
  const createCard = (link, name) => new Card(link, name, openImageCallback).create();
  const cardList = new CardList(container, initialCards, createCard);
  const addNewCard = (cardItem) => {
    cardList.addCard(cardItem);
  };
  const popupCard = new PopupCard({ cardPopup, setSubmitButtonStateCard, createCard, addNewCard });
  const popupProfile = new Popup(profilePopup);
  const userInfo = new UserInfo(userInfoName, userInfoJob);


  buttonCloserImage.addEventListener('click', (event) => {
    popupImage.close(event);
  });

  buttonOpenerNewCard.addEventListener('click', () => {
    popupCard.open();
  });

  buttonCloserCard.addEventListener('click', () => {
    cardFormValidator.resetForm();
  });

  cardPopup.addEventListener('submit', (event) => {
    event.preventDefault();
    popupCard.submit(event.target);
    cardFormValidator.resetForm();
    popupCard.close();
  });


  buttonOpenerProfile.addEventListener('click', () => {
    const getUserInfo = userInfo.getUserInfo();
    inputName.value = getUserInfo.name;
    inputJob.value = getUserInfo.job;
    popupProfile.open();
  });

  buttonCloserProfile.addEventListener('click', () => {
    profileFormValidator.resetForm();
  });

  profilePopup.addEventListener('submit', (event) => {
    event.preventDefault();
    userInfo.setUserInfo(inputName.value, inputJob.value);
    userInfo.updateUserInfo();
    popupProfile.close();
  });


  cardList.render();
  userInfo.setUserInfo('Jaques Causteau', 'Sailor, Researcher');
  userInfo.updateUserInfo();
})();
