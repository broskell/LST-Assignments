function calculateSum() {
    const n = parseInt(document.getElementById("numberInput").value);
    const output = document.getElementById("output");
    const result = document.getElementById("result");

    if (isNaN(n) || n < 1) {
        result.innerHTML = "Please enter a valid positive number!!";
        result.style.color = "#f95c50ff";
        result.style.fontSize = "18px"
        window.alert("Please enter a valid positive number!!")
        return;
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    result.innerHTML = `Sum is ${sum}`;
    result.style.fontSize = "30px"
    result.style.color = "#3ae320ff";
}

function resetSum() {
    result.innerHTML = `The calculation has been reset.`
    result.style.color = "#f95c50ff";
}