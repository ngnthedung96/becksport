
// ----------------show catnav-------------------- (thanh bên phải)
const catNavBtn = document.querySelector('.js-category-nav__btn')
const catNavBtnBack = document.querySelector('.js-category-nav__back-btn')
const catNavSection = document.querySelector(".category-nav-section")
const catNavContent= document.querySelector(".js-category-nav")
function showCatNav () {
    catNavSection.classList.add('open')
}
function hideCatNav () {
    catNavSection.classList.remove('open')
}
catNavBtn.addEventListener('click',showCatNav)
catNavBtnBack.addEventListener('click',hideCatNav)
catNavSection.addEventListener('click',hideCatNav)
catNavContent.addEventListener('click', function (e) {
    e.stopPropagation()
})

// ------------------------show subcatnav-------------( trong thanh bên phải)
const catSubNavBtn = document.querySelector('.js-category-nav__product-btn')
const catSubNavSection = document.querySelector(".category-sub-nav__products")
function showCatSubNav () {
    catSubNavSection.classList.toggle('open')
}
function rotateBtn () {
    catSubNavBtn.classList.toggle('catSubNavActive')
}
catSubNavBtn.addEventListener('click',showCatSubNav)
catSubNavBtn.addEventListener('click',rotateBtn)

// --------------Show product------------------

var productHeaderNav = document.querySelectorAll('.products-header__nav a')
var productContentItems = document.querySelectorAll(".js-products-content__item")
function ShowProduct() {
    this.classList.add('open')
}
function HideProduct() {
    this.classList.remove('open')
}
// for (i of productHeaderNav) {
//     i.addEventListener('click', function(){
//         for( j of productContentItems) {
//             if (j.classList.contains(i.classList)){
//                 for(q of productHeaderNav){
//                     if(q.classList.contains('colorGreen')){
//                         q.classList.remove('colorGreen')
//                     }
//                 }
//                 i.classList.add('colorGreen')
//                 for (k of productContentItems){
//                     if (k.classList.contains('open')){
//                         k.classList.remove('open')
//                     }
//                 }
//                 j.classList.add('open')
//             }
//         }
//     })
// }
var bestSellerBtn = document.querySelector(".best-seller")
var newProductsBtn = document.querySelector(".new-products")
var salesBtn = document.querySelector(".sales")

var bestSellerDiv = document.querySelector(".js-products-content__item.best-seller")
var newProductsDiv = document.querySelector(".js-products-content__item.new-products")
var salesDiv = document.querySelector(".js-products-content__item.sales")

bestSellerBtn.addEventListener("click", function(){
    for (value of productContentItems){
        if (value.classList.contains('open')){
            value.classList.remove('open')
        }
    }
    for(q of productHeaderNav){
        if(q.classList.contains('colorGreen')){
            q.classList.remove('colorGreen')
        }
    }
    bestSellerBtn.classList.add('colorGreen')
    bestSellerDiv.classList.add("open")
})
newProductsBtn.addEventListener("click", function(){
    for (value of productContentItems){
        if (value.classList.contains('open')){
            value.classList.remove('open')
        }
    }
    for(q of productHeaderNav){
        if(q.classList.contains('colorGreen')){
            q.classList.remove('colorGreen')
        }
    }
    newProductsBtn.classList.add('colorGreen')
    newProductsDiv.classList.add("open")
})
salesBtn.addEventListener("click", function(){
    for (value of productContentItems){
        if (value.classList.contains('open')){
            value.classList.remove('open')
        }
    }
    for (value of productContentItems){
        if (value.classList.contains('open')){
            value.classList.remove('open')
        }
    }
    for(q of productHeaderNav){
        if(q.classList.contains('colorGreen')){
            q.classList.remove('colorGreen')
        }
    }
    salesBtn.classList.add('colorGreen')
    salesDiv.classList.add("open")
})
// ----------------------------Get Product Form API-------------------

var productsApi = "http://localhost:3000/best-seller"
function GetProductsFromApi (url){
    return new Promise (function(resolve,reject){
        resolve( 
            fetch(url)
            .then(function(response){
                return response.json()
            })
            )
    })
}
GetProductsFromApi(productsApi)
.then(function(data){
    var productsOfBestSeller = document.querySelectorAll(".js-products-content__item.best-seller .products-content__product > a")
    console.log(data)
    for (i of data){
        for (j of productsOfBestSeller){
            if (j.classList.contains(`${i.id}`)) {
                htmls = `
                <img src="${i.link}" alt="">
                <h4>${i.name}</h4>
                <p class="price" >${i.price}</p>
                <div class="hoverProduct">
                    <div class="addToCart">
                        <i class="fa-solid fa-cart-plus"></i>
                    </div>
                    <a href="" class="viewProduct">
                        <i class="fa-solid fa-eye"></i>
                    </a>
                </div>
                `  
                j.innerHTML = htmls
            }
        }
    }
})
