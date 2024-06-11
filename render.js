const cards = [
    {
      id: "1",
      src: "media/mockup-fc750eaa.webp",
      alt: "doggy",
      title: "The Unicorn",
      text: "You know he's got his own personal stylist.",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
    },
    {
      id: "2",
      src: "media/mockup-6aeffeca.webp",
      alt: "doggy",
      title: "The Fashionista",
      text: "They exist!",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
    },
    {
      id: "3",
      src: "media/mockup-de719380.webp",
      alt: "doggy",
      title: "The Drooler",
      text: "Look at that crazy and cute face!",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
    },
    {
      id: "4",
      src: "media/mockup-954d2eff.webp",
      alt: "doggy",
      title: "The Player",
      text: "Catch this sticker today!",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
    },
    {
      id: "5",
      src: "media/mockup-306a1416.webp",
      alt: "doggy",
      title: "Scaredy Dog",
      text: "No surprise courage and him are best friends.",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
    },
    {
      id: "6",
      src: "media/mockup-f7e1805f.webp",
      alt: "doggy",
      title: "The Pee-er",
      text: "Public enemy No. 1",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
    },
    {
      id: "7",
      src: "media/mockup-be79c598.webp",
      alt: "doggy",
      title: "The Brawl",
      text: "Let's just say a lot of bones were broken...and chewed on.",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
    },
    {
      id: "8",
      src: "media/mockup-52c49241.webp",
      alt: "doggy",
      title: "Tip Toe Pub",
      text: "So sneaky...",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
    },
    {
      id: "9",
      src: "media/mockup-a979a43d.webp",
      alt: "doggy",
      title: "Dog Bath",
      text: "Scrub em clean!",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
    },
    {
      id: "10",
      src: "media/mockup-a0529cee.webp",
      alt: "doggy",
      title: "Tongue Wagger",
      text: "Tis a slobby one",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
    },
    {
      id: "11",
      src: "media/mockup-295f01d2.webp",
      alt: "doggy",
      title: "Angry Dog",
      text: "Isn't he cute when he's angry?",
      precio: "$9.99",
      imagenes: ["media/mockup-954d2eff.webp","media/mockup-954d2eff.webp", "media/mockup-018b28ad.webp", "media/mockup-932d9c02.webp", "media/mockup-46220b5c.webp", "media/mockup-b707691c.webp", "media/mockup-5722417c.webp"]
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
        cardLink.href = `theplayer.html?id=${card.id}`;
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
  let arrayImagenes = card.imagenes;
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
for (let index = 0; index < card; index++) {
  if (index === 0) {
    let imagenPrincipal = document.createElement("img");
    imagenPrincipal.src = card.imagenes[0]; 
    imagenTop.appendChild(imagenPrincipal);
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

}