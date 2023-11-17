let animacion = setInterval(cambiar_imagen, 50);
let animacion_cohete = setInterval(cambiar_imagen_cohete, 50);
let num_imagen = 1;
let num_imagen_cohete = 1;
let shante = document.getElementById("shante");
let cohete = document.getElementById("cohete");
let x = 0;
let y = 0;

let velocidad = 10;

function cambiar_imagen() {
    num_imagen = num_imagen + 1;
    let direc;
    if (num_imagen > 15) {
        num_imagen = 1;
    }
    direc = "img/shante/Shante_" + num_imagen + ".png";
    shante.setAttribute("src", direc);
}

function cambiar_imagen_cohete() {
    num_imagen_cohete = num_imagen_cohete + 1;
    let direc;
    if (num_imagen_cohete > 4) {
        num_imagen_cohete = 1;
    }
    direc = "img/HannyahNED/Cohete_" + num_imagen_cohete + ".png";
    cohete.setAttribute("src", direc);
}

document.addEventListener("keydown", mover);

function mover(event) {
    console.log("x", x);
    console.log("y", y);
    switch (event.keyCode) {
        case 68: // D 'Derecha'
            x = x + velocidad;
            break;
        case 65: // A 'Izquierda'
            x = x - velocidad;
            break;
        case 87: // W 'Arriba'
            y = y - velocidad;
            break;
        case 83: // S 'Abajo'
            y = y + velocidad;
            break;
        case 69: // E 'Disparo'
            disparo_cohete();
            break;
        default:
            console.log("Presione A, S, D, W, E");
    }
    if (y > screen.height - 300) y = screen.height - 300;
    if (x > screen.width - 150) x = screen.width - 150;
    if (y < 0) y = 0;
    if (x < 0) x = 0;
    shante.style.left = x + "px";
    shante.style.top = y + "px";
}

function disparo_cohete() {
    console.log("disparo", x,y);
    let x_cohete = x + 100;
    let y_cohete = y + 100;
    cohete.style.display = "block"
    cohete.style.left = x_cohete + "px";
    cohete.style.top = y_cohete + "px";
    let animacion_disparo = setInterval(function () {
        x_cohete = x_cohete + 40;
        x_cohete = x_cohete + 40;
        cohete.style.left = x_cohete + "px";
        cohete.style.top = y_cohete + "px";
        if (x_cohete > screen.width - 200) {
            clearInterval(animacion_disparo);
            cohete.style.display = "none";
        }
    }, 100);
    
}
