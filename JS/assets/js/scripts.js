let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function mudar_cor() {
    if (count >= 0){
        CURRENT_NUMBER.style.color = 'blue'
        }
    else if(count <0){
        CURRENT_NUMBER.style.color = 'red'
    }
}

function increment(){
    if(count >= 10){
        alert("Você atingiu o limite máximo")
    } else {
        count++;
        CURRENT_NUMBER.innerHTML = count;
    }
    mudar_cor();
}

function decrement(){
    if(count <= -10){
        alert("Você atingiu o limite");
    } else {
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }
    mudar_cor();
}