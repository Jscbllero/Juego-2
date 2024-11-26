//Variables globales
//guardar imaganes
const d = document;
let imgN1 = [
    {nombre: "dp", url: "Imagenes/dp.png"},
    {nombre: "Bp", url: "Imagenes/Bp.png"},
    {nombre: "logo1", url: "Imagenes/logo1.png"},
    {nombre: "spider", url: "Imagenes/spider.png"},
    {nombre: "wolwe", url: "Imagenes/wolwe.png"},
    {nombre: "Marvel", url: "Imagenes/Marvel.png"},
    {nombre: "dp", url: "Imagenes/dp.png"},
    {nombre: "Bp", url: "Imagenes/Bp.png"},
    {nombre: "logo1", url: "Imagenes/logo1.png"},
    {nombre: "spider", url: "Imagenes/spider.png"},
    {nombre: "wolwe", url: "Imagenes/wolwe.png"},
    {nombre: "Marvel", url: "Imagenes/Marvel.png"}
];
let tablero = d.querySelector(".tablero");

agregarImagenes();
//funciones para agregar imagenes al tablero
function agregarImagenes(){
    //recorrer con un forEach las imaganes
    imgN1.forEach((imagen, i)=>{
        let div = d.createElement("div");
        div.className = "col-3";
        let img = d.createElement("img");
        img.className = "img-fluid altura-img";
        img.id = i;
        img.src = "Imagenes/logo2.png";
        img.addEventListener("click", mostrarImg);
        div.appendChild(img);
        tablero.appendChild(div);
    });
}

//mostrar las imagenes ocultas

function mostrarImg() {
    let imgID = this.getAttribute("id");
    //alert(" #de imagen: "+imgID);
    this.src = imgN1[imgID].url;
    
}