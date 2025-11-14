function calculatePattern() {
    const n = parseInt(document.getElementById("numberInput").value);
    const result = document.getElementById("result");

    if (isNaN(n) || n < 1) {
        result.innerHTML = "Please enter a valid positive number!!";
        result.style.color = "#f95c50ff";
        result.style.fontSize = "18px"
        window.alert("Please enter a valid positive number!!")
        return;
    }

    let pattern = "";
    for (let i = 1; i <= n; i++) {
        pattern += `*`.repeat(i) + `<br>`;
    }

    result.innerHTML = `${pattern}`;
    result.style.fontFamily = "monospace"
    result.style.fontSize = "30px"
    result.style.color = "#3ae32084";
}

function resetSum() {
    result.innerHTML = `The pattern has been reset.`
    result.style.fontSize = "25px"
    result.style.color = "#f95c50ff";
}