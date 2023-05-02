
window.addEventListener('load', function(){
    let formRegister = document.querySelector('#formRegister')
    formRegister.addEventListener('submit', function(e){
        let listaErrores = document.querySelector('.lista-errores-validacion-front ul')

        listaErrores.innerHTML = ""

        let errors = []

        let campoNombre = document.querySelector('#nombre')

        if(campoNombre.value == ""){
            errors.push("el campo Nombre no puede estar vacio")
            campoNombre.style.backgroundColor = 'rgb(245 205 205)'
        } 

        let campoApellido = document.querySelector('#apellido')

        if(campoApellido.value == ""){
            errors.push("el campo Apellido no puede estar vacio")
        }

        let campoEmail = document.querySelector('#email')

        if(campoEmail.value == ""){
            errors.push("el campo Email no puede estar vacio")
        } else if (!campoEmail.value.match("@")){
            errors.push("el Email es invalido")
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
    let inputsRegister = document.querySelectorAll('.sub-formulario')
    for(let input of inputsRegister){
        input.addEventListener('focus', function(e){
            this.style.backgroundColor = '#ebc7eb'
        })
        input.addEventListener('blur', function(e){
            this.style.backgroundColor = 'white'
        })
    }

    let campoNombre = document.querySelector('#nombre')

     campoNombre.addEventListener('input', function(e){
         if (campoNombre.value.length > 0){
             campoNombre.style.backgroundColor = 'white'
         }
     })

    let inputContraseña = this.document.querySelector('#password')
    let iconoError = document.querySelector('.iconoContraseña')
    let pequeñoMensajeContraseña = document.querySelector('.mensaje-advertencia')
    inputContraseña.addEventListener('focus', function(e){
        if(inputContraseña.value.length < 8 ){
            pequeñoMensajeContraseña.style.display = 'block'
        }
    })
     inputContraseña.addEventListener('input', function(e){
         if(inputContraseña.value.length >= 8 ){
             pequeñoMensajeContraseña.style.display = 'none'
             inputContraseña.style.borderWidth = '2px'
             inputContraseña.style.borderStyle = 'inset'
             inputContraseña.style.borderColor = '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'
             inputContraseña.style.borderImage = 'initial'
             inputContraseña.style.backgroundColor = 'white'
             iconoError.style.display = 'none'
        }
         if(inputContraseña.value.length < 8 ){
             pequeñoMensajeContraseña.style.display = 'block'
         }
     })
     inputContraseña.addEventListener('blur', function(e){
         if(inputContraseña.value.length < 8 ){
             inputContraseña.style.backgroundColor = 'rgb(245 205 205)'
             inputContraseña.style.border = '2px solid #9e1717'
             pequeñoMensajeContraseña.style.color = 'red'
             iconoError.style.display = 'block'
         }
     })

    


})