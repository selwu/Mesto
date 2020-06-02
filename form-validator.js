
class FormValidator {
  constructor(form) {
    this.form = form;
  }




//   isValidate = (input) => {
//     input.setCustomValidity('');

//     if (input.validity.valueMissing) {
//       input.setCustomValidity('Это обязательное поле');
//       return false;
//     }

//     if (input.validity.tooShort) {
//       input.setCustomValidity('Должно быть от 2 до 30 символов');
//       return false;
//     }

//     if (input.validity.typeMismatch && input.type === 'url') {
//       input.setCustomValidity('Здесь должна быть ссылка');
//       return false;
//     }

//     return input.checkValidity();
//   }

//   isFieldValid = (input) => {
//     const errorElem = input.parentNode.querySelector(`#${input.id}-error`);
//     const valid = this.isValidate(input);
//     errorElem.textContent = input.validationMessage;
//     return valid;
//   }

//   isFormValid = (form) => {
//     const inputs = [...form.elements];
//     let valid = true;

//     inputs.forEach((input) => {
//       if (input.type !== 'submit') {
//         if (!this.isFieldValid(input)) valid = false;
//       }
//     });
//     return valid;
//   }

//   setSubmitButtonState = (button, state) => {
//     if (state) {
//       button.removeAttribute('disabled');
//       button.classList.add('popup__button_valid');
//     } else {
//       button.setAttribute('disabled', 'true');
//       button.classList.remove('popup__button_valid');
//     }
//   }

//   handlerInputForm = (event) => {
//     const submit = event.currentTarget.querySelector('.button');
//     const [...inputs] = event.currentTarget.elements;

//     this.isFieldValid(event.target);

//     if (inputs.every(this.isValidate)) {
//       this.setSubmitButtonState(submit, true);
//     } else {
//       this.setSubmitButtonState(submit, false);
//     }
//   }


//   setEventListeners() {
//     this.form.addEventListener('input', this.handlerInputForm, true);
//   }

}
