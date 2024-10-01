//array para los nombres
let nombresPokemons=['charmander','Pikachu','Bulbasur','Squirtle'];

//matriz paras sus habilidades
let habilidades = [
    [80,75,90],//charmander
    [65,55,60],//pikachu
    [80,70,65],//bulbasur
    [85,90,70]//squirtle
];

//funcion que calcula el promedio
function calcularPromHab(habilidades) {
    let promedios = [];

    for (let i = 0; i<habilidades.length; i++) {
        let fila= habilidades[i];
        let suma = fila.reduce((total,habilidad)=>total+habilidad,0);
        promedios[i] = suma/fila.length;
    }

    return promedios;
    
}
//procedimiento que muestra la evaluacion
function evaluarAptitud(nombresPokemons,promedios) {
    for (let i = 0; i < habilidades.length; i++) {
        if (promedios[i]>=70) {
            console.log("El pokemon " +nombresPokemons[i]+
            " Supera el Promedio con: "+promedios[i]);
        } else {
            console.log("El pokemon " +nombresPokemons[i]+
            " NO Supera el Promedio con: "+promedios[i]);
        }
    }
}

let promedios = calcularPromHab(habilidades);
evaluarAptitud(nombresPokemons,promedios);
