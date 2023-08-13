// setInterval() and clearInterval()
var counts = setInterval(text);
var num = 0;

function text(){
    var count = document.getElementById("incre-1").innerHTML = "+" +  ++num  ;
    if (num == 150) {
        clearInterval(counts);
    }
}


var counts1 = setInterval(hyper);
var num1= 0;

function hyper(){
    var count1 = document.getElementById("incre-2").innerHTML = "+" + ++num1;
    if (num1 == 59) {
        clearInterval(counts1)
    }
}


var counts2 = setInterval(cyber);
var num2 = 0;

function cyber(){
    var count2 = document.getElementById("incre-3").innerHTML = "+" + ++num2;
    if (num2 == 1000) {
        clearInterval(counts2);
    }
}
