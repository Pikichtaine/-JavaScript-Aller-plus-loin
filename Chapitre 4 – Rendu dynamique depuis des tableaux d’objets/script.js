let contenedor=document.getElementById("container")

let productos=[
    { nom: "PC portable", prix: 900, image: "pc.png" },
    { nom: "Clavier mécanique", prix: 45, image: "clavier.png" },
    { nom: "Souris sans fil", prix: 25, image: "souris.png" },
    { nom: "Écran 24 pouces", prix: 150, image: "ecran.png" },
    { nom: "Casque audio", prix: 60, image: "casque.png" },
    { nom: "Webcam HD", prix: 40, image: "webcam.png" },
    { nom: "Disque dur externe 1To", prix: 75, image: "disque_dur.png" },
    { nom: "Clé USB 64Go", prix: 20, image: "usb.png" },
    { nom: "Imprimante jet d’encre", prix: 120, image: "imprimante.png" },
    { nom: "Tapis de souris RGB", prix: 30, image: "tapis.png" },
    { nom: "Microphone studio", prix: 85, image: "micro.png" },
    { nom: "Chaise gamer", prix: 200, image: "chaise.png" },
    { nom: "Table de bureau", prix: 3000, image: "bureau.png" },
    { nom: "Enceinte Bluetooth", prix: 50, image: "enceinte.png" },
    { nom: "Chargeur universel", prix: 20, image: "chargeur.png" }
];


productos.forEach(lista=>{
    let carte=document.createElement("div");
    carte.className="carte";
    carte.innerHTML=`
    <img src="medias/${lista.image}" alt="fotito">
    <h3>${lista.nom}</h3>
    <p>Prix: ${lista.prix}€</p>
    `;
  contenedor.appendChild(carte)  
})

