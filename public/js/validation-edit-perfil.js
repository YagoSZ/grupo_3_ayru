let campoNombre = document.querySelector('#nombre')
let campoApellido = document.querySelector('#apellido')
let campoEmail = document.querySelector('#email')
let campoContraseña = document.querySelector('#password')
let formEditPerfil = document.querySelector('#form-edit-perfil')

let mensajeErrorNombre = document.querySelector('#error-register-nombre')
let mensajeErrorApellido = document.querySelector('#error-register-apellido')
let mensajeErrorEmail = document.querySelector('#error-register-email')
let mensajeErrorContraseña = document.querySelector('#error-register-contraseña')



window.addEventListener('load', function(){
    formEditPerfil.addEventListener('submit', function(e){
        
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

    campoNombre.addEventListener('blur', function(e){
        if(campoNombre.value.length == ""){
            campoNombre.style.backgroundColor = 'rgb(245 205 205)'
            campoNombre.style.border = '2px solid #9e1717'
            mensajeErrorNombre.style.display = 'block'
            mensajeErrorNombre.innerHTML = 'el campo Nombre no puede estar vacio'
            mensajeErrorNombre.style.color = 'red'
        } else {
            mensajeErrorNombre.style.display = 'none'
            mensajeErrorNombre.innerHTML = ''
            campoNombre.style.backgroundColor = 'white'
            campoNombre.style.borderWidth = '2px'
            campoNombre.style.borderStyle = 'inset'
            campoNombre.style.borderColor = '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'
            campoNombre.style.borderImage = 'initial'
        }
    })

    campoApellido.addEventListener('blur', function(e){
        if(campoApellido.value.length == ""){
            campoApellido.style.backgroundColor = 'rgb(245 205 205)'
            campoApellido.style.border = '2px solid #9e1717'
            mensajeErrorApellido.style.display = 'block'
            mensajeErrorApellido.innerHTML = 'el campo Apellido no puede estar vacio'
            mensajeErrorApellido.style.color = 'red'
        } else {
            mensajeErrorApellido.style.display = 'none'
            mensajeErrorApellido.innerHTML = ''
            campoApellido.style.backgroundColor = 'white'
            campoApellido.style.borderWidth = '2px'
            campoApellido.style.borderStyle = 'inset'
            campoApellido.style.borderColor = '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'
            campoApellido.style.borderImage = 'initial'
        }
    })


    campoEmail.addEventListener('blur', function(e){
        if(campoEmail.value.length == ""){
            campoEmail.style.backgroundColor = 'rgb(245 205 205)'
            campoEmail.style.border = '2px solid #9e1717'
            mensajeErrorEmail.style.display = 'block'
            mensajeErrorEmail.innerHTML = 'el campo Email no puede estar vacio'
            mensajeErrorEmail.style.color = 'red'
        } else {
            mensajeErrorEmail.style.display = 'none'
            mensajeErrorEmail.innerHTML = ''
            campoEmail.style.backgroundColor = 'white'
            campoEmail.style.borderWidth = '2px'
            campoEmail.style.borderStyle = 'inset'
            campoEmail.style.borderColor = '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'
            campoEmail.style.borderImage = 'initial'
        }
    })


    let pequeñoMensajeContraseña = document.querySelector('#error-register-contraseña')

    campoContraseña.addEventListener('focus', function(e){
        if(campoContraseña.value.length < 8 ){
            pequeñoMensajeContraseña.style.display = 'block'
        }
    })
    campoContraseña.addEventListener('input', function(e){
         if(campoContraseña.value.length >= 8 ){
             pequeñoMensajeContraseña.style.display = 'none'
             campoContraseña.style.borderWidth = '2px'
             campoContraseña.style.borderStyle = 'inset'
             campoContraseña.style.borderColor = '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'
             campoContraseña.style.borderImage = 'initial'
             campoContraseña.style.backgroundColor = 'white'
        }
         if(campoContraseña.value.length < 8 ){
             pequeñoMensajeContraseña.style.display = 'block'
         }
     })
     campoContraseña.addEventListener('blur', function(e){
         if(campoContraseña.value.length < 8 ){
            campoContraseña.style.backgroundColor = 'rgb(245 205 205)'
            campoContraseña.style.border = '2px solid #9e1717'
            pequeñoMensajeContraseña.style.display = 'block'
            pequeñoMensajeContraseña.innerHTML = 'la Contraseña debe tener al menos 8 caracteres'
            pequeñoMensajeContraseña.style.color = 'red'
         }
     })





    


})