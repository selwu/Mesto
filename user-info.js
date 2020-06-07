class UserInfo {
  constructor(textName, textJob, inputName, inputJob) {
    this.textName = textName;
    this.textJob = textJob;
    this.inputName = inputName;
    this.inputJob = inputJob;
  }

  setUserInfo(name, job) {
    // Этот класс про форму знать не должен
    this.inputJob.value = job;
    this.inputName.value = name;
  }

  updateUserInfo(name, job) {
    this.textJob.textContent = job;
    this.textName.textContent = name;
  }
}
// Надо исправить
// Класс должен на вход в конструктор получить элементы страницы, куда он будет подставлять актуальные данные
// подьзователя (инпуты к ним не относятся).
// Заведите метод setUserInfo который принимает строки с именем и профессией и сохраняет их внутри класса
// Заведите метод updateUserInfo для обновления данных юзера на странице
// Заведите метод getUserInfo -- он должен вернуть объект с текущими данными пользователя
// Обратите внимание, мы не храним данные в DOM, мы их туда просто подставляем.
// Лучше сразу созать экземпляр класса, вызвать метод установки данных, и метод отрисовки
// Не забудьте убрать заранее прописанные данные юзера в HTML
// Эта организация будет очень удобна на следующем спринте