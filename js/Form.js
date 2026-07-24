export default class Form {
  #form;
  constructor(idForm) {
    this.#form = document.getElementById(idForm);
    if (!this.#form) {
      throw new Error(`Form with id ${idForm}`);
    }

    const passwords = this.#form.querySelectorAll('input[type="password"]');
    if (passwords.length !== 2) {
      throw new Error(`The form must have two \`:input[type="password"]\` elements.`);
    }

    this.#form.addEventListener('submit', e => {
      e.preventDefault();
    })
  }

  arePasswordsMatching () {
    const passwords = this.#form.querySelectorAll('input[type="password"]');
    return passwords[0].value === passwords[1].value;
  }

  isValid() {
    return this.#form.checkValidity() && this.arePasswordsMatching();
  }

  clear() {
    const inputs = Array.from(this.#form.querySelectorAll('input'));
    inputs.forEach(input => {input.value = '';});
  }

  values() {
    if (!this.isValid()) {
      return undefined;
    }
    const formData = new FormData(this.#form);
    const data = Object.fromEntries(formData.entries());
    delete data.passwordConfirmation;

    return data;
  }

  onSubmit(callback) {
    this.#form.addEventListener('submit', (e) => {
      callback(this.values())
    })
  }
}