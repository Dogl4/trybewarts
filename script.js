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
const nota = document.getElementsByName('rate');
const familia = document.getElementsByName('family');
const texto = document.getElementById('textarea');
const skills = document.querySelectorAll('.subject');

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
texto.addEventListener('input', () => {
  const num = 500 - document.getElementById('textarea').value.length;
  if (num >= 0) {
    document.getElementById('counter').innerText = num;
  }
});

// // Função verifica qual radio está selecionado, logo após, já o guarda
// const guardaRadioSelecionado = (array, nomeChave) => {
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index].checked) {
//       localStorage.setItem(`${nomeChave}:`, array[index].value);
//     }
//   }
// };

// // const checkboxSeleceted = (array) => {

// // };

// // Requisito 21:
// botaoEnviar.addEventListener('click', () => {
//   localStorage.clear();
//   localStorage.setItem('Nome:', `${nome.value} ${sobrenome.value}`);
//   localStorage.setItem('Email:', email.value);
//   localStorage.setItem('Casa:', casa.value);
//   guardaRadioSelecionado(familia, 'Família');
//   guardaRadioSelecionado(skills, 'Matérias');
//   guardaRadioSelecionado(avalia, 'Avaliação');
//   localStorage.setItem('Observações:', texto.value);
//   // localStorage.setItem('Família:', familia.value);
//   while (form.firstChild) {
//     form.removeChild(form.firstChild);
//   }
//   for (let index = 0; index < localStorage.length; index += 1) {
//     const text = document.createElement('p');
//     text.innerText = `${localStorage.key(index)} ${localStorage.getItem(localStorage.key(index))}`;
//     form.appendChild(text);
//   }
// });

// // Função verifica qual radio está selecionado
// function valueRadio(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].checked) {
//       return array[i].valeu;
//     }
//   }
// }

// Função verifica qual radio está selecionado, logo após, já o guarda
const guardaRadioSelecionado = (array, nomeChave) => {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked) {
      localStorage.setItem(`${nomeChave}:`, array[index].value);
    }
  }
};

// Função verifica qual checkbox está selecionado, logo após já o guarda
const guardaCheckboxSelecionado = (array, nomeChave) => {
  let guarda = `${nomeChave}:`;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked) {
      guarda += ` ${array[index].value}, `;
    }
  }
  return guarda;
};

// Requisito 21:
botaoEnviar.addEventListener('click', () => {
  guardaRadioSelecionado(familia, 'Família');
  guardaRadioSelecionado(nota, 'Avaliação');

  localStorage.clear();
  form.innerHTML = '';
  form.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value}</p>`;
  form.innerHTML += `<p>Email: ${email.value}</p>`;
  form.innerHTML += `<p>Casa: ${casa.value}</p>`;
  // form.innerHTML += `<p>Família: ${localStorage.getItem('Família')}</p>`;
  form.innerHTML += `<p>${guardaCheckboxSelecionado(skills, 'Matérias')}</p>`;
  // form.innerHTML += `<p>Avaliação: ${localStorage.getItem('Avaliação')}</p>`;
  form.innerHTML += `<p>Observações: ${texto.value}</p>`;
});
