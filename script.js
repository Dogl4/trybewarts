const form = document.getElementById('evaluation-form');
const botao = document.getElementById('btn-logar');
const botaoEnviar = document.getElementById('submit-btn');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const termos = document.querySelector('#agreement');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');

botao.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});

termos.addEventListener('click', () => {
  if (termos.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});

// Requisito 20:
const texto = document.getElementById('textarea');
texto.addEventListener('input', () => {
  const num = 500 - document.getElementById('textarea').value.length;
  if (num >= 0) {
    document.getElementById('counter').innerText = num;
  }
});

// Requisito 21:
botaoEnviar.addEventListener('click', () => {
  localStorage.clear();
  localStorage.setItem('Nome:', `${nome.value} ${sobrenome.value}`);
  localStorage.setItem('Email:', email.value);
  localStorage.setItem('Casa:', casa.value);
  // localStorage.setItem('Família:', familia.value);
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
  for (let index = 0; index < localStorage.length; index += 1) {
    const text = document.createElement('p');
    text.innerText = `${localStorage.key(index)} ${localStorage.getItem(localStorage.key(index))}`;
    form.appendChild(text);
  }
});
