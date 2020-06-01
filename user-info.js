class UserInfo {
  constructor(textName, textJob, inputName, inputJob) {
    this.textName = textName;
    this.textJob = textJob;
    this.inputName = inputName;
    this.inputJob = inputJob;
  }

  setUserInfo(name, job) {
    this.inputJob.value = job;
    this.inputName.value = name;
  }

  updateUserInfo(name, job) {
    this.textJob.textContent = job;
    this.textName.textContent = name;
  }
}
