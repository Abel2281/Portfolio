let sent2 = ["UI/UX Designer","Web Developer"];
function changesentance(){
    len = sent2.length;
    num = Math.random()*len;
    randomnum = Math.floor(num);
    return sent2[randomnum];
}
function printOutput(){
    quote = changesentance();
    let sentance = document.getElementById("developer");
    sentance.innerHTML = quote;
    console.log(quote);
}


window.setInterval(printOutput, 1000);