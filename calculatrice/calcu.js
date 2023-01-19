let input = "";

function showValue(btn) {
    input += btn.value;
    document.getElementById('output').innerHTML = input;
}

function doMath(){
    document.getElementById('output').innerHTML = eval(input);
    input = "";
}

function reset(){
    document.getElementById('output').innerHTML = "0";
    input = "";
}

function rem1(){

   
    input = input.replace(/.$/, "");
    document.getElementById('output').innerHTML = input;
}