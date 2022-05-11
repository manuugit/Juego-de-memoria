let iconos = []
let selecciones = []
let cantidadTarjetas = 24;

function cargarIconos() {
    iconos = [
        '<img src="img/smartphone.png" width="30%">',
        '<img src="img/bluetooth.png" width="30%">',
        '<img src="img/database.png" width="30%">',
        '<img src="img/html.png" width="30%">',
        '<img src="img/java.png" width="30%">',
        '<img src="img/network-server.png" width="30%">',
        '<img src="img/ordenador-personal.png" width="30%">',
        '<img src="img/programming.png" width="30%">',
        '<img src="img/python.png" width="30%">',
        '<img src="img/router-de-wifi.png" width="30%">',
        '<img src="img/servidor.png" width="30%">',
        '<img src="img/wifi.png" width="30%">',
    ]
}

function generarTablero() {
    let icono = document.getElementById("icono-principal");
    icono.classList.add("hide");
    let titulo = document.getElementById("titulo");
    titulo.classList.add("hide");
    let boton = document.getElementById("nuevo-juego");
    boton.classList.add("mostrar");
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < cantidadTarjetas; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "#D4FFAD"
            trasera2.style.background = "#D4FFAD"
        }

        if(validarFinJuego()){
            //mostrar mensaje
            alert("¡Muy bien! Terminó el juego")
        }
    }, 1000);

}

function validarFinJuego(){
    for (let i=0; i< cantidadTarjetas; i++){
        let ttrasera = document.getElementById("trasera"+i);
        if (ttrasera.style.background != "plum"){
            return false;
        }
    }
    return true;
}