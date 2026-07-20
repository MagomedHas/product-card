const subscribeForm = document.getElementById('subscribe-form');
subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const from =e.target;
    const formDate = new FormData(from);
    const date = Object.fromEntries(formDate);
    console.log(date)
})

const openRegistrationBtn = document.getElementById('button-open-registration');
const registrationModal = document.getElementById('modal-registration');
registrationModal.addEventListener('click', e => {
    if (e.target.id === 'modal-registration') {
        registrationModal.classList.remove('modal-showed')}
})
openRegistrationBtn.addEventListener('click', (e) => {
    registrationModal.classList.add('modal-showed')})

const registrationForm = document.getElementById('registration-form');
const closeBtm = document.getElementsByClassName('close-button')[0];
closeBtm.addEventListener('click', e => {
  registrationModal.classList.remove('modal-showed')
  console.log('closed registration')
})

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('registration submitted')
  const form = e.target; 
  const formDate = new FormData(form);
  const data = Object.fromEntries(formDate);
  if (registrationForm.checkValidity()) {
    if (data.password !== data.passwordConfirmation) {
      alert("Пароли не совпадают");
      return;
    }
    delete data.passwordConfirmation;

    const user = { ...data, createdOn: new Date()};
    console.log(user);

    registrationModal.classList.remove('modal-showed')
  }else {
    alert("Регистрация отклонена!");
  }
})