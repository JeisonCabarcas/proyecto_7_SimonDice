const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
    constructor() {
        this.inicializar()
        this.azarColor()
        this.nexxtLevel()
    }

    inicializar() {
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    azarColor() {
        this.azar = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }
    nextLevel() {
        this.iluminarSecuencia()
    }
    iluminarSecuencia() {

    }
}

function empezarJuego() {

    window.juego = new Juego()
}