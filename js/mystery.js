function mystery() {
    let checkbox = document.getElementById("mystery_checkbox");
    if (checkbox.checked == true) {
        window.location.href = "ahoj";
    }
    else window.location.href = "nazdar";
}