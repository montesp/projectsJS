const elements = ['Fire', 'Air', 'Water'];
let responseFinal = '';
const separator =  '--';

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    index + 1 < elements.length ? responseFinal += element + separator :  responseFinal += element;
}
console.log(responseFinal);

const responseJoin = elements.join('--');
console.log('Join: ', responseJoin);

const title = 'Curso de manipulacion de arrays';
const urlFinal = title.split(' ').join('-').toLowerCase();

console.log(urlFinal);