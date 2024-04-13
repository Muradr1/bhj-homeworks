const products = Array.from(document.querySelector(".products"));
const cartProducts = document.querySelector(".cart__products");
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const productDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const productInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const productValue = document.getElementsByClassName("product__quantity-value");
const productImage = Array.from(document.querySelectorAll(".product__image"));
const product = document.getElementsByClassName("product");
const cartProductCount = document.getElementsByClassName("cart__product-count");

productDec.forEach((dec, index) => {
    dec.addEventListener('click', () => {
        if (productValue[index].textContent <= 1) {
            return
        } else {
            productValue[index].textContent--
        };
      });
});

productInc.forEach((inc, index) => {
    inc.addEventListener('click', () => {
        productValue[index].textContent++
    });
});

productAdd.forEach((element, index) => {
    element.addEventListener('click', () => {

        const search = [...cartProducts.children].findIndex(child => child.dataset.id === element.closest(".product").dataset.id);
        if (search != -1) {
            cartProductCount[search].textContent = +cartProductCount[search].textContent + +productValue[index].textContent;
        } else {
            const divCartProduct = document.createElement('div');
            cartProducts.appendChild(divCartProduct);
            divCartProduct.classList.add('cart__product');
            divCartProduct.dataset.id = product[index].dataset.id;

            const cartProductImage = document.createElement('img');
            divCartProduct.appendChild(cartProductImage);
            cartProductImage.classList.add('cart__product-image');
            cartProductImage.src = productImage[index].src;
        
            const cartProductCount = document.createElement('div');
            divCartProduct.appendChild(cartProductCount);
            cartProductCount.classList.add('cart__product-count');
            cartProductCount.textContent =  productValue[index].innerText;
        }
    });
});
