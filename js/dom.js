const contenedorProductos=document.getElementById('contenedor-productos');

document.getElementById("saludo").innerHTML = "Hola Mexico";
document.getElementById("lista").innerHTML=`
<ul>
    <li>Producto A</li>
    <li>Producto B</li>
    <li>Producto C</li>
</ul> `

let zapatos=[
    {marca:'NIKE',stock:8,precio:150.30},
    {marca:'PUMA',stock:7,precio:80.5},
    {marca:'ADIDAS',stock:6,precio:70.41},
    {marca:'CONVERSE',stock:8,precio:120.8}
]

zapatos.forEach((producto) => {
    const div=document.createElement('div')
    div.classList.add('producto')
    div.innerHTML=`
    <h4>Marca: <p class="producto-agregado">${producto.marca}</p></h4>
    <h4>Stock: <p class="producto-agregado">${producto.stock}</p></h4>
    <h4>Precio: <p class="producto-agregado">${producto.precio}</p></h4>
    `
    contenedorProductos.appendChild(div)
})

