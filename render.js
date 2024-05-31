const cards = [
  {
    id: "1",
    src: "media/mockup-fc750eaa.webp",
    alt: "doggy",
    title: "The Unicorn",
    text: "You know he's got his own personal stylist.",
    precio: "$9.99",
  },
  {
    id: "2",
    src: "media/mockup-6aeffeca.webp",
    alt: "doggy",
    title: "The Fashionista",
    text: "They exist!",
    precio: "$9.99",
  },
  {
    id: "3",
    src: "media/mockup-de719380.webp",
    alt: "doggy",
    title: "The Drooler",
    text: "Look at that crazy and cute face!",
    precio: "$9.99",
  },
  {
    id: "4",
    src: "media/mockup-954d2eff.webp",
    alt: "doggy",
    title: "The Player",
    text: "Catch this sticker today!",
    precio: "$9.99",
  },
  {
    id: "5",
    src: "media/mockup-306a1416.webp",
    alt: "doggy",
    title: "Scaredy Dog",
    text: "No surprise courage and him are best friends.",
    precio: "$9.99",
  },
  {
    id: "6",
    src: "media/mockup-f7e1805f.webp",
    alt: "doggy",
    title: "The Pee-er",
    text: "Public enemy No. 1",
    precio: "$9.99",
  },
  {
    id: "7",
    src: "media/mockup-be79c598.webp",
    alt: "doggy",
    title: "The Brawl",
    text: "Let's just say a lot of bones were broken...and chewed on.",
    precio: "$9.99",
  },
  {
    id: "8",
    src: "media/mockup-52c49241.webp",
    alt: "doggy",
    title: "Tip Toe Pub",
    text: "So sneaky...",
    precio: "$9.99",
  },
  {
    id: "9",
    src: "media/mockup-a979a43d.webp",
    alt: "doggy",
    title: "Dog Bath",
    text: "Scrub em clean!",
    precio: "$9.99",
  },
  {
    id: "10",
    src: "media/mockup-a0529cee.webp",
    alt: "doggy",
    title: "Tongue Wagger",
    text: "Tis a slobby one",
    precio: "$9.99",
  },
  {
    id: "11",
    src: "media/mockup-295f01d2.webp",
    alt: "doggy",
    title: "Angry Dog",
    text: "Isn't he cute when he's angry?",
    precio: "$9.99",
  },
];



function specificData(id) {
  return cards.filter(itemCard => itemCard.id === id);
}

function renderCards(cards) {
  const container = document.querySelector(".carta");
  container.innerHTML = ""; // Clear existing content
  
  
  
  cards.forEach((card) => {
    
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
    container.appendChild(cardElement);
  });
}

renderCards(cards);
