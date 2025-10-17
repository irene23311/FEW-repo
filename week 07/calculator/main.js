function computeAndDisplay() {
    let a = parseInt(value1.value);
    let b = parseInt(value2.value);

    console.log("Value of a: ", a);

    if (a == 0) {
        alert("Value 1 cannot be zero");
    } else if (isNaN(a)) {
        alert("Please enter a valid number");
    }
    let c = a + b;
    result.innerText = c;
}

computeButton.onclick = computeAndDisplay;