# Prueba Técnica

## Autor:

Estefany Yurani Tulcan Diaz

estefanydiaz1104@gmail.com

# Nota:

Para ejecutar los test es necesario ejecutar el npm install

# Explicación de ejercicios

## Ejercicio 1:

Inicialmente lo pense hacer por un for pero ya que el for of y el for normal tienen
eficiencia muy similar, decidí usar el for of y evitar hacer un if por cada iteración usando el operador ||= , que lo que hace es inicializar si no existe y si existe hace el push del elemento.

## Ejercicio 2:

Primero validamos que la cadena de texto no este vacia, luego se crea un Set para guardar palabras unicas, para despues quitar a la cadena de texto los espaciados en blanco al inicio y al final del texto, luego se divide la cadena en un array de palabras, para posteriormente filtrar este array, aquí primero se convierte la palabra a minúsculas, se valida si la palabra ya existe en el set, luego se agrega la palabra al set y se devuelve true si la palabra no estaba en el set
finalmente con el join unimos las palabras filtradas en una sola cadena.

## Ejercicio 3:

Se convierte las cadenas de texto en tipo Date, luego mediante la funcion getTime traemos en milisegundos la fecha del objeto Date y calculamos la diferencia entre las dos fechas, todo esto en milisegundos.
Finalmente como un dia tiene 86400000, hacemos el calculo matemático dividiendo el resultado entre las fechas entre 86400000 milisegundos que tiene un día y redondeamos este valor con Math.floor

## Ejercicio 4:

En la función fecthCats se hace la petición al endpoint, se hace uso de el bloque try/cacth para manejar la petición en caso de falla.
En la función filterCats traemos la data de la petición anterior, luego hacemos el ordenamiento donde se devuelve true si el pattern del item es mayor al pattern del cat actual, aquí busca el primer elemento en orderCats que tenga un pattern mayor que el actual, si no se encuentra devuelve -1 y si se encuentra devuelve el indice correspondiente.

Luego si es -1 el gato va al final de la lista y si no entonces, el gato actual se inserta en la posición que se encontro.
