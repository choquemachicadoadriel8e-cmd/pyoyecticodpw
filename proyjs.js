
let cart = [];
let total = 0;

function addToCart(productName, price) {
  const p = Number(price) || 0;
  cart.push({ name: productName, price: p });
  total += p;
  updateCart();
}


function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const totalPrice = document.getElementById('totalPrice');

  if (!cartItems || !totalPrice) return;

  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Bs${item.price}`;
    cartItems.appendChild(li);
  });

  totalPrice.textContent = total.toFixed(2);
}


function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}


function filterCategory(category) {
  const products = document.querySelectorAll('.product-card');
  products.forEach(product => {
    const cat = product.dataset.category || product.getAttribute('data-category');
    product.style.display = (category === 'todo' || cat === category) ? 'flex' : 'none';
  });
}


function searchProduct() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const searchValue = input.value.toLowerCase();
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    const nameEl = product.querySelector('h3');
    const productName = nameEl ? nameEl.textContent.toLowerCase() : '';
    product.style.display = productName.includes(searchValue) ? 'flex' : 'none';
  });
}


document.addEventListener('DOMContentLoaded', function() {
  updateCart();
});