//Se usa ECMSCRIPT en este caso, la última versión de Javascript
const grid = new Muuri('.grid',{
    layout: {
        rounding: false
      }
});
// En ecmscript esto () => {} es una funcion
window.addEventListener('load', () => {
    //esto es para refrescar los elementos de la grid para que acomode el tamaño correctamente
    grid.refreshItems().layout();
    //con esta funcion le agregamos una clase al section del grid
    document.getElementById('grid').classList.add('img-cargadas');
    //es para que cuando se carguen todas las imagenes, con una transicion
    //aaparezcan todas juntas a la vez con un cambio en la opacidad

    //acceder a los enlaces de filtrado
    const enlaces = document.querySelectorAll('#categorias a');
    //trae todos los enlaces que pertenecen al id="categorias" y
    //los almacena en esta variable
    enlaces.forEach( (elemento) => {
        //console.log(elemento);
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            //es para prevenir comportamiento por defecto,en este caso, 
            //elimina el # en el https al hacer click en un enlace
            
            //console.log(evento.target);
            //es para conocer al enlace que se le ha echo click

            enlaces.forEach((enlace) => enlace.classList.remove('active'));
            //enlaces = tenemos una lista de enlaces
            //forEach(enlace) por cada enlace quier que me ejecutes la siguiente funcion
            //enlace.classList = quiero que accedas a su lista de clase y
            //remueve la clase activo en el enlace que lo tenga

            evento.target.classList.add('active');
            //evento.target = encontramos el link clickeado
            //classList.add('active') = le agregamos la clase "active"
            
            const categoria = evento.target.innerHTML.toLowerCase();
            //vamos a guardar las categorias dentro de esta variable
            //evento.target es acceder al elemento que fue clickeado
            //innerHTML accedemos al codigo dentro del enlace
            
            //console.log(categoria);
            

            //esto es un condicional if en ECMScript ===
            //si la categoria es igual a todos quiero que me ejecutes lo que sigue del ?
            //los : significa "sino" -> si categoria NO es IGUAL a todos ejecutar el codigo despues de :
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
            //toda esta linea de codigo es un condicional if en una sola linea de codigo
            
            


        });
        //le vamos a decir que al hacer un click en algun enlace le quite
        //la clase="active" al enlace que la tenga, y se la agregue al enlace del click
    });
    //con esto podemos pasarles una funcion a los enlaces guardados en esta variable
    //esta funcion quiere decir que "por cada uno de los enlaces quiero que me
    //ejecutes el codigo de la funcion "
    
});



