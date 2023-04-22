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
        cart.forEach(function(item, index) {
            let li = document.createElement("li");
            li.innerHTML = item.name + " - $" + item.price;
            let removeBtn = document.createElement("button");
            removeBtn.innerHTML = '<i class="fa fa-close">';
            removeBtn.classList.add("cart-remove");
            removeBtn.onclick = function() {
                removeFromCart(index);
            };
            li.appendChild(removeBtn);
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

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
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

