const formEl = document.querySelector(".login-form");
const emailEl = document.getElementsByName("email");
const passEl = document.getElementsByName("password");

const response = {};

const onSubmitForm = function (e) {
  e.preventDefault();
  const [email, password] = e.target.elements;
  if (email.value && password.value !== "") {
    response.email = email.value;
    response.password = password.value;
    console.log("onSubmitForm ~ response", response);
    formEl.reset();
    return;
  }
  alert("все поля должны быть заполнены!");
};

formEl.addEventListener("submit", onSubmitForm);
