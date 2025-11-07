const ProductoContent=document.getElementById("ProductoContent");
const VerCarrito=document.getElementById("vercarrito");
const modalContainer=document.getElementById("modal-container");
let carrito=[];

productos.forEach((product)=>{
    let content=document.createElement("div");
    content.className="card"
    content.innerHTML=`
        <img src="$(product.img")>
        <h3>$(producto.nombre</h3>
        <p>$(product.precio)</p>   
        `;
}
);

