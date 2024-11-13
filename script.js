
//Contagem do tempo do post
let intervalo;
let meusPosts = [];

function contagem(post) {
  post.milisegundos = 0;
  post.segundos = 0;
  post.minutos = 0;

  intervalo = setInterval(() => {
    post.milisegundos += 10;
    if (post.milisegundos >= 1000) {
      post.segundos++;
      post.milisegundos = 0;
    }

    if (post.segundos >= 60) {
      post.minutos++;
      post.segundos = 0;
    }

    postarPost(); 
  }, 10);
}

// Postar Post
const button = document.querySelector('.postar');
const input = document.querySelector('.postar-post');
const postsMenu = document.querySelector('.novosPosts');

function pegarPost() {
  const post = {
    mensagem: input.value,
    milisegundos: 0,
    segundos: 0,
    minutos: 0
  };
  meusPosts.unshift(post);
  
  input.value = '';

  contagem(post); 
  postarPost();
}

function postarPost() {
  let novoPost = '';

  meusPosts.forEach(post => {
    let tempoPassado = `${post.segundos}s`;
    if (post.minutos > 0) {
      tempoPassado = `${post.minutos}min`;
    }

    novoPost += `
      <div class="post">
        <div class="user">
          <img src="img/hoshi.jpg" alt="foto usuário">
          <p>
            Hoshi <span class="username"> &#64;Kwon_Hoshi ${tempoPassado}</span> 
          </p>
        </div>
        <p class="mensagem">${post.mensagem}</p>
      </div>
    `;
  });

  postsMenu.innerHTML = novoPost;
}

button.addEventListener('click', pegarPost);


//Animação
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const elementos = document.querySelectorAll('.hidden');

elementos.forEach((elemento) => myObserver.observe(elemento));

