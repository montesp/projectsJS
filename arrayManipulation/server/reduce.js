const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];

    sum += element;

}

console.log(sum)

const reduceTotals = totals.reduce((sum, item) => sum + item, 0);
console.log('reduce', reduceTotals);