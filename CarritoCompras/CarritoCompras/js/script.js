const ProductoContent= document.getElementById("ProductoContent");
const vercarrito= document.getElementById("vercarrito");
const modalContainer= document.getElementById("modal-container");
let carrito=[];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className="card"
    content.innerHTML=`
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}</p>
        `;

    ProductoContent.append(content);
    let comprar=document.createElement("button");
    comprar.innerText="comprar";
    comprar.className="comprar";
    content.appendChild(comprar);


    comprar.addEventListener('click',()=>{
        carrito.push({ 
            id:product.id,
        img: product.img,
        nombre:product.nombre,
        precio: product.precio, })})});



vercarrito.addEventListener(`click`,()=>{
    const modalHeader=document.createElement("div");
    modalHeader.className="modal-header";
    modalHeader.innerHTML=`
    <h2 class="modal-header-title">COMPRAS DEL CARRITO</h2>`;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText="x";
    modalbutton.className= "modal-header-botton";
    modalbutton.addEventListener("click",()=>{
        modalContainer.style.display="none";});
    modalHeader.append(modalbutton);
    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className ="modal-content";
        carritoContent.innerHTML = `
            <img src "${product.img}">
            <h3>${product.nombre}</h3> 
            <p>${product.precio}</p>
            `;
        modalContainer.append(carritoContent);
    });

});