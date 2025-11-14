function calculateGrade() {
    const s1 = parseInt(document.getElementById("subject1").value);
    const s2 = parseInt(document.getElementById("subject2").value);
    const s3 = parseInt(document.getElementById("subject3").value);
    const result = document.getElementById("result");

    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        result.innerHTML = "Please enter marks for all three subjects!!";
        result.style.color = "#f95c50ff";
        result.style.fontSize = "18px"
        window.alert("Please enter marks for all three subjects!!")
        return;
    }

    if (s1 < 0 || s1 > 100 || s2 < 0 || s2 > 100 || s3 < 0 || s3 > 100) {
        result.innerHTML = "Marks must be between 0 and 100!!";
        result.style.color = "#f95c50ff";
        result.style.fontSize = "18px"
        window.alert("Marks must be between 0 and 100!!")
        return;
    }

    const total = s1 + s2 + s3;
    const average = total / 3;
    let grade = "";

    if (average >= 90) {
        grade = "A";
    }   else if (average >= 75) {
        grade = "B";
    }   else if (average >= 60) {
        grade = "C";
    }   else {
        grade = "Fail";
    }

    result.innerHTML = `Total: ${total} <br> Average: ${average} <br> Grade: ${grade}`;
    result.style.fontSize = "20px"
    result.style.color = "#3ae320ff";
}

function resetSum() {
    result.innerHTML = `The calculation has been reset.`
    result.style.fontSize = "25px"
    result.style.color = "#f95c50ff";
}