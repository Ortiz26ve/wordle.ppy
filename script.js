let intentos = 6
let palabraSecreta = "APPLE"
let button = document.getElementById("guess-button")

button.addEventListener("click", intentar)

function intentar() {
    let input = document.getElementById("guess-input")

    let intento = input.value.touPPERcASE()


    console.log(intento)
}

let lista 
["A","P","P","L","E" ];

console.log(lista);

console.log(palabraSecreta);

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {

            terminar("<h1>GANASTE!😀</h1>") 
        return
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
		intentos--
    }if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")
    }
    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        BOTON.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }
   