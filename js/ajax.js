const lista=document.getElementById('lista');

fetch('./js/data.json')
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((producto) => {
            const li=document.createElement('li');
            li.innerHTML=`
            <p>${producto.id}</p>
            <p>${producto.Name}</p>
            <p>${producto.sex}</p>
            <p>${producto.age}</p>
            <hr>
            `
            lista.append(li);
        })
    })