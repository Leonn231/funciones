function contarVocales(str) {
    // Convertir la cadena a minúsculas para facilitar la comparación 
    str = str.toLowerCase();
    
    let vocales = 0;
    // Iterar sobre cada carácter de la cadena 
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
    // Verificar si el carácter actual es una vocal
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            vocales++;
        }
    }
    // Devolver el recuento de vocales  
    return vocales;
}
    console.log(contarVocales("Hola")); // Output: 2
    console.log(contarVocales ("JavaScript")); // Output: 3
    console.log(contarVocales("xyz")); // Output: 0
    console.log(contarVocales("AeIoU")); // Output: 5
