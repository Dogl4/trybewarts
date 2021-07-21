const botao = document.getElementById('btn-logar');
const botaoEnviar = document.getElementById('submit-btn');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const termos = document.querySelector('#agreement');

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
  document.createElement('div');
});
