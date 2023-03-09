DefinicionOperadoresComparacion="Un operador de comparación lleva a cabo una comparación entre sus operandos y devuelve un valor lógico según el resultado de la comparación si fue verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Casi siempre si los dos operandos no son del mismo tipo, JavaScript intenta dinámicamente convertirlos a un tipo apropiado para la comparación"
//Dados los siguientes números:
const primerOperando = 13
const segundOperando = "13"
const tercerOperando = 31
const cuartOperando = 13
// ==Devuelve true si los valores de los operandos son iguales y false si no lo son.
console.log(primerOperando==tercerOperando);
console.log(primerOperando==segundOperando);
console.log(primerOperando==cuartOperando);

//Devuelve true si los valores y el tipo de dato de los operandos son iguales y false si no lo son.
console.log(primerOperando===segundOperando)
console.log(primerOperando==cuartOperando)
// > < Devuelven true o false segun la operacion
console.log(primerOperando>tercerOperando)
console.log(primerOperando<tercerOperando)
console.log(primerOperando<cuartOperando)
console.log(primerOperando<=cuartOperando)

// ! vuelve false en true y true en false, es decir devuelve el lo opuesto a lo que es añadido. Tambien se puede usar para que en una igualdad si son iguales arroje false y si no lo son, en lugar de arrojar false de true, covirtiendose así en un operador de 'desigualdad'
console.log(primerOperando!=cuartOperando)
console.log(primerOperando==segundOperando);
console.log(primerOperando!==segundOperando);
// ! == es el contrario de === y no de ==, que es solo es !=.