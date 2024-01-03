import { cart, addToCart } from './data/cart.js';

const sareeProducts = [
    {
        id: "04701903-bc79-49c6-bc11-1af7e3651358",
        link: "xcc.html",
        image: "data/sareeProducts/ecHandPaintedKalamkariChiffonSareeBlue.webp",
        name: "Hand Painted Kalamkari Chiffon Saree  (Blue)",
        rating: {
            stars: 4.5,
            count: 562
        },
        priceCents: 12000,
        keywords: [
            "saree",
            "kalankaari",
            "womens",

        ]
    },
    {
        id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
        link: "xcd.html",
        image: "data/sareeProducts/edHandPaintedKalamkariPureSilkSareeRed.webp",
        name: "Hand Painted Kalamkari Pure Silk Saree  (Red)",
        rating: {
            stars: 4.5,
            count: 232
        },
        priceCents: 9500,
        keywords: [
            "saree",
            "kalankaaro",

        ]
    },
    {
        id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
        link: "xce.html",
        image: "data/sareeProducts/eeHandPaintedMadhubaniCottonLinenSareePink.webp",
        name: "Hand Painted Madhubani Cotton Linen Saree  (Pink)",
        rating: {
            stars: 4,
            count: 160
        },
        priceCents: 6799,
        keywords: [
            "saree",
            "kalankaari",
            "womens"
        ]
    },
    {
        id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
        link: "xcf.html",
        image: "data/sareeProducts/efHandPaintedKalamkariCottonBlendSareeWhite.webp",
        name: "Hand Painted Kalamkari Cotton Blend Saree  (White)",
        rating: {
            stars: 5,
            count: 846
        },
        priceCents: 6500,
        keywords: [
            "saree",
            "kalankaari",

        ]
    },
    {
        id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
        link: "xcg.html",
        image: "data/sareeProducts/egDigitalPrintKalamkariArtilksareePurple.webp",
        name: "Digital Print Kalamkari Art Silk Saree  (Purple)",
        rating: {
            stars: 4,
            count: 99
        },
        priceCents: 4999,
        keywords: [
            "saree",
            "women",

        ]
    },
    {
        id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
        link: "xch.html",
        image: "data/sareeProducts/ehDigitalPrintKalamkariArtilkSareePink.webp",
        name: "Digital Print Kalamkari Art Silk Saree  (Pink)",
        rating: {
            stars: 4,
            count: 215
        },
        priceCents: 6999,
        keywords: [
            "saree",
            "kalankaaro",

        ]
    },
    {
        id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
        link: "xci.html",
        image: "data/sareeProducts/faDigitalPrintKalamkariArtSilkSareePink.webp",
        name: "Digital Print Kalamkari Art Silk Saree  (Pink)",
        rating: {
            stars: 4.5,
            count: 52
        },
        priceCents: 5999,
        keywords: [
            "jewelry",
            "saree",
            "womens"
        ]
    },
    {
        id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
        link: "xcj.html",
        image: "data/sareeProducts/fbDigitalPrinKalamkariArtSilkareeYellow.webp",
        name: "Digital Print Kalamkari Art Silk Saree  (Yellow)",
        rating: {
            stars: 4.5,
            count: 2465
        },
        priceCents: 4999,
        keywords: [
            "saree",
            "kalankaari",

        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
        link: "xda.html",
        image: "data/sareeProducts/ga.jpg",
        name: "HALFSAREE STUDIO Red Digital Print Kalamkari saree",
        rating: {
            stars: 4,
            count: 332
        },
        priceCents: 5095,
        keywords: [
            "bathmat",
            "bathroom",
            "home"
        ]
    },
    {
        id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
        link: "xdb.html",
        image: "data/sareeProducts/gb.jpg",
        name: "Soch Womens Olive Crepe Saree With Floral Kalamkari ",
        rating: {
            stars: 4,
            count: 345
        },
        priceCents: 4998,
        keywords: [
            "shoes",
            "flats",
            "womens",
            "footwear"
        ]
    },
    {
        id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
        link: "xdc.html",
        image: "data/sareeProducts/gc.jpg",
        name: "Frasher Store Womens Art Silk Printed Kalamkari Sarees ",
        rating: {
            stars: 4.5,
            count: 9449
        },
        priceCents: 1599,
        keywords: [
            "tshirts",
            "shirts",
            "apparel",
            "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
        link: "xdd.html",
        image: "data/sareeProducts/gd.jpg",
        name: "Soch Womens Mustard Crepe Saree With Floral Kalamkari Print ",
        rating: {
            stars: 4.5,
            count: 2286
        },
        priceCents: 8300,
        keywords: [
            "garbage",
            "bins",
            "cans",
            "kitchen"
        ]
    },
    {
        id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
        link: "xde.html",
        image: "data/sareeProducts/ge.jpg",
        name: "Bengal Looms (India) Kalamkari Printed Soft Tussar Silk Saree",
        rating: {
            stars: 4.5,
            count: 45
        },
        priceCents: 6999,
        keywords: [
            "bedroom",
            "bed sheets",
            "sheets",
            "covers",
            "home"
        ]
    },
    {
        id: "d2785924-743d-49b3-8f03-ec258e640503",
        link: "xdf.html",
        image: "data/sareeProducts/gf.jpg",
        name: "Women's Lucknowi Chikankari Linen cotton Woven Sarees ",
        rating: {
            stars: 5,
            count: 83
        },
        priceCents: 5999,
        keywords: [
            "hats",
            "winter hats",
            "beanies",
            "tuques",
            "apparel",
            "womens"
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
        id: "aad29d11-ea98-41ee-9285-b916638cac4a",
        image:
        {
            first: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/n/9/p/free-rtsmf124-roots-tale-unstitched-original-imagznxvbpadtfhj.jpeg?q=70",
            second: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/k/i/g/free-rtsmf124-roots-tale-unstitched-original-imagznxvywuex7yh.jpeg?q=70",
            thrid: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/a/t/s/free-rtsmf124-roots-tale-unstitched-original-imagznxvpymbvebw.jpeg?q=70",
            fourth: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/m/i/3/free-rtsmf124-roots-tale-unstitched-original-imagznxvchgzafha.jpeg?q=70"
        },
        rating:
        {
            stars: 4.5,
            count: 30,
        },
        fullImage: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/n/9/p/free-rtsmf124-roots-tale-unstitched-original-imagznxvbpadtfhj.jpeg?q=70",
        sareeName: "Hand Painted Kalamkari Pure Silk Saree (Beige)",
        sareePrice: 15500
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

