const button = document.querySelector('.enviar-mensagem') 
const input = document.querySelector('.mensagem')
const chat = document.querySelector('.novasMsg')

let minhasMsg = []

function pegarMensagem() {
  minhasMsg.push(input.value)
  
  input.value = ''

  mandarMsg()
}

function mandarMsg() {
  let novaMsg = ''

  minhasMsg.forEach(mensagem => {
    novaMsg += `
      <p class="message usuario_message">${mensagem}</p>
    `
  })

  chat.innerHTML = novaMsg
}

button.addEventListener('click', pegarMensagem)


//ANIMAÇÂO

const myObserver = new IntersectionObserver((entries) =>{
  console.log(entries)
})

myObserver.observe(lastOne)