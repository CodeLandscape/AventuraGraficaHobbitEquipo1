console.log('Tu historia comienza.')

import {Enano} from "./enano.js"
import {Elfo} from "./elfo.js"
import {Hobbit} from "./hobbit.js"
import {Orco} from "./orco.js"
import {Humano} from "./humano.js"
import {Protagonista} from "./protagonista.js"
import {Troll} from "./troll.js"
import {Escena} from "./escena.js"
import {especializacion,dialogos,tiposelfo,localizaciones,fondos} from "./content.js"


let botonReset = document.getElementById("reset")
botonReset.onclick=acabarPartida

let botonmid = document.getElementById('mid')
botonmid.onclick=iniciarJuego

let botonderecha = document.getElementById('right')


let botonizquierda = document.getElementById("left")

//ESCENAS
let escena1 = new Escena(localizaciones[0],dialogos.escena1,fondos.fondo1)
let escena11 = new Escena(localizaciones[0],"Has decidido quedarte en la comodidad de tu casa. La cama está muy calentita y es hora de la tercera merienda. Se acaba tu partida.",fondos.fondo1)
let escena12 = new Escena(localizaciones[0],"Has decidido unirte a la compañia de los enanos. Un escalofrio recorrer tu espalda, y ni siquiera sabes por que has dicho que si. Lo que tienes por seguro, es que te espera por delante una gran aventura. Opcion A= Ir a troles. Opcion B = Ir a cueva.",fondos.fondo1)
let escena2 = new Escena(localizaciones[1],dialogos.escena2,fondos.fondo2)
let escena3 = new Escena(localizaciones[2],dialogos.escena3,fondos.fondo3)

//PERSONAJES
let gandalf = new Humano("Gandalf",especializacion[0],"Ambulante") 
let thorin = new Enano("Thorin",especializacion[1],"Moreno") 
let dwalin = new Humano("Dwalin",especializacion[1],"Moreno")
let fili = new Humano("Fili",especializacion[2],"Rubia")
let kili = new Humano("Kili",especializacion[1],"Morena")
let balin = new Enano("Balin",especializacion[3],"Blanca")
let azog = new Orco("Azog el Profanador",especializacion[1],5)
let elrond = new Elfo("Elrond",especializacion[1],tiposelfo[0])
let galadriel = new Elfo ("Galadriel",especializacion[0],tiposelfo[2])



let bilbo = new Protagonista("Bilbo",especializacion[3],"Peludito")

function iniciarJuego()
{
    botonmid.style.display='none'
    botonderecha.style.display='block'
    botonizquierda.style.display='block'
    historia()
}

function historia(){
    escena1.iniciarEscena()
    gandalf.hablar("Qué te parece Bilbo, ¿estás dispuesto a unirte a la compañía?")
    thorin.hablar("Es cierto que necesitamos a alguien silencioso...")
    bilbo.hablar("No estoy seguro... ¿Qué debería de hacer?")

    botonizquierda.addEventListener('click', function() {
        escena11.iniciarEscena()
        acabarPartida();
    });

    botonderecha.addEventListener('click', function() {
        escena12.iniciarEscena()

        botonizquierda.addEventListener('click', function() {
            escena2.iniciarEscena()
        });

        botonderecha.addEventListener('click', function() {
            escena3.iniciarEscena()
        });
    });

}

function acabarPartida(){
    botonderecha.style.display='none'
    botonizquierda.style.display='none'
    botonReset.style.display='block'
}