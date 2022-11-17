class Usuario {
    constructor(nombre, apellido, libros) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = [];
        
        
        
    }
    getFullName(){
        return `Nombre Comleto: ${this.nombre}  ${this.apellido}`
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascota() {
        return Object.keys(usuario1.mascotas).length; 
         /* console.log(usario1); */
    }
    

    addBook(libro){
       this.libros.push(libro);
    }
    getBooksName() {
               
            return  ('Mis libros:', this.libros.map(item => item.nombre));
        }
}

const usuario1 = new Usuario("William", "Cruz",[{nombre:'laberinto',autor: 'sasa'}, {nombre:'quijote',autor: 'dodo'}, {nombre:'La Maria',autor:'casa'}]);

usuario1.addMascota(["vaca", "gallo"]);
usuario1.addBook({nombre: 'soledad', autor: 'Gabriel'});



console.log(usuario1.getFullName());
console.log("Mascota añadida:", usuario1.mascotas);
console.log("numero de mascotas:", usuario1.countMascota());

console.log("Libro añadido:", usuario1.libros);
console.log(usuario1.getBooksName());

