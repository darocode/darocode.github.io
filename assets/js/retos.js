//1. Saber la longitud de una palabra
const abrir = document.getElementById('reto');

abrir.addEventListener('click',()=>{
    const nombre = document.getElementById('palabra').value;
    const resultado = nombre.length;
    alert(`La longitud de la palabra es ${resultado}`)
})

//2. Cambiar color con el mouse
const contenedor = document.getElementById('color')
contenedor.addEventListener( 'mousemove',()=>{
    contenedor.classList.replace('cambiar_color','cambio')
})

contenedor.addEventListener( 'mouseleave',()=>{
    contenedor.classList.replace('cambio','cambiar_color')
})

//3. Cambiar color de fondo con boton
const cambio_boton= document.getElementById('boton')


cambio_boton.addEventListener('click',()=>{
    const fondo= document.getElementById('cambio_boton')

    fondo.classList.toggle('second')
})


//4. Que te avise cuando lo presiones y cuando lo sueltes
const sostener = document.getElementById('precionar')

sostener.onmousedown = function(){
    console.log("Me estas presionando")
}

sostener.onmouseup = function(){
    console.log("Me soltaste")
}


//5. Cambiar el backgroudn aleatoriamente
const fondo = document.getElementById('fondo')
const body = document.querySelector('body')

const colores=['#fbf6f7', '#a0db8e', '#85a8e0','#faf4f4']

fondo.addEventListener('click',colorFondo)

function colorFondo(){
    let indice=parseInt(Math.random()*colores.length)
    body.style.backgroundColor=colores[indice]
}




