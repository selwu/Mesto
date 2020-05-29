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
const cardForm = document.querySelector('.form-card');
const editForm = document.querySelector('.form-profile');

const cardList = new CardList(container, initialCards);
cardList.render();
console.log(cardList);


// function createCard(link, name) {
//   const cardContainer = document.createElement('div');
//   cardContainer.classList.add('place-card');

//   const cardImage = document.createElement('div');
//   cardImage.classList.add('place-card__image');
//   cardImage.setAttribute('style', `background-image: url(${link})`);
//   cardImage.setAttribute('data-url', link);

//   const buttonDelete = document.createElement('button');
//   buttonDelete.classList.add('place-card__delete-icon');

//   const cardDescription = document.createElement('div');
//   cardDescription.classList.add('place-card__description');

//   const cardName = document.createElement('h3');
//   cardName.classList.add('place-card__name');
//   cardName.textContent = name;

//   const buttonLike = document.createElement('button');
//   buttonLike.classList.add('place-card__like-icon');


//   cardContainer.appendChild(cardImage);
//   cardContainer.appendChild(cardDescription);
//   cardImage.appendChild(buttonDelete);
//   cardDescription.appendChild(cardName);
//   cardDescription.appendChild(buttonLike);

//   return cardContainer;
// }

/*REVIEW. Отлично, что функция createCard отвечает только за создание элемента карточки, а добавление карточки к общему списку
 происходит в другой функции. Этим соблюдён принцип единственной ответственности функции createCard и её можно переиспользовать
 в других проектах.
  */
// function addToCardContainer(link, name) {
//   container.appendChild(createCard(link, name));
// }

// function toInitialCards() {
//   initialCards.forEach((item) => {
//     addToCardContainer(item.link, item.name);
//   });
// }

// function likeHandler(event) {
//   if (event.target.classList.contains('place-card__like-icon')) {
//     event.target.classList.toggle('place-card__like-icon_liked');
//   }
// }

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

function isFormValid(form) {
  const inputs = [...form.elements];
  let valid = true;

  inputs.forEach((input) => {
    if (input.type !== 'submit') {
      if (!isFieldValid(input)) valid = false;
    }
  });
  return valid;
}

function popupToggleHandler(popup) {
  return () => {
    popup.classList.toggle('popup_is-opened');
  };
}

function resetForm(form) {
  return () => {
    const button = form.querySelector('.button');
    const spans = form.querySelectorAll('span');

    button.setAttribute('disabled', 'true');
    button.classList.remove('popup__button_valid');
    spans.forEach((item) => {
      const span = item;
      span.textContent = '';
    });

    form.reset();
  };
}

function addNewCard(event) {
  event.preventDefault();

  const name = cardForm.elements.name.value;
  const link = cardForm.elements.link.value;


  addToCardContainer(link, name);
  popupToggleHandler(cardPopup)();
  resetForm(event.target)();
}

// function removeHandler(event) {
//   if (event.target.classList.contains('place-card__delete-icon')) {
//     const parentChild = document.querySelector('.places-list');
//     const parent = event.target.closest('.place-card');
//     parentChild.removeChild(parent);
//   }
// }

function setSubmitButtonState(button, state) {
  if (state) {
    button.removeAttribute('disabled');
    button.classList.add('popup__button_valid');
  } else {
    button.setAttribute('disabled', 'true');
    button.classList.remove('popup__button_valid');
  }
}

function originNamesHandler() {
  editForm.elements.nameEdit.value = userInfoName.textContent;
  editForm.elements.jobEdit.value = userInfoJob.textContent;
  const form = document.querySelector('.form-profile');
  const submit = document.querySelector('.popup__button_edit');
  setSubmitButtonState(submit, isFormValid(form));
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

// container.addEventListener('click', likeHandler);
container.addEventListener('click', openerHandler);
buttonOpenerNewCard.addEventListener('click', popupToggleHandler(cardPopup));
buttonCloserCard.addEventListener('click', popupToggleHandler(cardPopup));
buttonCloserCard.addEventListener('click', resetForm(cardForm));
buttonOpenerEditProfile.addEventListener('click', originNamesHandler);
buttonOpenerEditProfile.addEventListener('click', popupToggleHandler(profilePopup));
buttonCloserProfile.addEventListener('click', popupToggleHandler(profilePopup));
buttonCloserImage.addEventListener('click', popupToggleHandler(imagePopup));
cardForm.addEventListener('submit', addNewCard);
cardForm.addEventListener('input', handlerInputForm, true);
editForm.addEventListener('submit', submitFormEdit);
editForm.addEventListener('input', handlerInputForm, true);
// container.addEventListener('click', removeHandler);

// toInitialCards();
