let iconos = []
let selecciones = []
let cantidadTarjetas = 24;

function cargarIconos() {
    iconos = [
        '<img src="img/smartphone.png" width="50%">',
        '<img src="img/bluetooth.png" width="50%">',
        '<img src="img/database.png" width="50%">',
        '<img src="img/html.png" width="50%">',
        '<img src="img/java.png" width="50%">',
        '<img src="img/network-server.png" width="50%">',
        '<img src="img/ordenador-personal.png" width="50%">',
        '<img src="img/programming.png" width="50%">',
        '<img src="img/python.png" width="50%">',
        '<img src="img/router-de-wifi.png" width="50%">',
        '<img src="img/servidor.png" width="50%">',
        '<img src="img/wifi.png" width="50%">',
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
            trasera1.style.background = "#b6fffc"
            trasera2.style.background = "#b6fffc"
        }

        if(validarFinJuego()){
            //mostrar mensaje
            if(localStorage.getItem("record") == null){
                localStorage.setItem("record", 0);
            }
            let rec = localStorage.getItem("record");
            let numrec = Number(rec) + 1;
            localStorage.setItem("record", numrec);
            alert("¡Muy bien! Terminó el juego \nNuevo Record!")
        }
    }, 1000);

}

function validarFinJuego(){
    for (let i=0; i< cantidadTarjetas; i++){
        let ttrasera = document.getElementById("trasera"+i);
        console.log(ttrasera);
        if (ttrasera.style.background != "rgb(182, 255, 252)"){
            return false;
        }
    }
    return true;
}

function verRecord(){
    if(localStorage.getItem("record") == null){
        localStorage.setItem("record", 0);
        alert("Record: 0");
    }
    else{
        let rec = localStorage.getItem("record");
        alert("Record: "+ rec + "!")
    }

}