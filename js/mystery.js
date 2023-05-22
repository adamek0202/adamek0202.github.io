function mystery() {
    let checkbox1 = document.getElementById("mystery_checkbox1");
    let checkbox2 = document.getElementById("mystery_checkbox2");
    if (checkbox1.checked == false && checkbox2.checked == false) {
        sleep(1000);
        alert("Chyba");
    }

    else if (checkbox1.checked == true && checkbox2.checked == false) {
        window.location.href = "cs";
    }
    
    else if (checkbox1.checked == false && checkbox2.checked ==true) {
        window.location.href == "ahojky";
    }

    else { 
        window.location.href = "nazdar";
        sleep(1000);
        checkbox1.checked = false;
    }
}
