
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













































function submitFormEdit(event) {
  event.preventDefault();

  userInfoName.textContent = editForm.elements.nameEdit.value;
  userInfoJob.textContent = editForm.elements.jobEdit.value;

  popupToggleHandler(profilePopup)();
}

function originNamesHandler() {
  editForm.elements.nameEdit.value = userInfoName.textContent;
  editForm.elements.jobEdit.value = userInfoJob.textContent;
  const form = document.querySelector('.form-profile');
  const submit = document.querySelector('.popup__button_edit');
  setSubmitButtonState(submit, isFormValid(form));
}
