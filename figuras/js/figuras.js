//Codigo cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`EL perimetro del cuadrado es: ${perimetroCuadrado} cm `);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`EL area del cuadrado es: ${areaCuadrado} cm `);

console.groupEnd();

//Codigo triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const base = 4;
const altura = 5.5;

console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${base} cm`);
console.log(`La altura del triangulo mide: ${altura} cm`);
 
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + base;
console.log(`EL perimetro del triangulo es: ${perimetroTriangulo} cm `);3

const areaTriangulo = (base * altura) / 2;
console.log(`EL area del triangulo es: ${areaTriangulo} cm cuadrados `);

console.groupEnd();

//Codigo circulo

console.group("Circulos");

const radio = 4;
console.log(`El radio es: ${radio} cm`);

const diametro = radio * 2;
console.log(`El diametro es: ${diametro} cm`);

const PI = Math.PI;
console.log(`El valor PI es: ${PI} cm`);


const perimetroCirculo = diametro * PI;
console.log(`EL area del circulo es: ${perimetroCirculo} cm cuadrados `);


const areaCirculo = (radio * radio) * PI
console.log(`EL area del circulo es: ${areaCirculo} cm cuadrados `);


console.groupEnd();