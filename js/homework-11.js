import {Model} from "./Model.js";

const subscribeForm = document.getElementById('subscribe-form');
subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
  const data =  getFormValues(form);
    console.log(data)
})
const openRegistrationBtn = document.getElementById('button-open-registration');
const registrationModal = new Model("modal-registration")

registrationModal.addListenerOpen(openRegistrationBtn);