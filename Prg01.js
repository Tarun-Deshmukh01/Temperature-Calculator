function currencyConvert(e) {
    var exchRt = 83.25;
    if (e.target.id === "Inr") {
        Dl.value = Inr.value / exchRt;
    } else if(e.target.id === "Dl"){
        Inr.value = Dl.value * exchRt;
    }
}