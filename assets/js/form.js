const form = document.getElementById('Jvalidaciones');
const inputs = document.querySelectorAll('#Jvalidaciones input');

/*Crear las expresiones regulares*/
const expresiones = {
    documento: /^[0-9]{3,11}$/,
    nombre: /^[A-Za-z\s]{4,40}$/,
    apellido: /^[A-Za-z\s]{4,40}$/,
    correo: /[a-z0-9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    contrasena:/^[A-Za-z0-9]{4,20}$/,
    
}
const comprobar ={
    documento:false,
    nombre: false,
    apellido: false,
    correo: false,
    contrasena:false, 
    fecha: false
}
/*Funcion para validar los inputs recorridos*/
const validarForm = (e)=>{
    /*segun el name de cada input en el html ejecutar un caso*/
   switch(e.target.name){
    case "docu":
        /*Validar el input segun la expresion regular*/
        if(expresiones.documento.test(e.target.value /*acceder al valor del input*/)) {
            document.getElementById('error1').classList.remove('error');
            document.getElementById('docu').classList.add('correct');
            document.getElementById('docu').classList.remove('incorrect');
            comprobar['documento'] = true;
        }else{
            document.getElementById('error1').classList.add('error');
            document.getElementById('docu').classList.add('incorrect');
            document.getElementById('docu').classList.remove('correct');
            comprobar['documento'] = false;
        }  
    break;
    case "nombre":
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById('error2').classList.remove('error');
            document.getElementById('nombre').classList.add('correct');
            document.getElementById('nombre').classList.remove('incorrect');
            comprobar['nombre'] = true;
        }else{
            document.getElementById('error2').classList.add('error');
            document.getElementById('nombre').classList.add('incorrect');
            document.getElementById('nombre').classList.remove('correct');
            comprobar['nombre'] = false;
        }
    break;
    case "apellido":
        if(expresiones.apellido.test(e.target.value)){
            document.getElementById('error3').classList.remove('error');
            document.getElementById('apellido').classList.add('correct');
            document.getElementById('apellido').classList.remove('incorrect');
            comprobar['apellido'] = true;
        }else{
            document.getElementById('error3').classList.add('error');
            document.getElementById('apellido').classList.add('incorrect');
            document.getElementById('apellido').classList.remove('correct');
            comprobar['apellido'] = false;
        }
    break;
   
    case "correo":
        if(expresiones.correo.test(e.target.value)){
            document.getElementById('error4').classList.remove('error');
            document.getElementById('correo').classList.add('correct');
            document.getElementById('correo').classList.remove('incorrect');
            comprobar['correo'] = true;
        }else{
            document.getElementById('error4').classList.add('error');
            document.getElementById('correo').classList.add('incorrect');
            document.getElementById('correo').classList.remove('correct');
            comprobar['correo'] = false;
        }
    break;
    case "password":
        if(expresiones.contrasena.test(e.target.value)){
            document.getElementById('error5').classList.remove('error');
            document.getElementById('password').classList.add('correct');
            document.getElementById('password').classList.remove('incorrect');
            comprobar['contrasena'] = true;
        }else{
            document.getElementById('error5').classList.add('error');
            document.getElementById('password').classList.add('incorrect');
            document.getElementById('password').classList.remove('correct');
            comprobar['contrasena'] = false;
        }
    break;
    case "password2":
        validarP();
    break;
    case "fecha":
        /*fecha actual */
        let fechaA = new Date();
        const ano =  parseInt(fechaA.getFullYear());
        /*FECHA DEL INPUT Y TRAERLA POR DATOS */
        const fechaN = document.getElementById('fecha').value;
        const anoNaci = parseInt(String(fechaN).substring(0,4));
        let edad = ano - anoNaci;
        parseInt(edad);

        console.log(edad);
        if(ano > 1930 && edad > 17 && edad < 100){
            document.getElementById('error8').classList.remove('error');
            document.getElementById('error8').classList.add('correct');
            document.getElementById('error8').classList.remove('incorrect');
            comprobar['fecha'] = true;
        }else{
            document.getElementById('error8').classList.add('error');
            document.getElementById('error8').classList.remove('correct');
            document.getElementById('error8').classList.add('incorrect');
            comprobar['fecha'] = false;
        }
    }
}


const validarP = ()=>{
    const pass = document.getElementById('password');
    const pass2 = document.getElementById('password2');
    if(pass.value == pass2.value){
        document.getElementById('error6').classList.remove('error');
        document.getElementById('password2').classList.add('correct');
        document.getElementById('password2').classList.remove('incorrect');
        comprobar['contrasena'] = true;
    }else{
        document.getElementById('error6').classList.add('error');
        document.getElementById('password2').classList.add('incorrect');
        document.getElementById('password2').classList.remove('correct');
        comprobar['contrasena'] = false;
    }
}
/*Recorrer todos los inputs del formulario*/
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);  
});

/*No dejar que se envien campos vacios*/

    form.addEventListener('submit',(e)=>{
        //e= evento
        e.preventDefault();
        const terminos = document.getElementById('termino');
        if(comprobar.documento && comprobar.nombre && comprobar.apellido && comprobar.contrasena && comprobar.correo && comprobar.fecha && terminos.checked ){
            
            document.getElementById('exito').classList.add('succes');
            document.getElementById('uError').classList.remove('Perror');
            form.reset();
        }else{
            document.getElementById('uError').classList.add('Perror');
            document.getElementById('exito').classList.remove('succes');
        }
    });
    
    

const bot = document.getElementById('t');
bot.addEventListener('click',()=>{
   modal = document.getElementById('ter');
   modal.classList.replace('ter','abrir');
})

const bot2 = document.getElementById('close');
bot2.addEventListener('click',()=>{
   modal = document.getElementById('ter');
   modal.classList.replace('abrir','ter');
})