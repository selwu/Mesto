
class FormValidator {
  constructor(form, errorMessages) {

    this.form = form;
    this.errorMessages = errorMessages;
    this.init();
  }

  isValidate = (input) => {
    input.setCustomValidity('');

    if (input.validity.valueMissing) {
      input.setCustomValidity(this.errorMessages.valueMissing);
      return false;
    }

    if (input.validity.tooShort) {
      input.setCustomValidity(this.errorMessages.tooShort);
      return false;
    }

    if (input.validity.typeMismatch && input.type === 'url') {
      input.setCustomValidity(this.errorMessages.typeMismatch);
      return false;
    }

    return input.checkValidity();
  }

  isFieldValid = (input) => {
    this.errorElem = this.form.querySelector(`#${input.id}-error`);
    const valid = this.isValidate(input);
    this.errorElem.textContent = input.validationMessage;
    return valid;
  }

  isFormValid = () => {
    let valid = true;

    this.inputs.forEach((input) => {
      if (input.type !== 'submit') {
        if (!this.isFieldValid(input)) valid = false;
      }
    });
    return valid;
  }

  setSubmitButtonState = (state) => {

    if (state) {
      this.button.removeAttribute('disabled');
      this.button.classList.add('popup__button_valid');
    } else {
      this.button.setAttribute('disabled', 'disabled');
      this.button.classList.remove('popup__button_valid');
    }
  }

  handlerInputForm = (event) => {
    this.isFieldValid(event.target);
    this.setSubmitButtonState(this.form.checkValidity());
  }

  resetForm = () => {
    this.spans.forEach((item) => {
      const span = item;
      span.textContent = '';
    });

    this.form.reset();
  }


  setEventListeners = () => {
    this.form.addEventListener('input', this.handlerInputForm, true);

  }

  init = () => {
    this.button = this.form.querySelector('.button');
    this.inputs = this.form.querySelectorAll('input');
    this.spans = this.form.querySelectorAll('span');
    this.setEventListeners();
  }

}

