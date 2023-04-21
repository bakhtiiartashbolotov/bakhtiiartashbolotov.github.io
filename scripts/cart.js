let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({name: productName, price: price});
    total += price;
    updateCart();
}

function updateCart() {
    updateCartUI();
    saveCart();
}

function updateCartUI() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    if (cart.length > 0) {
        cart.forEach(function(item) {
            let li = document.createElement("li");
            li.innerHTML = item.name + " - $" + item.price;
            cartList.appendChild(li);
        });
    } else {
        cartList.innerHTML = "<li>No items in cart</li>";
    }
    document.getElementById("total").innerHTML = total.toFixed(2);
}

function checkout() {
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = [];
        total = 0;
        updateCartUI();
        saveCart();
    } else {
        alert("Your cart is empty!");
    }
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total.toString());
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    total = parseFloat(localStorage.getItem("total")) || 0;
    updateCartUI();
}

window.onload = loadCart;

