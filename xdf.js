import { cart, addToCart } from './data/cart.js';

const sareeProducts = [
    {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        link: "xbc.html",
        image: "data/sareeProducts/deDigitalPrintWovenKalamkariJacquardTissueSareeMustard.webp",
        name: "Digital Print, Woven Kalamkari Jacquard, Tissue Saree  (Mustard)",
        rating: {
            stars: 4,
            count: 37
        },
        priceCents: 4999,
        keywords: [
            "plates",
            "kitchen",
            "dining"
        ]
    },
    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        link: "xbd.html",
        image: "data/sareeProducts/dfWovenKalamkariSilkBlendSareeDark Blue.webp",
        name: "Woven Kalamkari Silk Blend Saree  (Dark Blue)",
        rating: {
            stars: 4.5,
            count: 175
        },
        priceCents: 3499,
        keywords: [
            "saree",
            "woolean"
        ]
    },
    {
        id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        link: "xbe.html",
        image: "data/sareeProducts/dgEmbroideredKalamkariSilkBlendSareeDarkBlue.webp",
        name: "Embroidered Kalamkari Silk Blend Saree  (Dark Blue)",
        rating: {
            stars: 4.5,
            count: 317
        },
        priceCents: 5999,
        keywords: [
            "saree",
            "kalankaari",
        ]
    },
    {
        id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
        link: "xbf.html",
        image: "data/sareeProducts/dhEmbroideredKalamkariSilkBlendSareePink.webp",
        name: "Embroidered Kalamkari Silk Blend Saree  (Pink)",
        rating: {
            stars: 4.5,
            count: 144
        },
        priceCents: 3599,
        keywords: [
            "bathroom",
            "washroom",
            "restroom",
            "towels",
            "bath towels"
        ]
    },
    {
        id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
        link: "xbg.html",
        image: "data/sareeProducts/diDigitalPrintWovenKalamkariSilkBlendSareeBlue.webp",
        name: "Digital Print, Woven Kalamkari Silk Blend Saree  (Blue)",
        rating: {
            stars: 4.5,
            count: 305
        },
        priceCents: 2899,
        keywords: [
            "saree",
            "kalankaari"
        ]
    },
    {
        id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
        link: "xc.html",
        image: "data/sareeProducts/djBlockedPrintedCheckeredKalamkariGeorgetteSareeMulticolor.webp",
        name: "Blocked Printed, Checkered Kalamkari Saree ",
        rating: {
            stars: 4,
            count: 89
        },
        priceCents: 3390,
        keywords: [
            "saree",
            "kalankaari",

        ]
    },
    {
        id: "5968897c-4d27-4872-89f6-5bcb052746d7",
        link: "xca.html",
        image: "data/sareeProducts/eaHandPaintedKalamkariPureSilkSareeBeige.webp",
        name: "Hand Painted Kalamkari Pure Silk Saree  (Beige)",
        rating: {
            stars: 4.5,
            count: 235
        },
        priceCents: 25500,
        keywords: [
            "saree",
            "kalankaari",

        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "aad29d11-ea98-41ee-9285-b916638cac4a",
        link: "xcb.html",
        image: "data/sareeProducts/ebHandPaintedKalamkariPureSilkSareeBeige.webp",
        name: "Hand Painted Kalamkari Pure Silk Saree  (Beige)",
        rating: {
            stars: 4.5,
            count: 30
        },
        priceCents: 15000,
        keywords: [
            "accessories",
            "shades"
        ]
    },
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
        name: "HALFSAREE STUDIO Red Digital Print Kalamkari Art Silk Half Sare",
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
        name: "Soch Womens Olive Crepe Saree ",
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
        id: "d2785924-743d-49b3-8f03-ec258e640503",
        image:
        {
            first: "https://m.media-amazon.com/images/I/71kRwy+XPLL._SY500_.jpg",
            second: "https://m.media-amazon.com/images/I/71kRwy+XPLL._SY500_.jpg",
            thrid: "https://m.media-amazon.com/images/I/61BbGZEGggL._SY500_.jpg",
            fourth: "https://m.media-amazon.com/images/I/61BbGZEGggL._SY500_.jpg"
        },
        rating:
        {
            stars: 5,
            count: 83
        },
        fullImage: "https://m.media-amazon.com/images/I/71kRwy+XPLL._SY500_.jpg",
        sareeName: "Women's Lucknowi Chikankari Linen cotton Woven Sarees",
        sareePrice: 5999
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

