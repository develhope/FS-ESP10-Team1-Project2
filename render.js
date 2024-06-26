const cards = [
    {
      id: "1",
      src: "media/theUnicorn1.webp",
      alt: "doggy",
      title: "The Unicorn",
      text: "They exist!",
      precio: "$9.99",
      imagenes: ["media/theUnicorn1.webp","media/theUnicorn1.webp", "media/theUnicorn2.webp", "media/theUnicorn3.webp", "media/theUnicorn4.webp", "media/theUnicorn5.webp", "media/theUnicorn6.webp"]
    },
    {
      id: "2",
      src: "media/theFashionista1.webp",
      alt: "doggy",
      title: "The Fashionista",
      text: "You know he's got his own personal stylist.",
      precio: "$9.99",
      imagenes: ["media/theFashionista1.webp","media/theFashionista1.webp", "media/theFashionista2.webp", "media/theFashionista3.webp", "media/theFashionista4.webp", "media/theFashionista5.webp", "media/theFashionista6.webp"]
    },
    {
      id: "3",
      src: "media/theDrooler1.webp",
      alt: "doggy",
      title: "The Drooler",
      text: "Look at that crazy and cute face!",
      precio: "$9.99",
      imagenes: ["media/theDrooler1.webp","media/theDrooler1.webp", "media/theDrooler2.webp", "media/theDrooler3.webp", "media/theDrooler4.webp", "media/theDrooler5.webp", "media/theDrooler6.webp"]
    },
    {
      id: "4",
      src: "media/theplayer1.webp",
      alt: "doggy",
      title: "The Player",
      text: "Catch this sticker today!",
      precio: "$9.99",
      imagenes: ["media/thePlayer1.webp","media/thePlayer1.webp", "media/thePlayer2.webp", "media/thePlayer3.webp", "media/theplayer4.webp", "media/theplayer5.webp", "media/theplayer6.webp"]
    },
    {
      id: "5",
      src: "media/scaredyDog1.webp",
      alt: "doggy",
      title: "Scaredy Dog",
      text: "No surprise courage and him are best friends.",
      precio: "$9.99",
      imagenes: ["media/scaredyDog1.webp","media/scaredyDog1.webp", "media/scaredyDog2.webp", "media/scaredyDog3.webp", "media/scaredyDog4.webp", "media/scaredyDog5.webp", "media/scaredyDog6.webp"]
    },
    {
      id: "6",
      src: "media/thePee-er1.webp",
      alt: "doggy",
      title: "The Pee-er",
      text: "Public enemy No. 1",
      precio: "$9.99",
      imagenes: ["media/thePee-er1.webp","media/thePee-er1.webp", "media/thePee-er2.webp", "media/thePee-er3.webp", "media/thePee-er4.webp", "media/thePee-er5.webp", "media/thePee-er6.webp"]
    },
    {
      id: "7",
      src: "media/theBrawl1.webp",
      alt: "doggy",
      title: "The Brawl",
      text: "Let's just say a lot of bones were broken...and chewed on.",
      precio: "$9.99",
      imagenes: ["media/theBrawl1.webp","media/theBrawl1.webp", "media/theBrawl2.webp", "media/theBrawl3.webp", "media/theBrawl4.webp", "media/theBrawl5.webp", "media/theBrawl6.webp"]
    },
    {
      id: "8",
      src: "media/tipToePub1.webp",
      alt: "doggy",
      title: "Tip Toe Pub",
      text: "So sneaky...",
      precio: "$9.99",
      imagenes: ["media/tipToePub1.webp","media/tipToePub1.webp", "media/tipToePub2.webp", "media/tipToePub3.webp", "media/tipToePub4.webp", "media/tipToePub5.webp", "media/tipToePub6.webp"]
    },
    {
      id: "9",
      src: "media/dogBath1.webp",
      alt: "doggy",
      title: "Dog Bath",
      text: "Scrub em clean!",
      precio: "$9.99",
      imagenes: ["media/dogBath1.webp","media/dogBath1.webp", "media/dogBath2.webp", "media/dogBath3.webp", "media/dogBath4.webp", "media/dogBath5.webp", "media/dogBath6.webp"]
    },
    {
      id: "10",
      src: "media/tongueWagger1.webp",
      alt: "doggy",
      title: "Tongue Wagger",
      text: "Tis a slobby one",
      precio: "$9.99",
      imagenes: ["media/tongueWagger1.webp","media/tongueWagger1.webp", "media/tongueWagger2.webp", "media/tongueWagger3.webp", "media/tongueWagger4.webp", "media/tongueWagger5.webp", "media/tongueWagger6.webp"]
    },
    {
      id: "11",
      src: "media/angryDog1.webp",
      alt: "doggy",
      title: "Angry Dog",
      text: "Isn't he cute when he's angry?",
      precio: "$9.99",
      imagenes: ["media/angryDog1.webp","media/angryDog1.webp", "media/angryDog2.webp", "media/angryDog3.webp", "media/angryDog4.webp", "media/angryDog5.webp", "media/angryDog6.webp"]
    },
  ];
  function saveLocalStorage() {
    localStorage.setItem("cards", JSON.stringify(cards));
  }
  saveLocalStorage();
  
  
  function renderCards(cards) {
    const container = document.querySelector(".card-container");
    container.innerHTML = ""; // Clear existing content
    
    
    
    cards.forEach((card) => {
        const cardLink = document.createElement("a");
        cardLink.href = `cards.html?id=${card.id}`;
        cardLink.style = "text-decoration: none"
        const cardElement = document.createElement("div");
        
    
        cardElement.className = "card";
        cardElement.innerHTML = `
            <div class="image-container">
            <img src="${card.src}" class="card-img-top" alt="${card.alt}">
            </div>
            <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.text}</p>
            <div class="precio">${card.precio}</div>
            </div>
        `;
        cardLink.appendChild(cardElement)
        container.appendChild(cardLink);
    });
  }
function cargarCard(id) {
  let card = cards[id-1];
  let imagenTop = document.getElementById("principal");
  let divCarrousel1 = document.getElementById("carousel-item");
  let divCarrousel2 = document.getElementById("carrouselDiv2");
  // let imagenPrincipal = document.createElement("img");
  // imagenPrincipal.src = card.imagenes[0]; 
  // imagen1.appendChild(imagenPrincipal);
  // let imagenCarrousel1 = document.createElement("img");
  // imagenPrincipal.src = card.imagenes[1]; 
  // imagen1.appendChild(imagenCarrousel1);
  // let imagenCarrousel2 = document.createElement("img");
  // imagenPrincipal.src = card.imagenes[2]; 
  // imagen1.appendChild(imagenCarrousel2);
  // let imagenCarrousel3 = document.createElement("img");
  // imagenPrincipal.src = card.imagenes[3]; 
  // imagen1.appendChild(imagenCarrousel3);
  // let imagenCarrousel4 = document.createElement("img");
  // imagenPrincipal.src = card.imagenes[4]; 
  // imagen1.appendChild(imagenCarrousel4);
  // let imagenCarrousel5 = document.createElement("img");
  // imagenPrincipal.src = card.imagenes[5]; 
  // imagen1.appendChild(imagenCarrousel5);
  // let imagenCarrousel6 = document.createElement("img");
  // imagenPrincipal.src = card.imagenes[5]; 
  // imagen1.appendChild(imagenCarrousel6);

  //esto para cargar las imagenes de cada carta, dependiendo del id que tenga la funcion como parametro
for (let index = 0; index < card.imagenes.length; index++) {
  if (index === 0) {
    imagenTop.src = card.imagenes[0]; 
  } else if (index < 5) {
    let imagenCarrousel = document.createElement("img");
    imagenCarrousel.src = card.imagenes[index]; 
    divCarrousel1.appendChild(imagenCarrousel)
  } else {
    let imagenCarrousel2 = document.createElement("img");
    imagenCarrousel2.src = card.imagenes[index]; 
    divCarrousel2.appendChild(imagenCarrousel2);
  }{
  }
  
}
//esto para cargar los contenidos, dependiendo del id que tenga la funcion como parametro
let contenidos = document.getElementById("info");
let quantityInput = document.getElementById("Quantity");
let titulo = document.createElement("h2");
titulo.textContent = card.title;
let frase = document.createElement("h4");
frase.textContent = card.text;
let precio = document.createElement("h3");
precio.textContent = card.precio;
precio.id = "precio";

contenidos.insertBefore(titulo, quantityInput);
contenidos.insertBefore(frase, quantityInput);
contenidos.insertBefore(precio, quantityInput);
//aqui se insertan estos contenidos antes del input "quantity"
}
//esto ajusta el precio, en funcion del tamaño del sticker que quiera el usuario
function cambiarPrecio() {
let params = new URLSearchParams(window.location.search);
let id = params.get('id');
let card = cards[id-1];
let tamaño = document.getElementById("size");
let precio = document.getElementById("precio");
switch (tamaño.value) {
  case "1":
    precio.textContent = card.precio;
    break;
    case "2":
    precio.textContent = 10.99;
    break;
    case "3":
    precio.textContent = 11.99;
    break;
    default:
    precio.textContent = card.precio;
    
    break;
}

}
function addToCard(id) {
  let tamaño = document.getElementById("size");
  let tamañoSeleccionado = tamaño.options[tamaño.selectedIndex].text;
  let quantity = document.getElementById("cantidad");
  let precio = document.getElementById("precio");
  const params = new URLSearchParams(window.location.search);
  const producto = params.get("id");
  const arrayTotalJs = JSON.parse(localStorage.getItem("cards"));
  const arrayBayJs = JSON.parse(localStorage.getItem("totalProduct")) ? JSON.parse(localStorage.getItem("totalProduct")): [];
  const productoToBay = arrayTotalJs.filter((element) => element.id == producto);

 console.log(productoToBay[0]);

  const arrayToBay = [...arrayBayJs, productoToBay[0]];

  localStorage.setItem("totalProduct", JSON.stringify(arrayToBay));
  
  arrayTotalJs.forEach((el) =>{
    if (el.id == producto) {
      el.size = tamañoSeleccionado;
      el.price = precio.textContent;
      el.quantity = quantity.value;
    } 
});


      

 }
 
  
