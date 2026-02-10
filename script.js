const products = [
      { id: 1, name: "Boat Immortal 121", price: 999, img: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018192895_437Wx649H_202307011319021.jpeg", desc: "High-quality wireless headphones with deep bass and long battery life." },
      { id: 2, name: "Realme watch", price: 1299, img: "https://www.jiomart.com/images/product/original/491946586/realme-rma161-classic-strap-smart-watch-black-14-sports-mode-water-resistant-digital-o491946586-p590704862-0-202109061409.jpeg?im=Resize=(1000,1000)", desc: "Latest smartphone with stunning camera and fast processor." },
      { id: 3, name: "Sports Shoes", price: 999, img: "https://www.campusshoes.com/cdn/shop/files/MOVEON_22G-1108_WHT-NAVY_2.jpg?v=1755510770", desc: "Comfortable running shoes designed for performance and durability." },
      { id: 4, name: "Coffee Maker", price: 4999, img: "https://www.wonderchef.com/cdn/shop/files/6809756.jpg?v=1757415602&width=720", desc: "Automatic coffee maker for cafe-style drinks at home." },
      { id: 5, name: "Leather Jacket", price: 1199, img: "https://i.pinimg.com/originals/da/88/e1/da88e107cb3a67c493e6c953f4569b5a.jpg", desc: "Stylish and durable leather jacket for men and women." },
      { id: 6, name: "Crew-Neck Sweatshirt", price: 2299, img: "https://tse1.mm.bing.net/th/id/OIP.R7d6uBQC4CRS8cE58nouUgHaJ4?pid=Api&P=0&h=180", desc: "Stylish and durable leather jacket for men and women." },
      { id: 7, name: "Black Slim Fit Cotton Pants", price: 499, img: "https://www.aysotiman.com/wp-content/uploads/2023/04/Aysoti-Larkspur-Black-Slim-Fit-Cotton-Pants1.jpg", desc: "Stylish and durable leather jacket for men and women." },
      { id: 8, name: "banarasi silk saree", price: 1199, img: "https://www.kollybollyethnics.com/image/catalog/data/14Nov2017/Light-green-pure-banarasi-silk-wedding-saree-1210.jpg", desc: "Stylish and durable leather jacket for men and women." },
      { id: 9, name: "Nike G.T. Cut ", price: 1999, img: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/76143164-9401-4844-b693-c494edde6967/AIR+ZM+G.T.+CUT+ACADEMY+TB+EP.png", desc: "Stylish and durable leather jacket for men and women." },
      { id: 10, name: "Heldish Black Sunglasses", price: 499, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpBu8jYl6_zLzrH1rWPNO5-sJNd3-gCBeObfe1ERK0kNhlmyCgP1HyxRy5z2frm1W5g0jKoIkrk5ayFHJeWOyGoR8uLExVRvolWgVxUBSLzIeRz_oPW7Xo", desc: "Stylish and durable leather jacket for men and women." },
      { id: 11, name: "Black Slim Fit Cotton Pants", price: 499, img: "https://www.aysotiman.com/wp-content/uploads/2023/04/Aysoti-Larkspur-Black-Slim-Fit-Cotton-Pants1.jpg", desc: "Stylish and durable leather jacket for men and women." },
      { id: 12, name: "banarasi silk saree", price: 1199, img: "https://www.kollybollyethnics.com/image/catalog/data/14Nov2017/Light-green-pure-banarasi-silk-wedding-saree-1210.jpg", desc: "Stylish and durable leather jacket for men and women." },
      { id: 13, name: "Nike G.T. Cut ", price: 1999, img: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/76143164-9401-4844-b693-c494edde6967/AIR+ZM+G.T.+CUT+ACADEMY+TB+EP.png", desc: "Stylish and durable leather jacket for men and women." },
      { id: 14, name: "banarasi silk saree", price: 1199, img: "https://www.kollybollyethnics.com/image/catalog/data/14Nov2017/Light-green-pure-banarasi-silk-wedding-saree-1210.jpg", desc: "Stylish and durable leather jacket for men and women." },
      { id: 15, name: "Nike G.T. Cut ", price: 1999, img: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/76143164-9401-4844-b693-c494edde6967/AIR+ZM+G.T.+CUT+ACADEMY+TB+EP.png", desc: "Stylish and durable leather jacket for men and women." },
    ];


    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('search');
    const detailsPage = document.getElementById('details-page');
    const cartPage = document.getElementById('cartPage');
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartCountEl = document.getElementById('cartCount');
    const btnBuy = document.getElementById('btn-buy');

    let cart = [];

    function showHome() {
      productList.style.display = 'grid';
      detailsPage.style.display = 'none';
      cartPage.style.display = 'none';
      renderProducts(searchInput.value);
    }

    function renderProducts(filter = '') {
      productList.innerHTML = '';
      const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
      filtered.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <img src="${p.img}" alt="${p.name}" onclick="showDetails(${p.id})">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
          <span class="fav-icon ${isFavourite(p.id)}" onclick="toggleFavourite(${p.id})"> &#9829;</span>

        `;
        productList.appendChild(div);
      });
    }

    function showDetails(id) {
      const p = products.find(pr => pr.id === id);
      productList.style.display = 'none';
      detailsPage.style.display = 'block';
      document.getElementById('btn-buy').onclick = showOrderForm;
      detailsPage.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h2>${p.name}</h2>
        <p>${p.desc}</p>
        <h3>₹${p.price}</h3>
        <button onclick="addToCart(${p.id})" class="add-btn">Add to Cart</button>
        <button id="btn-buy" class="btn" disabled>Buy Now</button>
        <button class="back-btn" onclick="showHome()">Back</button>
      `;
      const btnBuy = document.getElementById('btn-buy');
btnBuy.onclick = function() {
    addToCart(id); // yahan id voi product ka ho jo is page par dikh raha hai
    showOrderForm();
};
btnBuy.disabled = false;

    }
    document.getElementById('btn-buy').onclick = function() {
    addToCart(productId); // productId ko sahi value se replace karo
    showOrderForm();
};


    function addLightEffect(button) {
  // Remove the effect from all buttons
  document.querySelectorAll('button').forEach(btn => {
    btn.classList.remove('active-light');
  });
  // Add effect to clicked button
  button.classList.add('active-light');
}

// Then update your button onclicks from:
// <button onclick="addToCart(${p.id})">Add to Cart</button>
// To:
// <button onclick="addLightEffect(this); addToCart(${p.id})">Add to Cart</button>
    


    function addToCart(id) {
  const product = products.find(p => p.id == id);
  const existing = cart.find(c => c.id == id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  updateCart();
  // alert(product.name + " added to cart!");  <-- Remove or comment this line
}

function showOrderForm() {
  // Login status check karo
  if (localStorage.getItem('xyraLogin') !== 'yes') {
    showLoginModal(); // Agar login nahi kiya, toh login/signup modal dikhao
    return; // Order form na dikhao jab tak login na ho
  }
  // Agar user logged in hai toh order form dikhao
  document.getElementById('product-list').style.display = 'none';
  document.getElementById('details-page').style.display = 'none';
  document.getElementById('cartPage').style.display = 'none';
  document.getElementById('orderForm').style.display = 'block';
  document.getElementById('orderSuccess').style.display = 'none';
}


// Modal control
function showLoginModal() {
  document.getElementById('loginModal').style.display = 'flex';
}
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}
document.getElementById('switchToSignup').onclick = () => {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
}
document.getElementById('switchToLogin').onclick = () => {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

// Signup process: Save to localStorage
document.getElementById('signupForm').onsubmit = function(e) {
  e.preventDefault();
  let email = document.getElementById('signupEmail').value;
  let pass = document.getElementById('signupPass').value;
  localStorage.setItem('xyraUser', JSON.stringify({email, pass}));
  alert('Signup successful! Now login.');
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

// Login process: Check from localStorage
document.getElementById('loginForm').onsubmit = function(e) {
  e.preventDefault();
  let email = document.getElementById('loginEmail').value;
  let pass = document.getElementById('loginPass').value;
  let user = JSON.parse(localStorage.getItem('xyraUser') || 'null');
  if (user && user.email === email && user.pass === pass) {
    localStorage.setItem('xyraLogin', 'yes');
    closeLoginModal();
    alert('Login successful!');
  } else {
    alert('Invalid credentials');
  }
}


function showFavourites() {
  productList.innerHTML = ''; // Pehle clear kar do product list
  const favProducts = products.filter(p => favourites.includes(p.id)); // Sirf favourite products filter karo
  favProducts.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}" onclick="showDetails(${p.id})">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <span class="fav-icon fav-active" onclick="toggleFavourite(${p.id})">&#9829;</span>
      </div>
    `;
  });
}



function showOrderSuccess() {
  const successSection = document.getElementById('orderSuccess');
  successSection.style.display = 'block';
  runConfettiAnimation();

  setTimeout(function() {
  document.getElementById('orderSuccess').style.display = 'none';
}, 2000);
}



function runConfettiAnimation() {
  const confettiContainer = document.getElementById('confettiAnimation');
  confettiContainer.innerHTML = '';  // clear previous confetti

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.textContent = '🎉';
    confetti.style.position = 'absolute';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = Math.random() * 100 + '%';
    confetti.style.fontSize = (10 + Math.random() * 30) + 'px';
    confetti.style.animation = 'fall 3s ease-in-out forwards';
    confettiContainer.appendChild(confetti);
  }

  // Add CSS keyframes for confetti fall animation dynamically
  const style = document.createElement('style');
  style.textContent = `
  @keyframes fall {
    0% {opacity: 1; transform: translateY(0);}
    100% {opacity: 0; transform: translateY(100vh);}
  }`;
  document.head.appendChild(style);
}

let favourites = JSON.parse(localStorage.getItem('favourites')) || [];

function toggleFavourite(id) {
  if (favourites.includes(id)) {
    favourites = favourites.filter(favId => favId !== id);
  } else {
    favourites.push(id);
  }
  localStorage.setItem('favourites', JSON.stringify(favourites));
  renderProducts(searchInput.value); // Refresh product cards so hearts visibly update
}

function isFavourite(id) {
  return favourites.includes(id) ? 'fav-active' : '';
}


    function updateCart() {
      let total = 0;
      let count = 0;
      cartItemsEl.innerHTML = '';
      if (cart.length == 0) {
        cartItemsEl.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalEl.textContent = 'Total ₹0.00';
        btnBuy.disabled = true;
        cartCountEl.textContent = 0;
        return;
      }
      cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;
        cartItemsEl.innerHTML += `
          <div class="cart-row">
            <img src="${item.img}">
            <div class="cart-name">${item.name}</div>
            <div class="cart-qty">x${item.quantity}</div>
            <div class="cart-price">₹${item.price * item.quantity}</div>
          </div>
        `;
      });
      cartTotalEl.textContent = `Total ₹${total}`;
      cartCountEl.textContent = count;
      btnBuy.disabled = false;
    }

    function showCart() {
      productList.style.display = 'none';
      detailsPage.style.display = 'none';
      cartPage.style.display = 'block';
      updateCart();
    }

    document.getElementById('btn-clear-cart').onclick = () => {
      cart = [];
      updateCart();
    };

    btnBuy.onclick = () => {
  showOrderForm(); 
};


    searchInput.addEventListener('input', e => renderProducts(e.target.value));

    renderProducts();