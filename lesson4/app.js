// Function to apply a discount
function applyDiscount(price, discount) {
    let result = price * (100 - discount) / 100;
    return result;
}

// Function expression to apply a promocode
let applyPromocode = function (price, promocode) {
    switch (promocode) {
        case "SUMMER_2024":
            return applyDiscount(price, 20);
        case "YA_OT_EVGENIYA":
            return applyDiscount(price, 50);
    }
    return price;
}

//  discount functions
let price = 100_000;
let blackFridayPrice = applyDiscount(price, 60);

console.log({ price, blackFridayPrice });

console.log("YA_OT_EVGENIYA",
    applyPromocode(price, "YA_OT_EVGENIYA"));
console.log("NEW_YEAR_2025",
    applyPromocode(price, "NEW_YEAR_2025"));
console.log("No promocode",
    applyPromocode(price, true));

// Function to format phone number
function formatPhone(phoneNumber) {
    let result = "";
    for (let char of phoneNumber) {
        if (char >= "0" && char <= "9") {
            result += char;
        }
    }

    if (result.startsWith("0"))
        result = result.slice(1);

    if (result.length !== 12)
        result = "996" + result;

    return result;
}

// Function to get operator code from formatted phone number
function getOperatorCode(phoneNumber) {
    return phoneNumber.slice(3, 6);
}

// Function to checkNurtelecom (O!)
function checkNurtelecom(code) {
    let codes = ["500", "501", "502"];
    return codes.includes(code);
}

// Function to check  Mega
function checkMega(code) {
    let codes = ["550", "551", "552"];
    return codes.includes(code);
}

// Function to check  Beeline
function checkBeeline(code) {
    let codes = ["770", "771", "772", "773", "774", "775", "776", "777", "778", "779"];
    return codes.includes(code);
}

// Function to detect the operator
function detectOperator(phoneNumber) {
    let formattedPhoneNumber = formatPhone(phoneNumber);
    let operatorCode = getOperatorCode(formattedPhoneNumber);

    if (checkNurtelecom(operatorCode))
        return "O!";

    if (checkMega(operatorCode))
        return "Mega";

    if (checkBeeline(operatorCode))
        return "Beeline";

    return "ERROR";
}

// Example
console.log(detectOperator("+996 770 123 456")); // "Beeline"
console.log(detectOperator("+996 550 123 456")); // "Mega"
console.log(detectOperator("+996 500 123 456")); // "O!"
