function calculateTable() {
    const n = parseInt(document.getElementById("numberInput").value);
    const result = document.getElementById("result");

    if (isNaN(n) || n < 1) {
        result.innerHTML = "Please enter a valid positive number!!";
        result.style.color = "#f95c50ff";
        result.style.fontSize = "18px"
        window.alert("Please enter a valid positive number!!")
        return;
    }

    let table = 0;
    for (let i = 1; i <= 10; i++) {
        table += `${n} × ${i} = ${n * i} <br>`;
    }

    result.innerHTML = `${table}`;
    result.style.fontSize = "20px"
    result.style.color = "#3ae320ff";
}

function resetSum() {
    result.innerHTML = `The calculation has been reset.`
    result.style.fontSize = "25px"
    result.style.color = "#f95c50ff";
}