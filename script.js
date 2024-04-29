let ageInput
let kmInput
const submitBtn = document.getElementById("submit");
const kmPrice = 0.21;
let totalPrice
let discount

submitBtn.addEventListener('click', function () {
    ageInput = document.getElementById("age").value;
    kmInput = document.getElementById("kms").value;
    console.log (ageInput, "questa è la tua età")
    console.log(kmInput, "questi sono i km che vuoi percorrere")
    totalPrice = kmInput * kmPrice;
    console.log(totalPrice, "questo è il prezzo prima di essere scontato")
    
    if (ageInput < 18){
        discount = totalPrice * 20 / 100;
        console.log(discount, "questo è lo sconto applicato ai minorenni");
        totalPrice = totalPrice - discount;
    }
    else if (ageInput >= 65){
        discount = totalPrice * 40 / 100;
        console.log(discount, "questo è lo sconto applicato agli over 65");
        totalPrice = totalPrice - discount;
    }
    
    totalPrice = Math.round(totalPrice * 100) / 100;
    
    console.log(totalPrice, "questo è il prezzo totale da pagare (con sconti applicati)");
})

