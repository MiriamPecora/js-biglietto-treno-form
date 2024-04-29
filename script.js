let userAge
let kmToTravel
const submitBtn = document.getElementById("submit");
const kmPrice = 0.21;
let totalPrice
let discount

submitBtn.addEventListener('click', function () {
    userAge = document.getElementById("age").value;
    kmToTravel = document.getElementById("kms").value;
    console.log (userAge, "questa è la tua età")
    console.log(kmToTravel, "questi sono i km che vuoi percorrere")
    totalPrice = kmToTravel * kmPrice;
    console.log(totalPrice, "questo è il prezzo prima di essere scontato")
    
    if (userAge < 18){
        discount = totalPrice * 20 / 100;
        console.log(discount, "questo è lo sconto applicato ai minorenni");
        totalPrice = totalPrice - discount;
    }
    else if (userAge >= 65){
        discount = totalPrice * 40 / 100;
        console.log(discount, "questo è lo sconto applicato agli over 65");
        totalPrice = totalPrice - discount;
    }
    
    totalPrice = Math.round(totalPrice * 100) / 100;
    
    console.log(totalPrice, "questo è il prezzo totale da pagare (con sconti applicati)");
})

