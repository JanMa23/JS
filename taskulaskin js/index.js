

const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay (){
    display.value = "";
}




function calculate(){
    try{
        if(isNaN(eval(display.value)) || !isFinite(eval(display.value))) 
        {
            throw new Error("Error");
        }
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error"
    }
}