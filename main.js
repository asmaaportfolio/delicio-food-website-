let menu = document.querySelector("#menu-bars");

let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// Toggle Search Form

let searchIcon = document.querySelector("#search-icon");

let searchForm = document.querySelector(".search-form");

let closeSearch = document.querySelector("#close-search");

// Toggle Cart Items

let cartIcon = document.querySelector("#cart-icon");

let cartItems = document.querySelector(".cart-items");

let closeCart = document.querySelector("#close-cart");

searchIcon.onclick = () => {
  searchForm.classList.add("active");
  cartItems.classList.remove("active");
};

closeSearch.onclick = () => {
  searchForm.classList.remove("active");
};

cartIcon.onclick = () => {
  cartItems.classList.add("active");
  searchForm.classList.remove("active");
};

closeCart.onclick = () => {
  cartItems.classList.remove("active");
};

// Add Products To Cart

let addToCartButtons = document.querySelectorAll(".add-to-cart");

let cartContent = document.querySelector(".cart-content");

let cartTotal = document.querySelector(".cart-total strong");

let total = 0;

addToCartButtons.forEach((button) => {
  button.onclick = (e) => {
    e.preventDefault();

    let product = button.closest(".box, .card");

    let productName = product.dataset.name;
    let productPrice = Number(product.dataset.price);
    let productImage = product.dataset.image;

    let emptyCart = cartContent.querySelector(".empty-cart");

    if (emptyCart) {
      emptyCart.remove();
    }

    let cartItem = document.createElement("div");

    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${productImage}" alt="${productName}">
      <div class="cart-item-info">
        <h4>${productName}</h4>
        <p>$${productPrice.toFixed(2)}</p>
      </div>
      <i class="fas fa-times remove-item"></i>
    `;

    cartContent.appendChild(cartItem);

    total += productPrice;

    cartTotal.textContent = `$${total.toFixed(2)}`;

    cartItems.classList.add("active");

    let removeItem = cartItem.querySelector(".remove-item");

    removeItem.onclick = () => {
      cartItem.remove();

      total -= productPrice;

      cartTotal.textContent = `$${total.toFixed(2)}`;

      if (cartContent.children.length === 0) {
        cartContent.innerHTML = `
          <p class="empty-cart">Your cart is empty.</p>
        `;
      }
    };
  };
});

// Swiper

let swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
});

// AOS

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: false,
  });
});