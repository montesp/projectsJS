//Funciones cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

//Funciones triangulo
function perimetroTriangulo(lado1, lado2, lado3) {
    // lado1 = parseInt(lado1);
    // lado2 = parseInt(lado2);
    // lado3 = parseInt(lado3);


    return lado1 + lado2 + lado3;
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Funciones circulo
const PI = Math.PI;

function diametro(r) {
    return r * 2;
}

function perimetroCirculo(r) {
    const dm = diametro(r);
    return dm * PI;
}

function areaCirculo(r) {
    return (r * r) * PI;
}

//Funciones HTML para el cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado").value;

    const perimetro = perimetroCuadrado(input);
    document.getElementById("result").innerHTML = "Resultado: " + perimetro;
}

function calcularAreaCuadrada() {
    const input = document.getElementById("InputCuadrado").value;

    const area = areaCuadrado(input);
    document.getElementById("result").innerHTML = "Resultado: " + area;

    // alert(area);
}
//Reto platzi añadirle una funcion a nuestra pagina
function calcularPerimetroTriangular(){
    const inputLado1 = parseInt(document.getElementById("InputLado1Triangle").value);
    const inputLado2 = parseInt(document.getElementById("InputLado2Triangle").value);
    const inputBase = parseInt(document.getElementById("InputBaseTriangle").value);

  
    const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);
    document.getElementById("resultT").innerHTML = "Resultado: " + perimetro;

}

function calcularAreaTriangular(){
    const inputAltura = parseInt(document.getElementById("InputAlturaTriangle").value);

    const inputBase = parseInt(document.getElementById("InputBaseTriangle").value);

    const area = areaTriangulo(inputBase, inputAltura);
    document.getElementById("resultT").innerHTML = "Resultado: " + area;

}

function calcularPerimetroCircular(){
    const radio = parseInt(document.getElementById("InputRadioCirculo").value);

    const circunferencia = perimetroCirculo(radio);
    const resultado = circunferencia.toFixed(2);
    document.getElementById("resultC").innerHTML = "Resultado: " + resultado;
}

function calcularAreaCircular(){
    const radio = parseInt(document.getElementById("InputRadioCirculo").value);

    const area = areaCirculo(radio);
    const resultado = area.toFixed(2);

    document.getElementById("resultC").innerHTML = "Resultado: " + resultado;
}