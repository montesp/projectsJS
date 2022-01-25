const salariosMex = colombia.map(
    function(person){
        return person.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function(salaryA, SalaryB){
        return salaryA - SalaryB;
    }
);

function esPar(numbe){
    return (numbe % 2 === 0);
}

function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista1 = sumaLista / lista.length;
    return promedioLista1;
}


function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personMitad1 = lista[mitad - 1];
        const personMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);
        return mediana

    } else {
        const personMitad = lista[mitad];
        return personMitad
    }
}

console.log(
    medianaSalarios(salariosMexSorted);
);