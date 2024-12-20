const bot = "30"

let respuestaBot = prompt ("Demuestra que no eres un robot. Cuanto es 20 + 30 - 10*2")

while (respuestaBot != bot){
    respuesta = alert ("Respuesta incorrecta, reinicia la pagina")
} 
if (respuestaBot == bot){
    console.log ("Felicidades, no eres un robot!")
}

let edad = prompt ("¿Cual es tu edad?")

let lugar = prompt ("¿Te gustaria ir a la playa, a un lugar historico, a un parque de atracciones o salir de fiesta? Escribe 1 para playa, 2 para lugar historico, 3 para parque de atracciones o 4 para salir de fiesta")

let idioma = prompt ("¿Te gustaria hablar aleman, italiano, ingles o español de viaje")

/*
1 = playa
2= lugar historico
3= parque de atracciones
4= salir de fiesta
*/

if(edad >= 6 && edad <= 18  && lugar == "3" && idioma == "ingles"){
    console.log("Te va a encantar Estados Unidos!");
} else if (edad >= 18 && edad <= 60 && lugar == "1" && idioma == "español"){
    console.log("Te va a encantar Argentina!")
} else if (edad >= 25 && edad <= 50 && lugar == "2" && idioma == "italiano"){
    console.log ("Te va a encantar Italia!")
}else if (edad >= 20 && edad <= 25 && lugar == "4" && idioma == "italiano"){
    console.log ("Te va a encantar España!")
}else if (edad >= 30 && lugar == "2" && idioma == "ingles"){
    console.log ("Te va a encantar Egipto!")
}else if (edad >= 22 && edad <= 50 && lugar == "2" && idioma == "aleman"){
    console.log ("Te va a encantar Alemania!")
} else {
    console.log ("Cualquiera de nuestras opciones te van a encantar!")
}

const alemania = {
    country: "Alemania",
    place: "Europa",
    language: "aleman",
    estacion: "invierno",
    edadRecomendada: "20"
};

const eeuu = {
    country: "Estados Unidos",
    place: "Norteamerica",
    language: "ingles",
    estacion: "verano",
    edadRecomendada: "15"
};

const españa = {
    country: "España",
    place: "Europa",
    language: "español",
    estacion: "invierno",
    edadRecomendada: "18"
};

const italia = {
    country: "Italia",
    place: "Europa",
    language: "italiano",
    estacion: "invierno",
    edadRecomendada: "25"
};

const argentina = {
    country: "Argentina",
    place: "Sudamerica",
    language: "español",
    estacion: "invierno",
    edadRecomendada: "30"
};

const egipto = {
    country: "Egipto",
    place: "Africa",
    language: "ingles",
    estacion: "verano",
    edadRecomendada: "30"
};

const paises = [
    "Argentina", "Alemania", "Egipto", "Estados Unidos", "España", "italia"
];
