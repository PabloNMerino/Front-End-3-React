const jsonUsuarios = `[
    {
      "apodo": "Nepeta",
      "email": "nepetalover123@gmail.com",
      "mascotas": [
        { "nombre": "Luna", "edad": 3, "color": "blanco y negro" },
        { "nombre": "Simba", "edad": 1, "color": "naranja" },
        { "nombre": "Mia", "edad": 5, "color": "gris" }
      ]
    },
    {
      "apodo": "CatLady",
      "email": "catlady999@yahoo.com",
      "mascotas": [
        { "nombre": "Tom", "edad": 2, "color": "gris y blanco" },
        { "nombre": "Lucas", "edad": 4, "color": "negro" }
      ]
    },
    {
      "apodo": "GatitoFeliz",
      "email": "gatitofeliz22@hotmail.com",
      "mascotas": [
        { "nombre": "Cleo", "edad": 1, "color": "marrón" },
        { "nombre": "Toby", "edad": 6, "color": "blanco" },
        { "nombre": "Nina", "edad": 2, "color": "negro y blanco" }
      ]
    },
    {
      "apodo": "ElGatoNegro",
      "email": "elgatonegro@outlook.com",
      "mascotas": [
        { "nombre": "Oreo", "edad": 3, "color": "negro y blanco" },
        { "nombre": "Milo", "edad": 7, "color": "naranja" }
      ]
    },
    {
      "apodo": "GatitoTierno",
      "email": "gatitotierno5555@gmail.com",
      "mascotas": [
        { "nombre": "Pelusa", "edad": 2, "color": "gris" },
        { "nombre": "Kitty", "edad": 4, "color": "blanco y negro" },
        { "nombre": "Loki", "edad": 1, "color": "marrón y blanco" }
      ]
    },
    {
      "apodo": "CatQueen",
      "email": "catqueen8888@hotmail.com",
      "mascotas": [
        { "nombre": "Fluffy", "edad": 5, "color": "blanco y gris" },
        { "nombre": "Sasha", "edad": 2, "color": "marrón y blanco" }
      ]
    },
    {
      "apodo": "Nepeta",
      "email": "nepetaalegre7@yahoo.com",
      "mascotas": [
        { "nombre": "Punky", "edad": 3, "color": "naranja" },
        { "nombre": "Zoe", "edad": 1, "color": "blanco" },
        { "nombre": "Simón", "edad": 4, "color": "negro" }
      ]
    },
    {
      "apodo": "GatoMimoso",
      "email": "gatomimoso55@gmail.com",
      "mascotas": [
        { "nombre": "Leo", "edad": 2, "color": "blanco" },
        { "nombre": "Coco", "edad": 3, "color": "negro y blanco" }
      ]
    }
  ]
`;

const objUsuarios = JSON.parse(jsonUsuarios);


/* EJERCICIO 1
Muestra por consola:

el id del primer Usuario
el nombre del tercer Usuario
el color de la segunda mascota del tercer Usuario
-------------------------------------------------

console.log(objUsuarios[0].apodo);
console.log(`-----------`);
console.log(objUsuarios[2].apodo);
console.log(`-----------`);
console.log(objUsuarios[2].mascotas[1].nombre);
*/


/* EJERCICIO 2
Usando desestructuracion:

extrae en variables el primer y cuarto elemento
usando lo obtenido arriba extrae en variables email y mascotas del primer elemento
-------------------------------------------------


const [primerUsuario, , , cuartoUsuario] = objUsuarios;

const {email, mascotas} = primerUsuario;
console.log(email);
console.log(mascotas);
*/


/* EJERCICIO 3
spread operator:

haz una copia de las mascotas obtenidas arriba y agregale la mascota { "nombre": "Nami", "edad": 2, "color": "negro" } 
(usar console log para mostrar que no se modifico el original) 
-------------------------------------------------

const nuevaMascota = { 
                        nombre: "Nami",
                        edad: 2,
                        color: "negro"
                    }

const mascotasExtendidas = [...mascotas, nuevaMascota]

console.log(mascotasExtendidas);
*/


/*
EJERCICIO 4
crea una funcion que reciba por props un objeto con las siguientes keys: name, 
cantMascotas y que retorne un string con el siguiente formato "El Usuario {name} tiene {cantMascotas} mascotas"
-------------------------------------------------

const determinarCantidadDeMascotas = arrayUsuario => {
  return`El Usuario ${arrayUsuario.name} tiene ${arrayUsuario.cantMascotas} mascotas`;
}

const primerUsuarioArray = {
                              name: primerUsuario.apodo,
                              cantMascotas: primerUsuario.mascotas.length
                            }

console.log(determinarCantidadDeMascotas(primerUsuarioArray));
*/


/*
EJERCICIO 5
usando la operacion filter, crea un array con los Usuarios que tengan mas de 1 mascota
usando la operacion map y la funcion anterior, crea un array de strings con el nombre y la cantidad de mascotas de cada Usuario filtrado anteriormente Ej:
[
  "El Usuario Gaby tiene 3 mascotas",
  "El Usuario Morgi tiene 5 mascotas"
]
Usando la operacion reduce devuelve la cantidad total de mascotas
-------------------------------------------------

const usariosConMasDeUnaMascota = objUsuarios.filter(usuario => usuario.mascotas.length > 1)

const usariosConMasDeUnaMascotasString = usariosConMasDeUnaMascota.map(usuario => `El usuario ${usuario.apodo} tiene ${usuario.mascotas.length} mascotas`);

const cantidadDeMascotasPorUsuario = usariosConMasDeUnaMascota.map(usuario => usuario.mascotas.length);

const sumMascotas = cantidadDeMascotasPorUsuario.reduce((acc, num) => acc+num)

console.log(sumMascotas);
*/
