function createNavbar() {
    const navbar = document.getElementById("navbar");
    const navbarItems = document.getElementById("navbarItems");
    const enlaceBack = document.createElement("a");
    enlaceBack.href = "index.html";
    enlaceBack.style = "text-decoration: none"
    const logo = document.createElement("div");
    logo.className = "logo";
    const imagenLogo = document.createElement("img");
    imagenLogo.src = "media/pata.png"
    const textoLogo = document.createElement("p");
    textoLogo.textContent = "Doggy Stickers";
    const enlaceYourCard = document.createElement("a");
    enlaceYourCard.href = "carrito.html"
    const imagenCarrito = document.createElement("img");
    imagenCarrito.src = "media/carrito-de-compras.png";
    navbarItems.appendChild(enlaceBack);
    enlaceBack.appendChild(logo);
    logo.appendChild(imagenLogo);
    logo.appendChild(textoLogo);
    navbarItems.appendChild(enlaceYourCard);
    enlaceYourCard.appendChild(imagenCarrito);
  }
  createNavbar();