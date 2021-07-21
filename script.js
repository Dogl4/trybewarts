const botao = document.getElementById('btn-logar');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const botaoEnviar = document.querySelector('#submit-btn');
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
