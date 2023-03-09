//twelfth method
substrmethod="fEl método substring(start, end) devuelve un  con el fragmento de texto desde la posición start hasta la posición end. Si se omite el parámetro end, el subtexto abarcará desde start hasta el final. El método substr(start, size) devuelve un  con el fragmento de texto desde la posición start, hasta la posición start+size. Dicho de otra forma, size será el tamaño del  resultante. En el caso de omitirse el parámetro size, se devuelve hasta el final."
console.log(substrmethod.substr('a', 36))
//another example
const text = "Submarino";

console.log(text.substring(3));    // 'marino' (desde el 3 en adelante)
console.log(text.substring(3, 5)); // 'ma'     (desde el 3, hasta el 5)
console.log(text.substr(3));      // 'marino' (desde el 3 en adelante)
console.log(text.substr('a', 5));    // 'marin'  (desde el 3, hasta el 3+5)
console.log(text.substr(-3));      // 'ino'    (desde la posición 3 desde el final, en adelante)
console.log(text.substr(-3, 2));   // 'in'     (desde la posición 3 desde el final, hasta 2 posiciones más)