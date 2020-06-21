class UserInfo {
  constructor(textName, textJob) {
    this.textName = textName;
    this.textJob = textJob;
    this.name = '';
    this.job = '';
  }

  setUserInfo = (setName, setJob) => {
    this.name = setName;
    this.job = setJob;
  }

  updateUserInfo = () => {
    this.textJob.textContent = this.job;
    this.textName.textContent = this.name;
  }

  getUserInfo = () => {
    return {
      name: this.name,
      job: this.job,
    };
  }

}

