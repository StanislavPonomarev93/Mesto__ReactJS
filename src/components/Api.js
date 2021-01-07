class Api {
  constructor() {
    this.link = 'https://nomoreparties.co';
  }
  getUserInfo = () => {
    return fetch(`${this.link}/cohort12/users/me`, {
      headers: {
        authorization: 'd4572fc5-fe6c-4e19-8131-2e629bd6f3d0'
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(err => console.log(`Ошибка: ${err}`))
  };
  getInitialCards = () => {
    return fetch(`${this.link}/cohort12/cards`, {
      headers: {
        authorization: 'd4572fc5-fe6c-4e19-8131-2e629bd6f3d0'
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(err => console.log(`Ошибка: ${err}`))
  };
  sendUserInfo = (nameValue, aboutValue) => {
    return fetch(`${this.link}/cohort12/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: 'd4572fc5-fe6c-4e19-8131-2e629bd6f3d0',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameValue,
          about: aboutValue
        })
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(err => console.log(`Ошибка: ${err}`))
  };
  addCard = (cardData) => {
    return fetch(`${this.link}/cohort12/cards`, {
        method: 'POST',
        headers: {
          authorization: 'd4572fc5-fe6c-4e19-8131-2e629bd6f3d0',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardData)
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(err => console.log(`Ошибка: ${err}`))
  };
  editLike = (cardId, like) => {
    return fetch(`${this.link}/cohort12/cards/like/${cardId}`, {
        method: like ? 'PUT' : 'DELETE',
        headers: {
          authorization: 'd4572fc5-fe6c-4e19-8131-2e629bd6f3d0'
        }
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(err => console.log(`Ошибка: ${err}`))
  }
  deleteCard = (cardId) => {
    return fetch(`${this.link}/cohort12/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: 'd4572fc5-fe6c-4e19-8131-2e629bd6f3d0'
        }
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(err => console.log(`Ошибка: ${err}`))
  };
  changeAvatar = (avatarValue) => {
    return fetch(`${this.link}/cohort12/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: 'd4572fc5-fe6c-4e19-8131-2e629bd6f3d0',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: avatarValue
        })
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(err => console.log(`Ошибка: ${err}`))
  };
}
const api = new Api();
export default api;