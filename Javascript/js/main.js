DefinicionOperadoreslogicos="Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelve un valor booleano. Sin embargo, los operadores && y ||en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano. Los operadores lógicos se describen en la siguiente tabla."

And = "&&"
//cuando por ejemplo queremos colocar más de un condicional en un if con este operador se deben cumplir ambas (thefirst AND the second) condiciones para que arroge true y se ejecute, basta con que uno solo de sus valores no sea verdadero para que arroje false.
console.log(7<8&&6<7)
console.log(7>8&&6<7)
console.log(7<8&&6>7)
console.log(7>8&&6>7)

Or= "||"
//a diferencia del anterior con que uno solo de sus valores sea verdadero(thefirst OR thesecond), arroja true.
console.log(7<8||6<7)
console.log(7>8||6<7)
console.log(7<8||6>7)
console.log(7>8||6>7)

Not="!"
//como ya explique ! vuelve false en true y true en false, es decir devuelve el lo opuesto a lo que es añadido.
console.log(!false)
console.log(!3==3)