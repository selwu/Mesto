class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`error${res.status}`);
      });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`error${res.status}`);
      });
  }

  uploadUserInfo(userName, userJob) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: userName,
        about: userJob,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`error${res.status}`);
      });
  }

  toAddNewCard(cardName, cardLink) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`error${res.status}`);
      });
  }

}
