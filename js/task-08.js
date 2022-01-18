// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем 
// свойства, а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {elements: { email, password }} = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заполните пожалуйста поле Email и Password ");
  }
     const formEl = {
        email: email.value,
        password: password.value
    }
  console.log(formEl);
  event.currentTarget.reset();
}


// const formRef = document.querySelector('.login-form');

// formRef.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     const email = event.currentTarget.elements.email.value;
//     const password = event.currentTarget.elements.password.value;
//     event.preventDefault();
     
//     if (email === '' || password === '') {
//         alert('Please note that all fields are required!')
//     } else {
//         const formData = {
//         email,
//         password,
//     }
//         console.log(formData);
        
//     }
    
//     formRef.reset()
// }