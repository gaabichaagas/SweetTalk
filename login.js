document.getElementById('botao-login').addEventListener('click', function() {
  const nomeDigitado = document.getElementById('nomeDigitado').value.trim();
  const userDigitado = document.getElementById('userDigitado').value.trim();
  const senhaDigitada = document.getElementById('senhaDigitada').value.trim();
  const dataNascimento = document.getElementById('dataNascimento').value;

  if (nomeDigitado === "" || userDigitado === "" || senhaDigitada === "" || dataNascimento === "") {
    alert('Todos os campos devem ser preenchidos.');
    return;
  }

  const hoje = new Date();
  const dataNascimentoDate = new Date(dataNascimento);

  let idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
  const diferencaMeses = hoje.getMonth() - dataNascimentoDate.getMonth();

  if (diferencaMeses < 0 || (diferencaMeses === 0 && hoje.getDate() < dataNascimentoDate.getDate())) {
    idade--;
  }

  if (idade < 13) {
    alert('Você deve ter pelo menos 13 anos para entrar no SweetTalk.');
  } else {
    window.location.href = 'home.html';
  }
});



