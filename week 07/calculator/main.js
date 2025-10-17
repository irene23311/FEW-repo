function computeAndDisplay() {
    let a= parseInt(value1.value);
    let b= parseInt(value2.value);

    console.log("Value of a: ", a);

    if(a==0){
    alert("Value 1 cannot be zero");
    }  
     elseif (isNaN(a))
    {
        alert("Please enter a valid number");
    }

    
    let result= a + b;
    result.innerHTML= "Result: " + result;
}

computeButton.onclick= computeAndDisplay;