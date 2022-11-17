
    class Usuario {
        constructor(nombre, apellido) {
            
            this.nombre = nombre;
            this.apellido = apellido;

            this.mascotas = [];
            /* this.libros = []; */
            
            
        }

        /* getFullName(){
            return `Nombre Comleto: ${this.nombre}  ${this.apellido}`
            
        } */
            
        addMascota(mascota) {
            this.mascotas.push(mascota);
        }
       
        /* addBook(nuevoLibro) {
            
            this.libros  = nuevoLibro;
  
        } */
  
        /* getBooksName() {
               
            return  this.libros.map(item => item.nombre);
        } */
              
            
    }
  
        
    

    const usuario1 = new Usuario('william','cruz'/*, [{nombre:'laberinto',autor: 'sasa'}, {nombre:'quijote',autor: 'dodo'}, {nombre:'La Maria',autor:'casa'}],'loro', 'gato', 'perro' */);


    usuario1.addMascota("vaca");


    /* console.log(usuario1.getFullName());
    console.log(usuario1.getBooksName()); */

    /* nuevoLibro ={nombre:'carapita', autor:'loca'}
    console.log(nuevoLibro); */
    /* console.log(usuario1.libros); */
    

   

