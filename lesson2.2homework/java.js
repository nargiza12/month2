let amount = 1000;  // сумма, на которую клиент хочет заправиться
let fuelType = '95';  // тип топлива (92, 95, 98, дизель, газ)
let pricePerLiter;

if (fuelType === '92') {
    pricePerLiter = 70;
} else if (fuelType === '95') {
    pricePerLiter = 75;
} else if (fuelType === '98') {
    pricePerLiter = 80;
} else if (fuelType === 'dizel') {
    pricePerLiter = 65;
} else if (fuelType === 'gaz') {
    pricePerLiter = 35;
} else {
    console.log("Неизвестный тип топлива");
}

let liters = amount / pricePerLiter;
console.log(`Вы получите ${liters} литров топлива.`);


let amount = 1000;  // сумма, на которую клиент хочет заправиться
let fuelType = '95';  // тип топлива (92, 95, 98, дизель, газ)
let pricePerLiter;

switch(fuelType) {
    case '92':
        pricePerLiter = 70;
        break;
    case '95':
        pricePerLiter = 75;
        break;
    case '98':
        pricePerLiter = 80;
        break;
    case 'dizel':
        pricePerLiter = 65;
        break;
    case 'gaz':
        pricePerLiter = 35;
        break;
    default:
        console.log("Неизвестный тип топлива");
}

let liters = amount / pricePerLiter;
console.log(`Вы получите ${liters} литров топлива.`);


let regionCode = '01';  // код региона
let region;

if (regionCode === '01') {
    region = 'Bishkek';
} else if (regionCode === '02') {
    region = 'Osh';
} else if (regionCode === '03') {
    region = 'Jalal-Abad';
} else if (regionCode === '04') {
    region = 'Naryn';
} else if (regionCode === '05') {
    region = 'Talas';
} else if (regionCode === '06') {
    region = 'Batken';
} else if (regionCode === '07') {
    region = 'Yssyk-Kyl';
} else if (regionCode === '08') {
    region = 'Chui';
}
console.log(`Код региона: ${regionCode}, Регион: ${region}`);


let regionCode = '01';  // код региона
let region;

switch(regionCode) {
    case '01':
        region = 'Bishkek';
        break;
    case '02':
        region = 'Osh';
        break;
    case '03':
        region = 'Jalal-Abad';
        break;
    case '04':
        region = 'Naryn';
        break;
    case '05':
        region = 'Talas';
        break;
    case '06':
        region = 'Batken';
        break;
    case '07':
        region = 'Yssyk-Kul';
        break;
    case '08':
        region = 'Chui';
        break;
    default:
        region = 'Неизвестный регион';
}

console.log(`Код региона: ${regionCode}, Регион: ${region}`);