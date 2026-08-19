const addDeleteButton = document.getElementById('delete-button');
const setButton = document.getElementById('set-button');

class ModalLoading {
  #loading;
  #classNameOnDisplay;
  constructor(idLoading, classNameOnDisplay) {
    this.#loading = document.getElementById(idLoading);
    this.#classNameOnDisplay = classNameOnDisplay;
  }

  on() {
    this.#loading.classList.add(this.#classNameOnDisplay);
  }

  off() {
    this.#loading.classList.remove(this.#classNameOnDisplay);
  }
}

class CardUser {
  constructor(template, container) {
    const _template = document.getElementById(template).content.cloneNode(true);
    this.element = _template.querySelector('.users-item');
    this.container = document.getElementById(container);
    this.container.append(this.element);
    this.deleteButton = this.element.querySelector('.delete-button');
    this.deleteButton.addEventListener('click', () => {
      this.remove();
    });

  }
  addListenerDeleteButton(listener) {
    this.deleteButton.addEventListener('click', () => {listener()});
  }

  setData(data) {
    const list = this.element.querySelector('ol')
    for (let [key, value] of Object.entries(data)) {
      const item = document.createElement('li');
      item.textContent = `${key}: ${value}`;
      list.appendChild(item);
    }

  }

  remove() {
    this.element.remove();
  }
}

class UserManager {
  #users;
  constructor(repository, modalLoading, url) {
    this.url = url;
    this.repository = repository;
    this.modalLoading = modalLoading;
    this.#users = {}
    this.loading()
    if (Object.keys(this.#users).length === 0) {
      this.getUrl(this.url);
    }
  }

  loading() {
    for (let user of this.repository.getUsers()) {
      this.setUser(user);
    }
  }

  setUser(data) {
    if (this.#users[data.id]) return false;
    this.#users[data.id] = new CardUser('users-item', 'users');
    this.#users[data.id].setData(data);
    this.#users[data.id].addListenerDeleteButton(() => this.removeUser(data.id));
  }

  removeAllUsers() {
    for (let key of Object.keys(this.#users)) {
      this.removeUser(key);
    }
  }

  removeUser(userId) {
    this.repository.removeUser(userId);
    this.#users[userId].remove();
    delete this.#users[userId];
  }

  async getUrl(url = this.url) {
    try {
      this.modalLoading.on()
      let response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(fetch(url));
        }, 2000);
      })
      const data = await response.json();
      return this.repository.setUsers(data);
    } catch (error) {
      console.log('Ошибка:', error);
    } finally {
      this.loading();
      this.modalLoading.off();
    }
  }

}


class LocalStorageService {
  getUser(userId) {
    const user = localStorage.getItem(userId);
    if (user) return JSON.parse(user);
    return null;
  }

  getUsers() {
    let user = [];
    for (let key of Object.keys(localStorage)) {
      user.push(this.getUser(key))
    }
    return user;
  }

  setUser(user) {
    localStorage.setItem(user.id, JSON.stringify(user));
  }

  setUsers(users) {
    let savedCount = 0;
    for (let user of users) {
      if (!localStorage.getItem(user.id)) {
        this.setUser(user);
        savedCount++;
      }
    }
    return savedCount;
  }

  removeUser(userId) {
    localStorage.removeItem(userId);
  }
}


const modalLoading = new ModalLoading("loading", "on_display_flex");
const localStorageService = new LocalStorageService();
const userManager = new UserManager(localStorageService, modalLoading, 'users.json');

addDeleteButton.addEventListener('click', () => {userManager.removeAllUsers()})
setButton.addEventListener('click', async () => {
  await userManager.getUrl('users.json') || alert('Новых пользователей нет');
})