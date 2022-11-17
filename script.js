let nombre = 'Pepe';
let edad = 25;
let precio = 99.9;

const seriesFavoritas ={ serie1: 'Darck', serie2: 'Mr Robot', serie3: 'Castelvania'};


const peliculasFavoritas =[
    {Pelicula: 'Rapidos y Furiosos', 
     Estreno: 2001,
     Actores: ['Vin Dicel', 'pepito','juanito']},
    {Pelicula: 'La Mascara', 
     Estreno: 1998,
     Actores: 'Jim Caerrey'},
    {Pelicula: 'Duro de Matar', 
     Estreno: 1992,
     Actores: 'Bruce Willis'}

];

console.log('Nombre:', nombre);
console.log('Edad:', edad);
console.log('Precio:', precio);
console.log('Series Favoritas:', seriesFavoritas);
console.log('Peliculas Favoritas:', peliculasFavoritas);

edad++;
console.log('Edad Aumentada:', edad);

edad--;
console.log('Edad decrementada:', edad);


/* seriesFavoritas.push('Cosmos');
console.log('Nuevo array series:', seriesFavoritas); */