let verData = () =>{   

    if (document.getElementById('form_nombre').value == ''){

        document.getElementById('campo_nombre').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('campo_nombre').classList.add('invalidText')

        document.getElementById('form_nombre').classList.add('invalidBorder')
    }else{ 
        document.getElementById('campo_nombre').innerHTML = 'Nombre aceptado'
        document.getElementById('campo_nombre').classList.remove('invalidText')
        document.getElementById('campo_nombre').classList.add('validText')

        document.getElementById('form_nombre').classList.remove('invalidBorder')
        document.getElementById('form_nombre').classList.add('validBorder')
    }



    if (document.getElementById('form_apellido').value == ''){

        document.getElementById('campo_apellido').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('campo_apellido').classList.add('invalidText')

        document.getElementById('form_apellido').classList.add('invalidBorder')
    }else{

        document.getElementById('campo_apellido').innerHTML = 'Apellido aceptado'
        document.getElementById('campo_apellido').classList.remove('invalidText')
        document.getElementById('campo_apellido').classList.add('validText')

        document.getElementById('form_apellido').classList.remove('invalidBorder')
        document.getElementById('form_apellido').classList.add('validBorder')
    }



    if (document.getElementById('form_fecha').value == ''){

        document.getElementById('campo_fecha').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('campo_fecha').classList.add('invalidText')

        document.getElementById('form_fecha').classList.add('invalidBorder')
    }else{

        document.getElementById('campo_fecha').innerHTML = 'Fecha aceptada'
        document.getElementById('campo_fecha').classList.remove('invalidText')
        document.getElementById('campo_fecha').classList.add('validText')

        document.getElementById('form_fecha').classList.remove('invalidBorder')
        document.getElementById('form_fecha').classList.add('validBorder')
    }


    let example = document.getElementById('form_correo').value;
    let ourSubstring = "@";


    if (document.getElementById('form_correo').value == ''){

        document.getElementById('campo_correo').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('campo_correo').classList.add('invalidText')

        document.getElementById('form_correo').classList.add('invalidBorder')

    }else if (example.includes(ourSubstring)){

        document.getElementById('campo_correo').innerHTML = 'Correo aceptado'
        document.getElementById('campo_correo').classList.remove('invalidText')
        document.getElementById('campo_correo').classList.add('validText')

        document.getElementById('form_correo').classList.remove('invalidBorder')
        document.getElementById('form_correo').classList.add('validBorder')

    }

    else{

        document.getElementById('campo_correo').innerHTML = 'El correo debe contener @'
        document.getElementById('campo_correo').classList.add('invalidText')

        document.getElementById('form_correo').classList.add('invalidBorder')
        
    }







    if (document.getElementById('form_form').value == ''){

        document.getElementById('campo_form').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('campo_form').classList.add('invalidText')

        document.getElementById('form_form').classList.add('invalidBorder')
    }else{

        document.getElementById('campo_form').innerHTML = 'Formulario aceptado'
        document.getElementById('campo_form').classList.remove('invalidText')
        document.getElementById('campo_form').classList.add('validText')

        document.getElementById('form_form').classList.remove('invalidBorder')
        document.getElementById('form_form').classList.add('validBorder')
    }




    if (document.getElementById('selects').value == 'Genero'){

        
        document.getElementById('genero').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('genero').classList.add('invalidText')

        document.getElementById('genero').classList.remove('validText')
        document.getElementById('genero').classList.add('invalidBorder')

    }
    else{

        document.getElementById('genero').innerHTML = 'Genero aceptado'
        document.getElementById('genero').classList.remove('invalidText')
        document.getElementById('genero').classList.add('validText')

        document.getElementById('genero').classList.remove('invalidBorder')
        document.getElementById('genero').classList.add('validBorder')
    }

}

var arreglo = []
var obj = new Object()

let clases =() => {

    let elemento_nombre = document.getElementById("form_nombre")
    let elemento_apellido = document.getElementById("form_apellido")
    let elemento_correo = document.getElementById("form_correo")
    let elemento_fecha = document.getElementById("form_fecha")
    let elemento_genero = document.getElementById("selects")
    let elemento_mensaje = document.getElementById("form_form")

    // Clase
    //let variable = new Object()

    //control + d pa cambiar varias cosas

    //Forma uno
    // let contacto = new Object()
    // contacto.nombre = elemento_nombre.value

    // contacto.genero = elemento_genero.value


    //Forma 2
    let variable2 = {
        nombre: elemento_nombre.value,
        apellido: elemento_apellido.value,
        fechaNacimiento: elemento_fecha.value,
        correoPersona: elemento_correo.value,
        genero: elemento_genero.value,
        mensajePersona: elemento_mensaje.value


    }

    console.log(arreglo.push(variable2))


}


let listar = () => {
    console.log(arreglo)
}
