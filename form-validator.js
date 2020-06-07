
class FormValidator {
  constructor(form, errorMessages) {
    this.form = form;
    this.errorMessages = errorMessages;
  }

  isValidate = (input) => {
    input.setCustomValidity('');

    if (input.validity.valueMissing) {
      // + Можно лучше
      // Текст ошибок лучше представить в виде объекта вида:
      // const errorMessages = {
      // valueMissing: 'Это обязательное поле',
      // tooShort: 'Должно быть от 2 до 30 символов',
      // typeMismatch: 'Здесь должна быть ссылка'
      // };
      // Объект передаем в метод валидации и текст берем уже по ключу объекта
      // Что это дает? Так мы отвязываемся от локали, можно объект на любом
      // языке скинуть, таким образом можно легко осуществить локализацию.
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
    // + Надо исправить
    // .parentNode -- хардкод, ищите в форме, она же сохранится в классе
    this.errorElem = this.form.querySelector(`#${input.id}-error`);
    const valid = this.isValidate(input);
    this.errorElem.textContent = input.validationMessage;
    return valid;
  }

  isFormValid = (form) => {
    const inputs = [...form.elements];
    let valid = true;

    inputs.forEach((input) => {
      if (input.type !== 'submit') {
        if (!this.isFieldValid(input)) valid = false;
      }
    });
    return valid;
  }
  // Кнопку не надо будет передавать, она одна и должна быть сохранена в переменной класса
  setSubmitButtonState = (button, state) => {
    if (state) {
      button.removeAttribute('disabled');
      button.classList.add('popup__button_valid');
    } else {
      button.setAttribute('disabled', 'true');
      button.classList.remove('popup__button_valid');
    }
  }

  handlerInputForm = (event) => {
    // Кнопка и массивы должны быть найдены 1 раз и сохранены в переменных
    const submit = event.currentTarget.querySelector('.button');
    const [...inputs] = event.currentTarget.elements;

    this.isFieldValid(event.target);
    // Можно обойтись без перебора
    // На форме выполняете метод this.someForm.checkValidity()
    // он вернет treu/false если форма валидна/невалидна
    // Это метод проверяет форму целиком
    if (inputs.every(this.isValidate)) {
      this.setSubmitButtonState(submit, true);
    } else {
      this.setSubmitButtonState(submit, false);
    }
  }


  setEventListeners() {
    this.form.addEventListener('input', this.handlerInputForm, true);
  }

}

// Заведите метод класса init() в котором вы собираете 1 раз массив
// инпутов, массив подстрочников с ошибками, кнопку и все что еще нужно.
// Сохраните это в переменных класса, чтобы не искать заново. Из этого же
// метода вызывайте setEventListeners
