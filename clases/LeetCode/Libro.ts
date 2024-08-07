class Libro{
    titulo : string
    autor : string
    ISBN : string
    disponible : boolean

    constructor(
        titulo : string,
        autor : string,
        ISBN : string,
        disponible : boolean
    ){
        this.titulo = titulo;
        this.autor = autor;
        this.ISBN = ISBN;
        this.disponible = disponible
    }
}

class Biblioteca {
    libros : Libro[]

    agregarLibro(libro : Libro) : void{

        this.libros.push(libro)
    }

    buscarLibro(titulo : string): Libro | null{
      return  this.libros.find(libro => libro.titulo === titulo) || null

    }
}

