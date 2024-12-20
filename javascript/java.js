const bot = "30"

let respuestaBot = prompt ("Demuestra que no eres un robot. Cuanto es 20 + 30 - 10*2")

while (respuestaBot != bot){
    respuesta = prompt ("Respuesta incorrecta, vuelva a intentarlo")
} 
if (respuestaBot = bot){
    console.log ("Felicidades, no eres un robot!")
}

let edad = prompt ("¿Cual es tu edad?")

let lugar = prompt ("¿Te gustaria ir a la playa, a un lugar historico, a un parque de atracciones o salir de joda?")

if(edad <= 18 && lugar == "parque de atracciones"){
    console.log("Te va a encantar Estados Unidos!");
} else if (edad >= 18 && lugar == "la playa"){
    console.log("Te va a encantar Argentina!")
} else if (edad >= 25 && lugar == "lugar historico"){
    console.log ("Te va a encantar Italia!")
}else if (edad >= 20 && lugar == "salir de joda"){
    console.log ("Te va a encantar España!")
}else if (edad >= 30 && lugar == "lugar historico"){
    console.log ("Te va a encantar Egipto!")
}else if (edad >= 22 && lugar == "lugar historico"){
    console.log ("Te va a encantar Alemania!")
} else {
    console.log ("Cualquiera de nuestras opciones te van a encantar!")
}