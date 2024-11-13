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