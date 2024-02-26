const nav =document.getElementById('navbar');
const bar =document.getElementById('bar');
const close =document.getElementById('close');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('lol');
    })
}

if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('lol');
    })
}


// for-cart 


document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartPanel = document.getElementById('cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productElement = button.parentElement;
            const productName = productElement.dataset.name;
            const productPrice = parseFloat(productElement.dataset.price);

            addToCart({ name: productName, price: productPrice });
            updateCart();
        });
    });

    cartBtn.addEventListener('click', function () {
        cartPanel.style.right = '0';
    });

    closeCartBtn.addEventListener('click', function () {
        cartPanel.style.right = '-300px';
    });

    function addToCart(product) {
        cart.push(product);
    }

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <button class="remove-btn">Remove</button>
            `;
            cartItemsList.appendChild(listItem);

            // Add click event listener to dynamically created Remove button
            listItem.querySelector('.remove-btn').addEventListener('click', function () {
                removeFromCart(index);
            });

            total += item.price;
        });

        totalElement.textContent = total.toFixed(2);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }
});
