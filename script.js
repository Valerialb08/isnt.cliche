/* =========================================================
   ISN'T CLICHÉ — JAVASCRIPT v=4/2
   ========================================================= */


/* =========================================================
   PRODUCT DATA
   Add new products here
   ========================================================= */

let products = [];

async function loadProducts() {
  const response = await fetch("products.json");

  if (!response.ok) {
    throw new Error("Could not load products.json");
  }

  products = await response.json();
}


/* =========================================================
   PAGE SETUP
   ========================================================= */

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await loadProducts();
  } catch (error) {
    console.error("Product loading error:", error);
  }

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

  /* SWIPE / DRAG PRODUCT PREVIEW */

  let startX = 0;

  content.addEventListener("pointerdown", (event) => {
    startX = event.clientX;
    content.setPointerCapture(event.pointerId);
  });

  content.addEventListener("pointerup", (event) => {
    const distance = startX - event.clientX;

    if (Math.abs(distance) < 30) return;

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


  const wrapper = image.parentElement;

/* RESET PREVIEW IMAGE */
  image.style.display = "block";

  if (wrapper) {
    wrapper.classList.remove("image-placeholder");

    const placeholder = wrapper.querySelector(".placeholder-text");

    if (placeholder) {
      placeholder.remove();
    }
  }

  /* LOAD CURRENT PRODUCT IMAGE */
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

  const carouselWindow = track.closest(".carousel-window");
  if (!carouselWindow) return;

  const cards = Array.from(track.querySelectorAll(".carousel-card"));
  const previous = document.querySelector(".carousel-prev");
  const next = document.querySelector(".carousel-next");

  if (!cards.length) return;

  let index = 0;

  function visibleCards() {
    if (window.innerWidth <= 850) return 1;
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

  /* SWIPE / DRAG CAROUSEL */

 /* TOUCH SWIPE CAROUSEL */

  let touchStartX = 0;
  let touchStartY = 0;

  carouselWindow.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    },
    { passive: true }
  );

  carouselWindow.addEventListener(
    "touchend",
    (event) => {
      const touchEndX = event.changedTouches[0].clientX;
      const touchEndY = event.changedTouches[0].clientY;

      const distanceX = touchStartX - touchEndX;
      const distanceY = touchStartY - touchEndY;

      /* Normal vertical page scroll */
      if (Math.abs(distanceY) > Math.abs(distanceX)) return;

      /* Ignore tiny swipes */
      if (Math.abs(distanceX) < 20) return;

      const visible = visibleCards();
      const maxIndex = Math.max(0, cards.length - visible);

      if (distanceX > 0) {
        index = index >= maxIndex ? 0 : index + 1;
      } else {
        index = index <= 0 ? maxIndex : index - 1;
      }

      updateCarousel();
    },
    { passive: true }
  );
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
