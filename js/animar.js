// ANIMAÇÕES AION

const elementosAnimados = document.querySelectorAll("[data-anime]");

function iniciarAnimacoes() {

  // Respeita usuários que preferem menos animação
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elementosAnimados.forEach((elemento) => {
      elemento.classList.add("anime-ativo");
    });

    return;
  }


  const observer = new IntersectionObserver(
    (entradas) => {

      entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

          const elemento = entrada.target;

          const delay = elemento.dataset.anime || 0;

          elemento.style.transitionDelay = `${delay}ms`;

          elemento.classList.add("anime-ativo");

          observer.unobserve(elemento);
        }

      });

    },
    {
      threshold: 0.15
    }
  );


  elementosAnimados.forEach((elemento) => {
    observer.observe(elemento);
  });

}

iniciarAnimacoes();