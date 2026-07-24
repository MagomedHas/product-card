export class Model {
  #model;
  constructor(idModel) {
    this.#model = document.getElementById(idModel);
    if (!this.#model) {
      throw new Error("No model found.");
    }

    const closeBtn = this.#model.querySelector(".close-button");
    if (closeBtn) {
      this.addListenerClose(closeBtn)
    }
    this.addListenerClose(this.#model);
  }

  open() {
    this.#model.classList.add('modal-showed');
  }

  close() {
    this.#model.classList.remove('modal-showed');
  }

  isOpen(){
    return this.#model.classList.contains('modal-showed');
  }

  addListenerClose(element) {
    element.addEventListener('click', (e) => {
      if (e.target === element) {
        this.close();
      }
    })
  }

  addListenerOpen(element) {
    element.addEventListener('click', (e) => {
      this.open();
    })
  }
}