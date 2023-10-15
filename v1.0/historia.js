console.log('Tu historia comienza.')

import {Enano} from "./enano.js"
import {Elfo} from "./elfo.js"
import {Hobbit} from "./hobbit.js"
import {Orco} from "./orco.js"
import {Humano} from "./humano.js"
import {Protagonista} from "./protagonista.js"
import {Troll} from "./troll.js"
import {Escena} from "./escena.js"
import {especializacion,localizaciones,tiposelfo,dialogos } from "./recursos.js";


const escena1 = new Escena(localizaciones[0],dialogos.escena1)
console.log(escena1)


let bilbo = new Protagonista("Bilbo",especializacion[3],"Peludito")
console.log(bilbo)

let gandalf = new Humano("Gandalf",especializacion[0],"Ambulante") 
console.log(gandalf)

let thorin = new Enano("Thorin",especializacion[1],"Moreno") 
console.log(thorin)

let dwalin = new Humano("Dwalin",especializacion[1],"Moreno")
console.log(dwalin)

let fili = new Humano("Fili",especializacion[2],"Rubia")
console.log(fili)

let kili = new Humano("Kili",especializacion[1],"Morena")
console.log(kili)

let balin = new Enano("Balin",especializacion[3],"Blanca")
console.log(balin)

let azog = new Orco("Azog el Profanador",especializacion[1],5)
console.log(azog)

let elrond = new Elfo("Elrond",especializacion[1],tiposelfo[0])
console.log(elrond)

let galadriel = new Elfo ("Galadriel",especializacion[0],tiposelfo[2])
console.log(galadriel)