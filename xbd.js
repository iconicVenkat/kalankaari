import { cart, addToCart } from './data/cart.js';

const sareeProducts = [
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        link: "xb.html",
        image: "data/sareeProducts/bWovenKalamkariCottonBlendSareePink.webp",
        name: "Woven Kalamkari Cotton Blend Saree  (Pink)",
        rating: {
            stars: 4,
            count: 127
        },
        priceCents: 3299,
        keywords: [
            "saree",
            "kalankaari"
        ]
    },
    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        link: "xba.html",
        image: "data/sareeProducts/cWovenKalamkariSilkBlendSareeCream.webp",
        name: "Woven Kalamkari Cotton Blend Saree  (Pink)",
        rating: {
            stars: 4.5,
            count: 56
        },
        priceCents: 5999,
        keywords: [
            "tshirts",
            "apparel",
            "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        link: "xac.html",
        image: "data/sareeProducts/dDigitalPrintWovenKalamkariJacquardTissueSareeWhite.webp",
        name: "Digital Print, Woven Kalamkari Jacquard, Tissue Saree  (White)",
        rating: {
            stars: 5,
            count: 2197
        },
        priceCents: 5999,
        keywords: [
            "kalankaari",
            "saree",

        ]
    },
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
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        image:
        {
            first: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/k/u/6/free-akh-kshfa201004-akhilam-unstitched-original-imagzs3dect5jewv.jpeg?q=70",
            second: "https://rukminim2.flixcart.com/image/832/832/l5h2xe80/sari/p/l/l/free-kshfa201004-ratnavati-unstitched-original-imagg57hwrkwg2wg.jpeg?q=70",
            thrid: "https://rukminim2.flixcart.com/image/832/832/l5h2xe80/sari/c/a/4/free-kshfa201004-ratnavati-unstitched-original-imagg57hk6czgtyr.jpeg?q=70",
            fourth: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/k/u/6/free-akh-kshfa201004-akhilam-unstitched-original-imagzs3dect5jewv.jpeg?q=70"
        },
        rating:
        {
            stars: 4.5,
            count: 175,
        },
        fullImage: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/k/u/6/free-akh-kshfa201004-akhilam-unstitched-original-imagzs3dect5jewv.jpeg?q=70",
        sareeName: "Woven Kalamkari Silk Blend Saree (Dark Blue)",
        sareePrice: 3499
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

