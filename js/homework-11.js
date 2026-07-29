import Model from "./Model.js";
import Form from "./Form.js";


const subscribeForm = document.getElementById('subscribe-form');
subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const data = getFormValues(form);
  console.log(data)
})
const openRegistrationBtn = document.getElementById('button-open-registration');
const registrationModal = new Model("modal-registration")

registrationModal.addListenerOpen(openRegistrationBtn);

const registrationForm = new Form("registration-form");

registrationForm.onSubmit((data) => {
  if (data) {
    const user = {...data, createdOn: new Date()}
    console.log(user)
  } else {
    if (this.arePasswordsMatching()) {
      alert("Пароли не совпадают");
    } else {
      alert("Регистрация отклонена!");
    }
  }
})