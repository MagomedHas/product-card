export default class Form {
  #form;
  static #EXPECTED_PASSWORD_COUNT = 2;
  #passwordFields;

  constructor(idForm) {
    this.#form = document.getElementById(idForm);
    if (!this.#form) {
      throw new Error(`Form with id ${idForm}`);
    }

    this.#passwordFields = this.#form.querySelectorAll('input[type="password"]');
    if (this.#passwordFields.length !== Form.#EXPECTED_PASSWORD_COUNT) {
      throw new Error(`The form must have two \`:input[type="password"]\` elements.`);
    }

    this.#form.addEventListener('submit', e => {
      e.preventDefault();
    })
  }

  arePasswordsMatching() {
    return this.#passwordFields[0].value === this.#passwordFields[1].value;
  }

  isValid() {
    return this.#form.checkValidity() && this.arePasswordsMatching();
  }

  clear() {
    this.#form.clear()
  }

  getValues() {
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
      callback(this.getValues())
    })
  }
}