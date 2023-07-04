/* En ese fichero tendrán que generar 4 funciones que reciben dos valores,
una será la que realice la suma, otra la resta, la multiplicación y la división.*/

// Crear 4 funciones: suma, resta, multiplicación y división
// Reciben dos valores y devuelve el resultado de la operación.

/**
* funcion que suma dos operadores
* @param op1 {number}
* @param op2 {number}
* @return op1 + op2 {number}
*/
function suma(op1, op2) {
    return op1 + op2;
}

/**
* funcion que resta entre dos operadores
* @param op1 {number}
* @param op2 {number}
* @return op1 - op2 {number}
*/
function resta(op1, op2) {
    return op1 - op2;
}

/**
* funcion que realiza el producto de dos operadores
* @param op1 {number}
* @param op2 {number}
* @return op1 * op2 {number}
*/
function producto(op1, op2) {
    return op1 * op2;
}

/**
* funcion que divide dos operadores
* @param op1 {number}
* @param op2 {number}
* @return op1 / op2 {number}
*/
function division(op1, op2) {
    return op1 / op2;
}

/**
* funcion que devuelve el resto de la división entre dos operadores
* @param op1 {number}
* @param op2 {number}
* @return op1 % op2 {number}
*/
function modulo(op1, op2) {
    return op1 % op2;
}

function obtenerResultado() {
    //Declaramos las variables.
    let valor1, valor2, operador, resultado, resto;

    //Asignamos los valores a las variables.
    valor1 = Number(document.getElementById("ope1").value);
    valor2 = Number(document.getElementById("ope2").value);
    operador = document.getElementById("operador").value;
    //Check por consola que se ha cargado bien los valores.
    console.log('valor1= ', valor1, ', valor2= ', valor2, ', operador: ', operador)

    //Check del operador para ejecutar la operación necesaria.
    switch (operador) {
        case "suma":
            resultado = suma(valor1, valor2)
            break;
        case "resta":
            resultado = resta(valor1, valor2)
            break;
        case "producto":
            resultado = producto(valor1, valor2)
            break;
        case "division":
            resultado = division(valor1, valor2)
            resultado = resultado.toFixed(2);
            resto = modulo(valor1, valor2)
            break;
    }
    
    //Escribo en el HTML el resultado obtenido en el elemento de HTML elegido.
    operador != "division" ? document.getElementById("resultado").innerHTML = resultado : document.getElementById("resultado").innerHTML = resultado + " y el resto ha sido: " + resto

    // Ternaria que si se cumple que el valor es positivo se muestra verde, si es 0 o negativo en rojo.
    resultado > 0 ? document.getElementById("resultado").style.color = 'green' : document.getElementById("resultado").style.color = 'red';
}

/**
 * Funcion que borra los datos insertados.
 * @return clear form and p html element.
 */
function limpiadatos() {
    document.getElementById("operadora").reset();
    document.getElementById("resultado").innerHTML = '';
    document.getElementById("resultado").style.removeProperty("color")
}