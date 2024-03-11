//Crear función que devuelve los registros de la BBDD
const getProducts = async () => {
    try {
        // Lanzar la petición
        const res = await fetch("http://localhost:3000/api/v1/products");
        // Recoger productos y pasarlos a formato json
        const products = await res.json();
        // Volcar productos en pantalla
        printProducst(products);
    } catch (error) {
        console.log(error);
    }
};

// Función que recibe los productos y los imprime en pantalla
const printProducst = (products) => {
    // Seleccionar el div para imprimir registros
    const divApp = document.querySelector("#app");
    // Crear cabecera de la página
    const header = document.createElement("div");
    header.className = "header";
    // Crear título de la página
    const title = document.createElement("h1");
    title.textContent = "iPhones Restaurados";
    // Inyectar título al header
    header.appendChild(title);
    // Inyectar header a la capa app
    divApp.appendChild(header);

    // Crear el contenedor de los productos
    const productsContainer = document.createElement("div");
    productsContainer.className = "productsContainer";

    // Recorrer el array de productos
    for (const product of products) {
        // Crear el div donde irá el producto
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        // Crear / Insertar la imagen del producto
        const img = document.createElement("img");
        img.src = product.img;
        productDiv.appendChild(img);
        // Crear / Insertar el nombre del producto
        const productName = document.createElement("p");
        productName.textContent = product.productName;
        productDiv.appendChild(productName);
        // Crear / Insertar el precio del producto
        const productPrice = document.createElement("span");
        productPrice.className = "price";
        productPrice.textContent = product.price;
        productDiv.appendChild(productPrice);
        // Inyectar el producto en el contenedor
        productsContainer.appendChild(productDiv);
    }

    divApp.appendChild(productsContainer);

};

// Llamar a la función que obtiene los productos de la BBDD
getProducts();