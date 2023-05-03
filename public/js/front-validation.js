let campoNombre = document.querySelector('#nombre')
let campoApellido = document.querySelector('#apellido')
let campoEmail = document.querySelector('#email')
let campoContraseña = document.querySelector('#password')

let mensajeErrorNombre = document.querySelector('#error-register-nombre')
let mensajeErrorApellido = document.querySelector('#error-register-apellido')
let mensajeErrorEmail = document.querySelector('#error-register-email')
let mensajeErrorContraseña = document.querySelector('#error-register-contraseña')



window.addEventListener('load', function(){
    let formRegister = document.querySelector('#formRegister')
    formRegister.addEventListener('submit', function(e){

        let errors = 0


        if(campoNombre.value == ""){
            errors++
            mensajeErrorNombre.style.display = 'block'
            mensajeErrorNombre.innerHTML = 'el campo Nombre no puede estar vacio'
            campoNombre.style.backgroundColor = 'rgb(245 205 205)'
        } 


        if(campoApellido.value == ""){
            errors++
            mensajeErrorApellido.style.display = 'block'
            mensajeErrorApellido.innerHTML = "el campo Apellido no puede estar vacio"
            campoApellido.style.backgroundColor = 'rgb(245 205 205)'
        }


        if(campoEmail.value == ""){
            errors++
            mensajeErrorEmail.style.display = 'block'
            mensajeErrorEmail.innerHTML = "el campo Email no puede estar vacio"
            campoEmail.style.backgroundColor = 'rgb(245 205 205)'

        } else if (!campoEmail.value.match("@")){
            errors++
            campoEmail.style.backgroundColor = 'rgb(245 205 205)'
        }

        
        if(campoContraseña.value == ""){
            errors++
            mensajeErrorContraseña.style.display = 'block'
            mensajeErrorContraseña.innerHTML = "el campo Contraseña no puede estar vacio"
            campoContraseña.style.backgroundColor = 'rgb(245 205 205)'
        } else if (campoContraseña.value.length < 8){
            errors++
            mensajeErrorContraseña.style.display = 'block'
            mensajeErrorContraseña.innerHTML = "la Contraseña debe tener almenos 8 caracteres"
            campoContraseña.style.backgroundColor = 'rgb(245 205 205)'
        }


        if (errors > 0){
            e.preventDefault()
        }
    })

    //estilos de validacion generales para todos los inputs
    let inputsRegister = document.querySelectorAll('.sub-formulario')
    for(let input of inputsRegister){
        input.addEventListener('focus', function(e){
            this.style.backgroundColor = '#ebc7eb'
        })
        input.addEventListener('blur', function(e){
            this.style.backgroundColor = 'white'
        })
        input.addEventListener('input', function(e){
            if (input.value.length > 0){
                input.style.backgroundColor = 'white'
            }
        })
    }

    let iconoErrorNombre = document.querySelector('#advertencia-nombre')
    campoNombre.addEventListener('blur', function(e){
        if(campoNombre.value.length == ""){
            campoNombre.style.backgroundColor = 'rgb(245 205 205)'
            campoNombre.style.border = '2px solid #9e1717'
            mensajeErrorNombre.style.display = 'block'
            mensajeErrorNombre.innerHTML = 'el campo Nombre no puede estar vacio'
            mensajeErrorNombre.style.color = 'red'
            iconoErrorNombre.style.display = 'block'
        } else {
            mensajeErrorNombre.style.display = 'none'
            mensajeErrorNombre.innerHTML = ''
            campoNombre.style.backgroundColor = 'white'
            iconoErrorNombre.style.display = 'none'
            campoNombre.style.borderWidth = '2px'
            campoNombre.style.borderStyle = 'inset'
            campoNombre.style.borderColor = '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'
            campoNombre.style.borderImage = 'initial'
        }
    })

    let iconoErrorApellido = document.querySelector('#advertencia-apellido')
    campoApellido.addEventListener('blur', function(e){
        if(campoApellido.value.length == ""){
            campoApellido.style.backgroundColor = 'rgb(245 205 205)'
            campoApellido.style.border = '2px solid #9e1717'
            mensajeErrorApellido.style.display = 'block'
            mensajeErrorApellido.innerHTML = 'el campo Apellido no puede estar vacio'
            mensajeErrorApellido.style.color = 'red'
            iconoErrorApellido.style.display = 'block'
        } else {
            mensajeErrorApellido.style.display = 'none'
            mensajeErrorApellido.innerHTML = ''
            campoApellido.style.backgroundColor = 'white'
            iconoErrorApellido.style.display = 'none'
            campoApellido.style.borderWidth = '2px'
            campoApellido.style.borderStyle = 'inset'
            campoApellido.style.borderColor = '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'
            campoApellido.style.borderImage = 'initial'
        }
    })

    let iconoErrorEmail = document.querySelector('#advertencia-email')
    campoEmail.addEventListener('blur', function(e){
        if(campoEmail.value.length == ""){
            campoEmail.style.backgroundColor = 'rgb(245 205 205)'
            campoEmail.style.border = '2px solid #9e1717'
            mensajeErrorEmail.style.display = 'block'
            mensajeErrorEmail.innerHTML = 'el campo Email no puede estar vacio'
            mensajeErrorEmail.style.color = 'red'
            iconoErrorEmail.style.display = 'block'
        } else {
            mensajeErrorEmail.style.display = 'none'
            mensajeErrorEmail.innerHTML = ''
            campoEmail.style.backgroundColor = 'white'
            iconoErrorEmail.style.display = 'none'
            campoEmail.style.borderWidth = '2px'
            campoEmail.style.borderStyle = 'inset'
            campoEmail.style.borderColor = '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'
            campoEmail.style.borderImage = 'initial'
        }
    })

    let inputContraseña = document.querySelector('#password')
    let iconoError = document.querySelector('#advertencia-contraseña')
    let pequeñoMensajeContraseña = document.querySelector('#error-register-contraseña')

    inputContraseña.addEventListener('focus', function(e){
        if(inputContraseña.value.length < 8 ){
            pequeñoMensajeContraseña.style.display = 'block'
            pequeñoMensajeContraseña.innerHTML = 'la Contraseña debe tener almenos 8 caracteres'
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