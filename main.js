const resultInput = document.getElementById('result');
let result = '';

//!Funcion para añadir el valor del boton presionado
function appendValue(value){
    result += value;
    resultInput.value = result;
}

//?Funcion para borrar el ultimo caracter del resultado
function deleteLastCharacter(){
    result = result.slice(0, -1);
    resultInput.value = result;
}

//* Funcion para limpiar el resultado
function clearResult(){
    result = '';
    resultInput.value = result;
}

//!Funcion para calcular los resultados y almacenar en LocalStorage
function calculate(){
    try {
        const calculatedResult = eval(result)
        result = calculatedResult.toString();
        resultInput.value = result;

        localStorage.setItem('calculatedResult' , result)
    } catch (error) {
        resultInput.value = "Error"
    }
}