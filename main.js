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
            pushToCart(product)
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
    let productNumbers = localStorage.getItem("cartNumbers")
    // Hämtar cartnumbers värde från local storage och sparar den i en variabel
   
    if (productNumbers) {
        document.getElementById("cartSpan").innerHTML = productNumbers
        // om det finns något värde i cartNumbers från localStorage, så blir inner html på cartspan = värdet
        
    }
}
// funktion för, när man refreshar sidan så uppdateras varukorg nummer till det som finns i localstorage

function pushToCart(product) {
    let productNumbers = localStorage.getItem("cartNumbers")
    // hämtar o sparar cartNumbers värde från localStorage

    productNumbers = parseInt(productNumbers)
    // då värdet är en string gör vi om den till ett nummer
    
    
    
    
    
    if (productNumbers) {
        localStorage.setItem("cartNumbers",productNumbers + 1)
        document.getElementById("cartSpan").innerHTML = productNumbers + 1
        // om det finns ett värde i cartNumbers så plussar vi med 1
        

    } else{
        localStorage.setItem("cartNumbers", 1)
        document.getElementById("cartSpan").innerHTML = 1
        
        
       
       
        // om det inte finns lägger vi till 1
        
    }
    
    
   
    
    
    

}

function setItems(product){
    
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    // hämtar och sparar prudukterna från LocalStorage och parsar om till object
    
    if(cartItems !=null){
        
        if(cartItems[product.title] == undefined){
            cartItems = {
                ...cartItems,
                [product.title]:product
                // när vi försöker lägga till en annan produkt får vi undifined, därför laddar vi fram det som finns och lägger till nya produkten
            }

        }
        cartItems[product.title].inCart += 1
        // om det redan finns en produkt så plussar vi med en
    }else{
        product.inCart = 1
        cartItems = {
            [product.title]: product
        }
        // om det inte finns någon produkt alls så lägger vi till den första
    }

    
    
    




localStorage.setItem("productsInCart", JSON.stringify(cartItems))
//sparar en key och gör om från object till string så den kan sparar i localStorage



   
}
    
   
       
    
    
        
    
    
 
