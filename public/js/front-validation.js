window.addEventListener('load', function(){
    let formRegister = this.document.querySelector('#formRegister')
    formRegister.addEventListener('submit', function(e){
        let listaErrores = document.querySelector('.lista-errores-validacion-front ul')

        listaErrores.innerHTML = ""

        let errors = []

        let campoNombre = document.querySelector('#nombre')

        if(campoNombre.value == ""){
            errors.push("el campo Nombre no puede estar vacio")
        } 

        let campoApellido = document.querySelector('#apellido')

        if(campoApellido.value == ""){
            errors.push("el campo Apellido no puede estar vacio")
        }

        let campoEmail = document.querySelector('#email')

        if(campoEmail.value == ""){
            errors.push("el campo Email no puede estar vacio")
        }

        let campoContraseña = document.querySelector('#password')

        if(campoContraseña.value == ""){
            errors.push("el campo Contraseña no puede estar vacio")
        } else if (campoContraseña.value.length < 8){
            errors.push("la Contraseña debe tener almenos 8 caracteres")
        }

        if (errors.length > 0){
            e.preventDefault()

            let aparecerDivErrores = document.querySelector('.lista-errores-validacion-front')
            aparecerDivErrores.style.display = 'block'
            for (let i = 0; i < errors.length; i++) {
                listaErrores.innerHTML += "<li>" + errors[i] + "</li>"
            }

        }
    })
})