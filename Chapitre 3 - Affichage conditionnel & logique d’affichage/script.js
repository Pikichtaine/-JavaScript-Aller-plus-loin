const contenedor=document.getElementById("produits");

let productos=[
    {nom:"Ordenador", prix:115},
    {nom:"Raton", prix:60},
    {nom:"teclado", prix:80},
    {nom:"Monitor", prix:100}
];

let filtrado=productos.filter(linea=>linea.prix<100)
if(filtrado.length===0){
    contenedor.innerText="No hay nada mi brother"
}else{
    spawn()
}

function spawn(){
    filtrado.forEach(lista=>{
    let parrafo=document.createElement("li")
    parrafo.innerText=`${lista.nom} - ${lista.prix} €`;
    contenedor.appendChild(parrafo)    
        })
}