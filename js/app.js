const contenedorProductos=document.getElementById('contenedor-productos');
const contenedorCarrito=document.getElementById('carrito-contenedor');
const botonVaciar=document.getElementById('vaciar-carrito');
const contadorCarrito =document.getElementById('contadorCarrito');
const precioTotal =document.getElementById('precioTotal');

let carrito=[];

document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('carrito')){
        carrito=JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click',()=>{
    carrito.length=0;
    actualizarCarrito()
})


stockProductos.forEach((producto) => {
    const div=document.createElement('div')
    div.classList.add('producto')
    div.innerHTML=`
    <section class="presentacion">
        <div class="flex-item1">
            <h1>${producto.nombre}</h1>
            <p>${producto.descripcion}</p>
            <h2>$ ${producto.precio}</h2>
            <div>
                <button id="agregar${producto.id}" class="btn-principal" type ="submit">COMPRAR AHORA</button>
            </div>
        </div>
        <div class="flex-item2">
            <img src="${producto.img}" alt="">
        </div>
    </section>
    `
    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click',()=>{
        AgregarAlCarrito(producto.id)
    })
})

const AgregarAlCarrito=(prodId)=>{

    const existe=carrito.some(prod=>prod.id===prodId)

    if(existe){
        const prod=carrito.map(prod=>{
            if(prod.id===prodId){
                prod.cantidad++
            }
        })
    }else{

    
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}
actualizarCarrito()
}
const eliminarDelCarrito=(prodId)=>{
    const item = carrito.find((prod) => prod.id === prodId)
    const indice=carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}


const actualizarCarrito = () => {

    contenedorCarrito.innerHTML=""
    
    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio:$${producto.precio}</p>
        <p>Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito',JSON.stringify(carrito))

    })

    contadorCarrito.innerText=carrito.length
    precioTotal.innerText=carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0)
}

