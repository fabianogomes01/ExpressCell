// Seleciona elementos HTML por meio de classes e tags
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

// Define ação ao clicar no botão "Cadastrar"
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});

// Define ação ao clicar no botão "Entrar"
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});

// Define ação ao clicar no link "Cadastre-se"
signupLink.onclick = (()=>{
  signupBtn.click(); // Simula o clique no botão "Cadastrar"
  return false; // Evita que o link redirecione para outra página
});