
const elementos = document.querySelectorAll<HTMLElement>(
    ".projetos, .habilidades, .contato, .rodape"
);

const observador = new IntersectionObserver(
    (entradas: IntersectionObserverEntry[]) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {
    elemento.classList.add("aparecer");
    observador.observe(elemento);
});
