let myName ="Evgeniy";

let myPhoneNumber;

console.log("My phone number = ", myPhoneNumber)

let myEmail= null ;

let vehicle={
    ownerName: "Askarov Azat",
    govNum: "01KG123ABC",
    engineVolume: 3.0,
    mileage: 350_000,
    allowTinting: false,
};

// Conditions -  условия

let userName="Almaz"
let userEmail="brilliant5carat@gmail.com";
let userPhoneNumber="+996 999 123455"

let massage="Happy birthday," + userName + "!"
 if(userEmail !== null){
     let emailMessage:{from:string=""} {
         from: "geeks_academy@gmail.com",
         to: userEmail,
         body: message
     }
     console.log("Send email to user")
 }else if(userPhoneNumber !== null){
     console.log(data:"Send SMS to user");
 }
 else {
     console.warn(data:"User email is empty");
 }
 if (userEmail !== null && userPhoneNumber !== null) {
     console.log("Send SMS")
     console.log(" Send email to user")
 }
 else{
     console.error("User email and phone is empty")
 }

 let weekday="thursday"
if(weekday === "monday"|| weekday ==="thursday"){
    console.log("Yahoo! Today is GEEKS lesson")
}
else{  console.log("Do homework");
}

let fuelLiters=40;
let cardStatus="Gold";

let points= 0;


if(cardStatus==="Silver") {
     points=fuelLiters*0.5;
}else if(cardStatus==="Gold"){
    points=fuelLiters*0.75
} else if(cardStatus=== " PLATINUM"){
    points =fuelLiters
}

console.log(fuelLiters+ " L=> " + points+ " KGS");