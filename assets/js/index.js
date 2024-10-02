fetch('data/taller.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tituloPagina = document.getElementById('titulo_pagina');
        tituloPagina.innerHTML = data.titulo_pagina;

        const productos = data.productos;
        console.log(productos);

        const reseñas = data.reseñas
        console.log(reseñas);

        let productosHTML = '';
        for(i = 0; i < productos.length; i++) {
            console.log(productos[i].id);
            productosHTML += `<tr>
             <td>${productos[i].id}</td>
                <td>${productos[i].nombre}</td>
                <td>${productos[i].categoria}</td>
                <td>${productos[i].descripcion}</td>
                <td>${productos[i].precio}</td>
            </tr>`;
            
            

        }
       
        const tablaproductos = document.getElementById('tabla_productos');
        tablaproductos.innerHTML = productosHTML;

        



        const datos = document.getElementById('datos');
        datos.innerHTML = `<p id="nombre_pagina">Nombre: ${data.datos_tienda.nombre}</p>
                    <p id="direccion_pagina">Dirección: ${data.datos_tienda.direccion}</p>
                    <p id="telefono_pagina">Telefono: ${data.datos_tienda.telefono}</p>
                    <p id="correo_pagina">Correo: ${data.datos_tienda.correo}</p>
`;




    });