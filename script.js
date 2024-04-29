let ageInput
let kmInput
const submitBtn = document.getElementById("submit");
const cancelBtn = document.getElementById("cancel")
const kmPrice = 0.21;
let totalPrice
let discount
let userName


submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    
    document.getElementById("ticket").style.display = "block"

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
    
    userName = document.getElementById("name_surname").value;
    
    console.log (userName, "questo è il tuo nome")
    console.log(totalPrice, "questo è il prezzo totale da pagare (con sconti applicati)");

    document.getElementById("traveler_name").innerText=userName;
    document.getElementById("travel_km").innerText=kmInput + "km";
    document.getElementById("randomized_cart").innerText="9";
    document.getElementById("applied_discount").innerText=discount;
    document.getElementById("total_price").innerText=totalPrice;

})

cancelBtn.addEventListener("click", function () {
    window.location.reload();
})



