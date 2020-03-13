
function concat(val){
    document.calc.txt.value += val;
}

function klear(){
    document.calc.txt.value = '';
}

function kalc(){
    document.calc.txt.value = eval(document.calc.txt.value);
}