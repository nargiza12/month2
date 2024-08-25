let grades100 = [40, 55, 22, 89, 14, 78, 56, 47, 59];
let grades5 = [];

for (let i = 0; i < grades100.length; i++) {
    if (grades100[i] <= 20) {
        grades5.push(1);
    } else if (grades100[i] <= 40) {
        grades5.push(2);
    } else if (grades100[i] <= 60) {
        grades5.push(3);
    } else if (grades100[i] <= 80) {
        grades5.push(4);
    } else {
        grades5.push(5);
    }
}

console.log("Оценки в 5-бальной системе:", grades5);


let number = parseInt(prompt("Введите число от 2 до 10:"));

if (number >= 2 && number <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }
} else {
    console.log("Число должно быть от 2 до 10");
}
