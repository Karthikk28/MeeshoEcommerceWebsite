const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add product to cart
function addToCart(product) {
    let itemIndex = cart.findIndex(p => p.name === product.name);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product.name + " added to cart!");
}

// Attach event to all Add buttons
document.querySelectorAll(".pro .cart").forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
        event.stopPropagation(); // prevent redirect on product click

        let productCard = btn.closest(".pro");
        let product = {
            name: productCard.querySelector("h5")?.innerText || "Unknown Product",
            price: parseFloat(productCard.querySelector("h4").innerText.replace("$","")),
            img: productCard.querySelector("img").src
        };

        addToCart(product);
    });
});