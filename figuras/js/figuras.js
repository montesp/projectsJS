//Funciones cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

//Funciones triangulo
function perimetroTriangulo(lado1, lado2, lado3) {
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
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    console.log(value);

    const perimetro = perimetroCuadrado(value);
    const resultado = "Resultado: " + perimetro;
    document.getElementById("result").innerHTML = resultado;
    // alert(perimetro);
}

function calcularAreaCuadrada() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
//Reto platzi añadirle una funcion a nuestra pagina
