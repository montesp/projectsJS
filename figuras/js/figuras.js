//Codigo cuadrado
// console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log(`EL perimetro del cuadrado es: ${perimetroCuadrado(ladoCuadrado)} cm `);

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log(`EL area del cuadrado es: ${areaCuadrado(ladoCuadrado)} cm `);

// console.groupEnd();

//Codigo triangulo
// console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseT = 4;
// const alturaT = 5.5;

// console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseT} cm`);
// console.log(`La altura del triangulo mide: ${alturaT} cm`);

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}
// console.log(`EL perimetro del triangulo es: ${perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseT)} cm `); 3

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log(`EL area del triangulo es: ${areaTriangulo(baseT, alturaT)} cm cuadrados `);

// console.groupEnd();

//Codigo circulo

// console.group("Circulos");

// const radio = 4;
// console.log(`El radio es: ${radio} cm`);

function diametro(r) {
    return r * 2;
}

// console.log(`El diametro es: ${diametro(radio)} cm`);

const PI = Math.PI;
// console.log(`El valor PI es: ${PI} cm`);


function perimetroCirculo(r) {
    const dm = diametro(r);
    return dm * PI;
}
// console.log(`EL area del circulo es: ${perimetroCirculo(radio)} cm cuadrados `);


function areaCirculo(r) {
    return (r * r) * PI;
}

// console.log(`EL area del circulo es: ${areaCirculo(5)} cm cuadrados `);


// console.groupEnd();

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    console.log(value);

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrada() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}