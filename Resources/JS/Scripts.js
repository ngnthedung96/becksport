
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
productHeaderNav.forEach(function(btn,index){
    btn.addEventListener('click', function(){
        var a = document.querySelector('.products-header__nav a.colorGreen')
        a.classList.remove('colorGreen')
        this.classList.add('colorGreen')
        var c = document.querySelector(".js-products-content__item.open")
        c.classList.remove('open')
        var b = productContentItems[index]
        b.classList.add('open')
})})


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
// ---------cart-shopping-------------------------
var cartShoppingBtn = document.querySelector('.header-nav__btn.cart-shopping')
var cartHeaderContainer = document.querySelector('.header-nav__cart-container')
var cartHeaderContent = document.querySelector('.header-nav__cart')

function showCartHeader () {
    cartHeaderContainer.classList.add('open')
}
function hideCartHeader () {
    cartHeaderContainer.classList.remove('open')
}

cartShoppingBtn.addEventListener('click',showCartHeader)
cartHeaderContainer.addEventListener('click',hideCartHeader)
cartHeaderContent.addEventListener('click',function(e){
    e.stopPropagation()
})