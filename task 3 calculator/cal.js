var isClicked = false;

// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
    isClicked = false;
}

// This function display values
function display(value) {
    if (value == '+' || value == '-' || value == '*' || value == '/') {
        if (!isClicked) {
            document.getElementById("result").value += value;
        }
        isClicked = true;
    } else {
        document.getElementById("result").value += value;
    }


}
// This function evaluates the expression and return result
function calculate() {
    isClicked = false;
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}


function backSpace() {
    var text = document.getElementById("result").value;
    var le = text.slice((text.length - 1), text.length);
    document.getElementById("result").value = text.slice(0, (text.length - 1));
    if (le == '+' || le == '-' || le == '*' || le == '/') {
        isClicked = false;
    }
}