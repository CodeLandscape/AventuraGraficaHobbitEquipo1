export class Personaje{

    #nombre = null
    #clase= null

    constructor(nombre,clase = null){
        this.#nombre= nombre
        this.#clase = clase
      }

    hablar(texto)
    {
        let textoV2=this.#nombre+": "+texto+"<br>"
        document.getElementById("historia").innerHTML += textoV2
    }

}