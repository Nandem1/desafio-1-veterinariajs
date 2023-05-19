const { addDate, readDateList } = require("./operaciones.js");

const argumentos = process.argv.slice(2);
// Accion, Nombre del animal, Edad, Tipo de animal, Color del animal, Enfermedad
const accion = argumentos[0];
const nombreAnimal = argumentos[1];
const edadAnimal = argumentos[2];
const tipoAnimal = argumentos[3];
const colorAnimal = argumentos[4];
const enfermedadAnimal = argumentos[5];
// Primero verifica la accion registrar o leer, en registrar precisamente pasa por una validacion, si o si deben estar todos los parametros
if (accion === "registrar") {
  addDate(nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedadAnimal);
} else if (accion === "leer") {
  readDateList();
}