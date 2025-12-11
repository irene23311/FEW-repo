function computeAndDisplay() {

    let a = parseInt(value1.value);
    let b = parseInt(value2.value);
    value2.style.borderColor = "black";
    value1.style.borderColor = "black";

    if (isNaN(a)) {
        value1.style.borderColor = "red";
    } else if (isNaN(b)) {
        value2.style.borderColor = "red";
    } else {
        if(operationSelection.value == "Add"){
            results.textContent = a + b;
                } else if(operationSelection.value == "Substract")
        {
            results.textContent = a - b;
        }
    }
}

computeButton.onclick = computeAndDisplay;