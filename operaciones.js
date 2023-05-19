const fs = require("fs");

/* // Nombre del animal, Edad, Tipo de animal, Color del animal, Enfermedad
const nombreAnimal = argumentos[0];
const edadAnimal = argumentos[1];
const tipoAnimal = argumentos[2];
const colorAnimal = argumentos[3];
const enfermedadAnimal = argumentos[4]; */

const addDate = (
  nombreAnimal,
  edadAnimal,
  tipoAnimal,
  colorAnimal,
  enfermedadAnimal
) => {
  if (
    nombreAnimal === undefined ||
    edadAnimal === undefined ||
    tipoAnimal === undefined ||
    colorAnimal === undefined ||
    enfermedadAnimal === undefined
  ) {
    console.log(
      "Todos los campos son obligatorios. Ej: Nombre del animal, Edad, Tipo de animal, Color del animal, Enfermedad"
    );
  } else {
    const citasJSON = JSON.parse(fs.readFileSync("citas.json", "utf8"));
    citasJSON.push({
      nombre: nombreAnimal,
      edad: edadAnimal,
      tipo: tipoAnimal,
      color: colorAnimal,
      enfermedad: enfermedadAnimal,
    });
    fs.writeFileSync("citas.json", JSON.stringify(citasJSON));
    console.log("Cita agregada");
  }
};

const readDateList = () => {
  console.log(JSON.parse(fs.readFileSync("citas.json", "utf8")));
};

module.exports = { addDate, readDateList };
