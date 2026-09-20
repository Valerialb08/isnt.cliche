/* =========================================================
   ISN'T CLICHÉ — JAVASCRIPT
   ========================================================= */


/* =========================================================
   PRODUCT DATA
   Add new products here
   ========================================================= */

const products = [
  {
    name: "Ajolote de Peluche",
    image: "images/JPG/IMG_8066.JPG",
    inStock: false,
    specification: "Lana Chenille",
    description: "Personalizable",
    category: "amigurumis"
  },
  {
    name: "Ramo de Flores",
    image: "images/HEIC to PNG/flores_dory.png",
    inStock: false,
    specification: "Flores variadas",
    description: "Personalizable",
    category: "flores"
  },
  {
    name: "Rosa",
    image: "images/HEIC to PNG/flor_amarilla.png",
    inStock: false,
    specification: "Rosa individual",
    description: "Personalizable",
    category: "flores"
  },
  {
    name: "Dinosaurio",
    image: "images/HEIC to PNG/dinosaurio_party.png",
    inStock: false,
    specification: "Amigurumi",
    description: "Personalizable",
    category: "amigurumis"
  },
  {
    name: "Baymax",
    image: "images/HEIC to PNG/baymax.png",
    inStock: false,
    specification: "Lana Chenille",
    description: "Personalizable",
    category: "amigurumis"
  },
  {
    name: "Cartera Beige",
    image: "images/JPG/Cartera_beige.jpg",
    inStock: true,
    specification: "Granny Squares",
    description: "Personalizable",
    category: "carteras"
  },
  {
    name: "Snoopy Piloto",
    image: "images/JPG/snoopy_piloto.JPG",
    inStock: false,
    specification: "Llavero",
    description: "Personalizable",
    category: "amigurumis"
  },
  {
    name: "Dinosaurio de Peluche",
    image: "images/JPG/IMG_7891.jpg",
    inStock: false,
    specification: "Lana Chenille",
    description: "Personalizable",
    category: "amigurumis"
  },
  {
    name: "Kirby",
    image: "images/JPG/IMG_7994.jpg",
    inStock: false,
    specification: "Figura de Decoración",
    description: "Personalizable",
    category: "amigurumis"
  },
  {
    name: "Pato de Peluche",
    image: "images/JPG/IMG_8067.JPG",
    inStock: false,
    specification: "Lana Chenille",
    description: "Personalizable",
    category: "amigurumis"
  },
  {
    name: "Tote bag para Playa",
    image: "images/JPG/tote_bag.JPG",
    inStock: false,
    specification: "Amarillo",
    description: "Personalizable",
    category: "carteras"
  },
  {
    name: "Corazón de Peluche",
    image: "images/JPG/IMG_7980.JPG",
    inStock: false,
    specification: "Lana Chenille",
    description: "Personalizable",
    category: "amigurumis"
  },
  {
    name: "Snoopy",
      image: "images/JPG/IMG_7985.JPG",
      inStock: false,
      specification: "Decoración",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Top Celeste",
      image: "images/JPG/top_celeste.jpg",
      inStock: true,
      specification: "Talla XS-S",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Sirena",
      image: "images/JPG/top_azul.jpg",
      inStock: true,
      specification: "Talla XS-S",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Tortuguita",
      image: "images/HEIC to PNG/tortuga.png",
      inStock: false,
      specification: "Amarillo y Verde",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Foca Blanca",
      image: "images/HEIC to PNG/foca.png",
      inStock: false,
      specification: "Lana Chenille",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Rosa Roja",
      image: "images/HEIC to PNG/rosa.png",
      inStock: false,
      specification: "Rosa de Pétalos",
      description: "Personalizable",
      category: "flores"
  },
  {
    name: "Limoncito",
      image: "images/HEIC to PNG/limon_peluche.png",
      inStock: false,
      specification: "Lana Chenille",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Flor de Llavero",
      image: "images/HEIC to PNG/flor_keychain.png",
      inStock: false,
      specification: "Llavero",
      description: "Personalizable",
      category: "flores"
  },
  {
    name: "Snoopy Tripulante",
      image: "images/HEIC to PNG/snoopy_1.png",
      inStock: false,
      specification: "Llavero",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Goku",
      image: "images/HEIC to PNG/goku.png",
      inStock: false,
      specification: "con Birrete",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Tulipán",
      image: "images/HEIC to PNG/red_tulipan.png",
      inStock: false,
      specification: "Rojo",
      description: "Personalizable",
      category: "flores"
  },
  {
    name: "Bolso Cruzado",
      image: "images/HEIC to PNG/cartera_larga.png",
      inStock: true,
      specification: "Marrón",
      description: "Personalizable",
      category: "carteras"
  },
  {
    name: "Fantasma de Peluche",
      image: "images/HEIC to PNG/fantasma.png",
      inStock: false,
      specification: "Lana Chenille",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Pulsera de Spiderman",
      image: "images/JPG/miles_gwen.jpg",
      inStock: false,
      specification: "Miles Morales y Gwen Stacy",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Spiderman",
      image: "images/HEIC to PNG/spiderman_close.png",
      inStock: false,
      specification: "Llavero",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Porta Vasos de Osos",
      image: "images/HEIC to PNG/cup_holder_oso.png",
      inStock: false,
      specification: "Color Terracota ",
      description: "Personalizable",
      category: "casa"
  },
  {
    name: "Mantel de Mesa",
      image: "images/HEIC to PNG/funiture.png",
      inStock: false,
      specification: "Color Terracota",
      description: "Personalizable",
      category: "casa"
  },
  {
    name: "Fantasmita",
      image: "images/HEIC to PNG/fantasma_llavero.png",
      inStock: false,
      specification: "Llavero",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Limón",
      image: "images/HEIC to PNG/limon.png",
      inStock: false,
      specification: "Llavero",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Wolverine",
      image: "images/HEIC to PNG/wolverine.png",
      inStock: false,
      specification: "Llavero",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Vincha/Diadema Gris",
      image: "images/HEIC to PNG/headband_gris_3.png",
      inStock: false,
      specification: "Triple Vuelta",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Ballenita",
      image: "images/HEIC to PNG/ballena_keychain.png",
      inStock: false,
      specification: "Llavero",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Chimuelo",
      image: "images/HEIC to PNG/chimuelo.png",
      inStock: false,
      specification: "Alas Móviles",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Cartera Caracol",
      image: "images/HEIC to PNG/cartera_lyna.png",
      inStock: false,
      specification: "Azul con Broche",
      description: "Personalizable",
      category: "carteras"
  },
  {
    name: "Brallete Amarillo y Blanco",
      image: "images/HEIC to PNG/tops_natalia.png",
      inStock: false,
      specification: "Talla Personalizable",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Estrella de Peluche",
      image: "images/JPG/estrella.JPG",
      inStock: false,
      specification: "Lana Chenille",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Top Menta",
      image: "images/JPG/top_ale_verde.JPG",
      inStock: false,
      specification: "Talla Personalizable",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Amarillo Pastel",
      image: "images/JPG/top_amarillo.JPG",
      inStock: true,
      specification: "Talla XS-S",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Osito Cariñosito",
      image: "images/JPG/osito_cariñosito.JPG",
      inStock: false,
      specification: "Lana Chenille",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Top Blanco",
      image: "images/JPG/top_ale_sol.JPG",
      inStock: false,
      specification: "Talla Personalizable",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Porta vasos de Mandala",
      image: "images/JPG/porta_vaso_mandala.JPG",
      inStock: false,
      specification: "Verde",
      description: "Personalizable",
      category: "casa"
  },
  {
    name: "Huevo Estrellado de Peluche",
      image: "images/JPG/huevo.JPG",
      inStock: false,
      specification: "Lana Chenille",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Schnauzer",
      image: "images/JPG/lucas.JPG",
      inStock: false,
      specification: "Recuerdo Conmemorativo",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Top Beige",
      image: "images/JPG/top_beige.JPG",
      inStock: false,
      specification: "Talla Personalizable",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Lila",
      image: "images/JPG/top_lila.JPG",
      inStock: true,
      specification: "Talla XS-S",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Verde Ondulado",
      image: "images/JPG/top_tricot_verde.JPG",
      inStock: true,
      specification: "Talla S-M",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Vincha/Diadema",
      image: "images/JPG/vincha_roja.JPG",
      inStock: true,
      specification: "Rojo Floreado",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Bandana",
      image: "images/JPG/bandana_amarillo.JPG",
      inStock: true,
      specification: "Amarillo",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top de Granny Squares",
      image: "images/JPG/top_granny.JPG",
      inStock: true,
      specification: "Talla XXS-XS",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Backless Menta",
      image: "images/JPG/top_menta_backless.JPG",
      inStock: true,
      specification: "Talla XS-S",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Backless de Lentejuelas",
      image: "images/JPG/backless_lentejuelas.JPG",
      inStock: true,
      specification: "Talla XXS-XS",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Verde",
      image: "images/JPG/top_verde.JPG",
      inStock: true,
      specification: "Talla XS-S",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Lila Brillante",
      image: "images/JPG/top_lila_brillos.JPG",
      inStock: true,
      specification: "Talla XS-S",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Bandana Beige",
      image: "images/JPG/top_bandana.JPG",
      inStock: true,
      specification: "Talla XXS-XS",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Strapless Azul",
      image: "images/JPG/top_strapless.JPG",
      inStock: true,
      specification: "Talla XS-S",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Negro",
      image: "images/JPG/top_negro.JPG",
      inStock: true,
      specification: "Talla S-M",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Vincha/Diadema",
      image: "images/JPG/vincha_beige.JPG",
      inStock: true,
      specification: "Beige Floreado",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Top Multicolor",
      image: "images/JPG/top_multi.JPG",
      inStock: true,
      specification: "Talla XS-S",
      description: "Personalizable",
      category: "ropa"
  },
  {
    name: "Pato Personalizado",
      image: "images/HEIC to PNG/pato_anime.png",
      inStock: false,
      specification: "Lana Chenille",
      description: "Personalizable",
      category: "amigurumis"
  },
  {
    name: "Top Celeste y Blanco",
      image: "images/JPG/Top_celeste_blanco.jpg",
      inStock: true,
      specification: "Colores Alternados",
      description: "Personalizable",
      category: "ropa"
  },
];


/* =========================================================
   PAGE SETUP
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  setupCatalog();
  setupCarousel();
  setupMissingImages();
  setupActiveNavigation();
  setupEmailLink();
  setupProductPreview();
});


/* =========================================================
   AUTOMATIC CATALOG
   ========================================================= */
let previewProducts = [];
let previewIndex = 0;

function setupCatalog() {
  const catalogGrid = document.getElementById("catalogGrid");
  const filterButtons = document.querySelectorAll(".filter-button");
  const availabilityButtons = document.querySelectorAll(".availability-button");

  if (!catalogGrid) return;

  let currentCategory = "all";
  let currentAvailability = "todo";

  function renderProducts() {
    catalogGrid.innerHTML = "";

    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        currentCategory === "all" ||
        product.category === currentCategory;

      const matchesAvailability =
        currentAvailability === "todo" ||
        (currentAvailability === "disponible" && product.inStock) ||
        (currentAvailability === "encargo" && !product.inStock);

      return matchesCategory && matchesAvailability;
    });

    previewProducts = filteredProducts;

    filteredProducts.forEach((product, index) => {
      const card = document.createElement("article");

      card.className = "product-card";
      
      const availabilityText =
        product.inStock
          ? "✓ Disponible"
          : "Por encargo";

      const availabilityClass =
        product.inStock
          ? "available"
          : "made-to-order";

      card.innerHTML = `
        <div class="product-image">
          <img
            src="${product.image}"
            alt="${product.name}"
          >
        </div>

        <div class="product-info">
          <h2>${product.name}</h2>

          <p class="product-availability ${availabilityClass}">
            ${availabilityText}
          </p>

          <p class="product-specification">
            ${product.specification}
          </p>

          <p class="product-description">
            ${product.description}
          </p>
        </div>
      `;

      card.addEventListener("click", () => {
        openProductPreview(index);
      });

      catalogGrid.appendChild(card);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      currentCategory = button.dataset.filter;

      renderProducts();
    });
  });

  availabilityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      availabilityButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      currentAvailability = button.dataset.availability;

      renderProducts();
    });
  });

  renderProducts();
}

/* =========================================================
   PRODUCT PREVIEW
   ========================================================= */

function setupProductPreview() {
  const preview = document.getElementById("productPreview");
  const closeButton = document.getElementById("previewClose");
  const backdrop = document.getElementById("previewBackdrop");
  const previous = document.getElementById("previewPrev");
  const next = document.getElementById("previewNext");
  const content = document.getElementById("previewContent");

  if (!preview) return;

  closeButton.addEventListener("click", closeProductPreview);
  backdrop.addEventListener("click", closeProductPreview);

  previous.addEventListener("click", () => {
    changePreview(-1);
  });

  next.addEventListener("click", () => {
    changePreview(1);
  });

  document.addEventListener("keydown", (event) => {
    if (!preview.classList.contains("open")) return;

    if (event.key === "Escape") {
      closeProductPreview();
    }

    if (event.key === "ArrowLeft") {
      changePreview(-1);
    }

    if (event.key === "ArrowRight") {
      changePreview(1);
    }
  });


  /* SWIPE ON PHONE */

  let touchStartX = 0;
  let touchEndX = 0;

  content.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  });

  content.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;

    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      changePreview(1);
    } else {
      changePreview(-1);
    }
  });
}


function openProductPreview(index) {
  previewIndex = index;

  updateProductPreview();

  const preview = document.getElementById("productPreview");

  preview.classList.add("open");

  document.body.classList.add("preview-open");
}


function closeProductPreview() {
  const preview = document.getElementById("productPreview");

  preview.classList.remove("open");

  document.body.classList.remove("preview-open");
}


function changePreview(direction) {
  if (!previewProducts.length) return;

  previewIndex += direction;

  if (previewIndex >= previewProducts.length) {
    previewIndex = 0;
  }

  if (previewIndex < 0) {
    previewIndex = previewProducts.length - 1;
  }

  const content = document.getElementById("previewContent");

  content.classList.add("switching");

  setTimeout(() => {
    updateProductPreview();

    content.classList.remove("switching");
  }, 180);
}


function updateProductPreview() {
  const product = previewProducts[previewIndex];

  if (!product) return;

  const image =
    document.getElementById("previewImage");

  const name =
    document.getElementById("previewName");

  const availability =
    document.getElementById("previewAvailability");

  const specification =
    document.getElementById("previewSpecification");

  const description =
    document.getElementById("previewDescription");


  image.src = product.image;
  image.alt = product.name;

  name.textContent = product.name;

  specification.textContent =
    product.specification;

  description.textContent =
    product.description;


  if (product.inStock) {
    availability.textContent = "✓ Disponible";

    availability.className =
      "preview-availability available";
  } else {
    availability.textContent = "Por encargo";

    availability.className =
      "preview-availability made-to-order";
  }
}

/* =========================================================
   CAROUSEL
   ========================================================= */

function setupCarousel() {
  const track = document.getElementById("carouselTrack");
  if (!track) return;

  const cards = Array.from(track.querySelectorAll(".carousel-card"));
  const previous = document.querySelector(".carousel-prev");
  const next = document.querySelector(".carousel-next");

  if (!cards.length) return;

  let index = 0;

  function visibleCards() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 850) return 2;
    return 3;
  }

  function updateCarousel() {
    const visible = visibleCards();
    const maxIndex = Math.max(0, cards.length - visible);

    index = Math.min(index, maxIndex);

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;

    track.style.transform =
      `translateX(-${index * (cardWidth + gap)}px)`;
  }

  next?.addEventListener("click", () => {
    const visible = visibleCards();
    const maxIndex = Math.max(0, cards.length - visible);

    index = index >= maxIndex ? 0 : index + 1;

    updateCarousel();
  });

  previous?.addEventListener("click", () => {
    const visible = visibleCards();
    const maxIndex = Math.max(0, cards.length - visible);

    index = index <= 0 ? maxIndex : index - 1;

    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel();

  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  });

  track.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;

    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) < 50) return;

    const visible = visibleCards();
    const maxIndex = Math.max(0, cards.length - visible);

    if (distance > 0) {
      // swipe LEFT → next
      index = Math.min(index + 1, maxIndex);
    } else {
      // swipe RIGHT → previous
      index = Math.max(index - 1, 0);
    }

    updateCarousel();
  });
}


/* =========================================================
   MISSING IMAGE PLACEHOLDERS
   ========================================================= */

function setupMissingImages() {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("error", () => {
      const wrapper = img.parentElement;

      if (!wrapper) return;

      wrapper.classList.add("image-placeholder");

      img.style.display = "none";

      if (!wrapper.querySelector(".placeholder-text")) {
        const label = document.createElement("span");

        label.className = "placeholder-text";
        label.textContent = "SUBE TU FOTO";

        wrapper.appendChild(label);
      }
    });
  });
}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function setupActiveNavigation() {
  const links = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );

  if (!links.length) return;

  const sections = [
    ...document.querySelectorAll("main section[id]")
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") ===
              `#${entry.target.id}`
          );
        });
      });
    },

    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

/* =========================================================
   EMAIL LINK
   ========================================================= */

function setupEmailLink() {
  const emailLink = document.getElementById("emailLink");

  if (!emailLink) return;

  const email = "isnt.cliche@gmail.com";
  const subject = "";
  const body = "Hi!...";

  const isAppleMobile =
    /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isAppleMobile) {
    emailLink.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    emailLink.href =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    emailLink.target = "_blank";
    emailLink.rel = "noopener";
  }
}

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 120) {
    // scrolling DOWN
    navbar.classList.add("nav-hidden");
  } else {
    // scrolling UP
    navbar.classList.remove("nav-hidden");
  }

  lastScrollY = currentScrollY;
});
