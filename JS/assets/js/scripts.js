let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
    if(count >= 10){
        alert("Você atingiu o limite máximo")
    } else {
        count++;
        CURRENT_NUMBER.innerHTML = count;
    if(count >= 0){
        CURRENT_NUMBER.style.color = 'blue'
        }
    else if(count < 0){
        CURRENT_NUMBER.style.color = 'red'
        }
    }
}

function decrement(){
    if(count <= -10){
        alert("Você atingiu o limite");
    } else {
        count--;
        CURRENT_NUMBER.innerHTML = count;
    if (count >= 0){
        CURRENT_NUMBER.style.color = 'blue'
        }
    else if(count <0){
        CURRENT_NUMBER.style.color = 'red'
        }
    }
}

function negativo() {
    if(count < 0){
        alert("Número é negativo");
    }
}