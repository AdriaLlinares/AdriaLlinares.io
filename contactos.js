function validarFormulario() {
    let nombre = document.getElementById("campo-nombre");
    let pass = document.getElementById("campo-contraseña");
    let date = document.getElementById("campo-data");
    let color = document.getElementById("campo-color");
    let edad = document.getElementById("campo-edad");
    
    // Validar el campo Nombre
    if (nombre.value == "") {
        nombre.classList.add("error-form");
    }if (pass.value == "") {
        pass.classList.add("error-form");
    }if (date.value == "") {
        date.classList.add("error-form");
    }if (color.value == "") {
        color.classList.add("error-form");
    }if (edad.value == "") {
        edad.classList.add("error-form");
    }
}