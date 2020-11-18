var listOfProducts;
/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}




function initSite() {
    loadProducts();
    
     // This would also be a good place to initialize other parts of the UI
}


/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    
    

    let mainContent = document.getElementById("mainContent")
    // Kallar på parent elementet till mainContainer

    let greyBackground = true
    // gör greyBackgruond till en bolean
    
    for (let i = 0; i < listOfProducts.length; i++) {
            
        let product = listOfProducts[i]
        // sparar produktlistan i en variabel
        
        let mainContainer = document.createElement("div")
        mainContainer.id = "mainContainer"
        // skapat mainContainer samt lite styling, if satsen gör så att varannan maincontainer får en class
        
        if(greyBackground == true){
            mainContainer.classList = "mainContainerGrey"   
        }

        greyBackground = !greyBackground
        // greyBackground är falsk alltså ingen class på varannan main Container
        
        let titleContainer = document.createElement("div")
        titleContainer.id = "titleContainer"
        titleContainer.innerHTML = product.title
        // Titeln på telefonen
        
        let descriptionContainer = document.createElement("div")
        descriptionContainer.id = "descriptionContainer"
        descriptionContainer.innerHTML = product.description
        // Description på telefonen
        
        let imgContainer = document.createElement("img")
        imgContainer.id = "imgContainer"
        imgContainer.src = product.image
        // bilden på telefonen
        
        let priceContainer = document.createElement("div")
        priceContainer.id = "priceContainer"
        priceContainer.innerHTML = product.price + " " + "kr"
        // Priset på telefonen

        let cartIcon = document.createElement("i")
        cartIcon.classList = "fas fa-cart-arrow-down"
        // kundvagns icon i det blåfältet
    
        let buyButton = document.createElement("button")
        buyButton.id = "buyButton"
        
        let buyBtnTxt = document.createElement("p")
        buyBtnTxt.innerText = "Lägg till i kundvagnen"
        buyButton.addEventListener("click",function() {
             setItems(product)
             
        })
        // skicka till varukorg knappen
        
        mainContainer.appendChild(titleContainer)
        mainContainer.appendChild(descriptionContainer)
        mainContainer.appendChild(imgContainer)
        mainContainer.appendChild(priceContainer)
        mainContainer.appendChild(buyButton)
        buyButton.appendChild(cartIcon)
        buyButton.appendChild(buyBtnTxt)
        mainContent.appendChild(mainContainer)
        // appendar divarna till mainContainer
        

    }
    
       
    checkLocalStorage()
    // kallar på funktionen checkLocalStorage varje gång sidan laddas så den kollar om det finns något i cartSpan
}

function checkLocalStorage(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    // Hämtar cartitems värde från local storage och sparar den i en variabel
   
    if (cartItems) {
        document.getElementById("cartSpan").innerHTML = cartItems.length
        // om det finns något värde i cartItems från localStorage, så blir inner html på cartspan = värdet
        
    }
}
// funktion för, när man refreshar sidan så uppdateras varukorg nummer till det som finns i localstorage



function setItems(product){
    
    let cartItems = localStorage.getItem("productsInCart")
    
    // hämtar och sparar prudukterna från LocalStorage och parsar om till object
    
    if(cartItems !=null){
        cartItems = JSON.parse(cartItems)

    }else{
        product.inCart = 1
        cartItems = [] 
        
    }
    cartItems.push("hej")
    cartItems.push(product)
    // pushar in product i array
    
    document.getElementById("cartSpan").innerHTML = cartItems.length
    // cartSpan får får samma värde som lika många produkter i cartItems
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
    //sparar en key och gör om från object till string så den kan sparar i localStorage
}
    
   
       
    
    
        
    
    
 
