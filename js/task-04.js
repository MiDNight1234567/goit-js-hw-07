const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim(),
  };
  if (data.email === '' || data.password == '') {
    return alert('All form fields must be filled in');
  }
  console.log(data);
  event.target.reset();
});
