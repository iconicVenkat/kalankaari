import { cart, addToCart } from './data/cart.js';

const sareeProducts = [
    {
        id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
        link: "xdg.html",
        image: "data/sareeProducts/gg.jpg",
        name: "Brasso Silk Sarees 4 Pic in 1 Pack Multicolour",
        rating: {
            stars: 4.5,
            count: 90
        },
        priceCents: 22290,
        keywords: [
            "pants",
            "apparel",
            "mens"
        ]
    },
    {
        id: "1c079479-8586-494f-ab53-219325432536",
        link: "xdh.html",
        image: "data/sareeProducts/gh.jpg",
        name: "Soch Womens Turquoise Blue Crepe Saree",
        rating: {
            stars: 4,
            count: 229
        },
        priceCents: 4890,
        keywords: [

        ]
    },
    {
        id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
        link: "xdi.html",
        image: "data/sareeProducts/gj.jpg",
        name: "Sai Hevan Women's Womens Art Silk Printed Kalamkari Sarees",
        rating: {
            stars: 3.5,
            count: 42
        },
        priceCents: 10499,
        keywords: [
            "sunglasses",
            "glasses",
            "accessories",
            "shades"
        ]
    },
    {
        id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
        link: "xea.html",
        image: "data/sareeProducts/ha.jpg",
        name: "Bengal Looms (India) Kalamkari Printed  Silk Saree",
        rating: {
            stars: 4.5,
            count: 511
        },
        priceCents: 6895,
        keywords: [
            "cooking set",
            "kitchen"
        ]
    },
    {
        id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
        link: "xeb.html",
        image: "data/sareeProducts/hb.jpg",
        name: "Site Dept art silk kalamkari saree ",
        rating: {
            stars: 4.5,
            count: 130
        },
        priceCents: 7649,
        keywords: [
            "bathroom",
            "washroom",
            "mirrors",
            "home"
        ]
    },
    {
        id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
        link: "xec.html",
        image: "data/sareeProducts/hc.jpg",
        name: "IGHUB FASHION Indian Women's Kalamkari saree",
        rating: {
            stars: 4.5,
            count: 248
        },
        priceCents: 2400,
        keywords: [
            "pants",
            "sweatpants",
            "jogging",
            "apparel",
            "womens"
        ]
    },
    {
        id: "d339adf3-e004-4c20-a120-40e8874c66cb",
        link: "xed.html",
        image: "data/sareeProducts/hd.jpg",
        name: "NAYAB STORES Women's Kalamkari Ghicha Silk Saree",
        rating: {
            stars: 4.5,
            count: 117
        },
        priceCents: 6990,
        keywords: [
            "accessories",
            "womens"
        ]
    },
    {
        id: "d37a651a-d501-483b-aae6-a9659b0757a0",
        link: "xee.html",
        image: "data/sareeProducts/he.jpg",
        name: "Exotic India Almond-Cream Kalamkari Saree ",
        rating: {
            stars: 4,
            count: 126
        },
        priceCents: 2899,
        keywords: [
            "boxes",
            "food containers",
            "kitchen"
        ]
    },
    {
        id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
        link: "xef.html",
        image: "data/sareeProducts/hf.jpg",
        name: "Exotic India Hand-Painted Kalamkari Chiffon Saree",
        rating: {
            stars: 4.5,
            count: 1211
        },
        priceCents: 1799,
        keywords: [
            "coffeemakers",
            "kitchen",
            "appliances"
        ]
    },
    {
        id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
        link: "xfa.html",
        image: "data/sareeProducts/ia.jpg",
        name: "Sree Lakshmi  Kalamkari Women's Silk Saree",
        rating: {
            stars: 4.5,
            count: 363
        },
        priceCents: 9999,
        keywords: [
            "bedroom",
            "home"
        ]
    },
    {
        id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
        link: "xfb.html",
        image: "data/sareeProducts/ib.jpg",
        name: "Maxis Women's Kalamkari Mysore Art Silk Sarees ",
        rating: {
            stars: 4.5,
            count: 93
        },
        priceCents: 2111,
        keywords: [
            "bathroom",
            "home",
            "towels"
        ]
    }
];

let productsHTML = '';
sareeProducts.forEach((product) => {

    productsHTML +=

        `
        <div class="product-container">
        <a href="${product.link}">
    <div class="product-image">
        <img class="image-product" src="${product.image}">
    </div>
</a>

        <div class="product-name">${product.name}</div>

        <div class="product-rating-image">
            <img class="rating-image" src="images/ratings/rating-${product.rating.stars * 10}.png">
            <span class="product-count">${product.rating.count}</span>
        </div>
        <div class="product-price">₹${product.priceCents}</div>
    </div>
    `;

})
document.querySelector('.product-container-grid-sub-products').innerHTML = productsHTML;



let products = [
    {
        id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
        image:
        {
            first: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/n/x/i/free-knh130125-dpur-kanakadara-unstitched-original-imagmu5tac9hc6am.jpeg?q=70",
            second: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/n/h/e/free-knh130125-dpur-kanakadara-unstitched-original-imagmu5tfzhe4gma.jpeg?q=70",
            thrid: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/c/e/l/free-knh130125-dpur-kanakadara-unstitched-original-imagmu5tuuhtxn2m.jpeg?q=70",
            fourth: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/y/n/0/free-knh130125-dpur-kanakadara-unstitched-original-imagmu5t4xxvza9r.jpeg?q=70"
        },
        rating:
        {
            stars: 4,
            count: 99
        },
        fullImage: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/n/x/i/free-knh130125-dpur-kanakadara-unstitched-original-imagmu5tac9hc6am.jpeg?q=70",
        sareeName: "Digital Print Kalamkari Art Silk Saree  (Purple)",
        sareePrice: 4999
    }
]

let sareeHTML = '';

products.forEach((product) => {
    sareeHTML +=
        `

    <div class="small-saree-images">
    <div class="categeory-images">
        <img class="categeroy-image" src="${product.image.first}">
    </div>

    <div class="categeory-images">
        <img class="categeroy-image" src="${product.image.second}">
    </div>

    <div class="categeory-images">
        <img class="categeroy-image" src="${product.image.thrid}">
    </div>

    <div class="categeory-images">
        <img class="categeroy-image" src="${product.image.fourth}">
    </div>
</div>

<div class="full-saree-image">
    <img class="full-saree-types-images" src="${product.fullImage}">
    <div class="grid-cart-buy-button">
    <span class="a">
    <button class=" add-to-cart  button-primary js-add-to-cart"
    data-product-id="${product.id}">
      Add to Cart
    </button>
    </span>
    <span class="a">
        <button class="buy-now">BUY NOW</button>
    </span>
    </div>
</div>

<div class="saree-details-text">
    <div class="saree-name">
       ${product.sareeName}
    </div>
    <div class=rating-stars>
    <div>
    <img  class="saree-rating-image" src="images/ratings/rating-${product.rating.stars * 10}.png">
    <span class="saree-rating-count">${product.rating.count}</span>
    </div>
    

    </div>

   

    <div class="special-price">Special price</div>

    <div class="saree-amount">₹${product.sareePrice}</div>
    <div class="product-details">Product details </div>

    <span class="saree-qusetion">Material composition:</span><span>Khadi Silk Cotton</span>
    <br><br>

    <span class="saree-qusetion">Weave type:</span><span>Khadi</span>
    <br><br>


    <span class="saree-qusetion">Design name : </span><span>Applique</span>

    <br><br>
    <span class="saree-qusetion">Length:</span><span>6 yards</span>

    <br><br>
    <span class="saree-qusetion">Occasion type:</span><span>Festival, Party, Evening, Casual</span>
    <br><br>

    <span class="saree-qusetion">Pattern:</span><span>Kalamkari</span>

    <br><br>


</div>
    
    `
})

console.log(sareeHTML);

document.querySelector('.saree-image-types-details-gird').innerHTML = sareeHTML;







function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();
        });
    });














document.addEventListener('DOMContentLoaded', function () {
    const fullSareeImage = document.querySelector('.full-saree-types-images');
    const categoryImages = document.querySelectorAll('.categeroy-image');

    categoryImages.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            const imageUrl = image.getAttribute('src');
            fullSareeImage.setAttribute('src', imageUrl);
        });
    });
});

