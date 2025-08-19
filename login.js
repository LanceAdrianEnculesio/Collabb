function validateForm(){
    let mobile = document.getElementById("mobile").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (mobile === "" || pass === "") {
        alert("Both fields are required.");
        return false;
    }

    return true;
}