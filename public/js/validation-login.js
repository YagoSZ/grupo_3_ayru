window.addEventListener('load', function(e){
    let inputsLogin = document.querySelectorAll('.login-i2')
    let inputEmail = document.querySelector('#input-email-login')
    let inputPassword = document.querySelector('#input-password-login')
    let mensajeError = document.querySelectorAll('.mensaje-error-login')
    let mensajeErrorEmail = document.querySelector('#advertencia-login-email')
    let mensajeErrorPassword = document.querySelector('#advertencia-login-password')
    let forms = this.document.querySelector('form')

    forms.addEventListener('submit', function(e){
        let errors = 0
        if(inputEmail.value == ""){
            errors++
        }
        if(inputPassword.value == ""){
            errors++
        }
        if(inputPassword.value.length < 8){
            errors++
        }
        if(errors > 0){
            e.preventDefault()
            inputEmail.style.borderBottom = '2px solid #dc1544'
            inputEmail.style.backgroundColor = '#ebc7eb'
            mensajeErrorEmail.style.display = 'block'
            mensajeErrorEmail.innerHTML = 'el campo Email no puede estar vacio'
            mensajeErrorEmail.style.color = 'red'
            inputPassword.style.borderBottom = '2px solid #dc1544'
            inputPassword.style.backgroundColor = '#ebc7eb'
            mensajeErrorPassword.style.display = 'block'
            mensajeErrorPassword.innerHTML = 'debes ingresar al menos 8 caracteres'
            mensajeErrorPassword.style.color = 'red'
        }
    })

    for(let input of inputsLogin){
        input.addEventListener('focus', function(e){
            this.style.backgroundColor = '#f7e9f9'
        })
        input.addEventListener('blur', function(e){
            if(input.classList.contains('e')){
                if(input.value == ""){
                    this.style.borderBottom = '2px solid #dc1544'
                    this.style.backgroundColor = '#ebc7eb'
                    mensajeErrorEmail.style.display = 'block'
                    mensajeErrorEmail.innerHTML = 'el campo Email no puede estar vacio'
                    mensajeErrorEmail.style.color = 'red'
    
                } else {
                    this.style.backgroundColor = 'white'
                    this.style.borderBottom = '2px solid #D1D1D4'
                }
            } else {
                    if (input.value.length < 8){
                    this.style.borderBottom = '2px solid #dc1544'
                    this.style.backgroundColor = '#ebc7eb'
                    mensajeErrorPassword.style.display = 'block'
                    mensajeErrorPassword.innerHTML = 'debes ingresar al menos 8 caracteres'
                    mensajeErrorPassword.style.color = 'red'
                 }   else if(input.value.length >= 8){
                     this.style.backgroundColor = 'white'
                     mensajeErrorPassword.innerHTML = ""
                     this.style.backgroundColor = 'white'
                     this.style.borderBottom = '2px solid #D1D1D4'
                } 
            }
        })
        input.addEventListener('input', function(e){
            if(input.classList.contains('e')){
                if (input.value.length > 0){
                    this.style.background = 'none'
                    mensajeErrorEmail.innerHTML = ""
                }
            } else {
                if(input.value.length >= 8){
                    this.style.backgroundColor = 'none'
                    mensajeErrorPassword.innerHTML = ""
                } 
            }
        })
    }

    // inputEmail.addEventListener('blur', function(e){
    //     if(inputEmail.value == ""){
    //         mensajeErrorEmail.style.display = 'block'
    //         mensajeErrorEmail.innerHTML = 'el campo Apellido no puede estar vacio'
    //         mensajeErrorEmail.style.color = 'red'
    //     }
    // })

})