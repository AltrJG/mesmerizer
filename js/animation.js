function animacion() {
    let textoAnimado = [
        ["C","a","r","p","e"," ","d","i","e","m"],
        ["T","e","m","p","u","s"," ","f","u","g","i","t"],
        ["M","e","m","e","n","t","o"," ","m","o","r","i"],
    ];

    let letraContador = -1;
    let nivelArray = 0;

    const contenedorAnimacion = document.querySelector(".header__title");

    function animarTexto() {
        letraContador++;
        
        let filler = ">" + textoAnimado[nivelArray].slice(0, letraContador + 1).join("");
        contenedorAnimacion.textContent = filler;

        if (letraContador === textoAnimado[nivelArray].length - 1) {
            clearInterval(intervalo);

            setTimeout(() => {
                intervalo = setInterval(() => {
                    contenedorAnimacion.textContent = "";
                    letraContador--;
                    textoAnimado[nivelArray].pop();

                    let filler = ">" + textoAnimado[nivelArray].slice(0, letraContador + 1).join("");
                    contenedorAnimacion.textContent = filler;

                    if (letraContador < 0) {
                        clearInterval(intervalo);
                        nivelArray++;
                        intervalo = setInterval(animarTexto, 150);

                        if (nivelArray > textoAnimado.length - 1) {
                            clearInterval(intervalo);
                            nivelArray = 0;
                            animacion();
                        }
                    }
                }, 150);
            }, 1000);
        }
    }

    let intervalo = setInterval(animarTexto, 150);
}

window.addEventListener("load", animacion);