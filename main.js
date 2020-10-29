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


    
for (let i = 0; i < listOfProducts.length; i++) {
        
    let product = listOfProducts[i]
    // sparar pruduktlistan i en variabel
    
    let mainContainer = document.createElement("div")
    mainContainer.id = "mainContainer"
    if(greyBackground == true){
        mainContainer.classList = "mainContainerGrey"
        
        
    }
    greyBackground = !greyBackground
    
    // skapat mainContainer samt lite styling, if satsen gör så att varannan maincontainer får en class
    
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
    
    let buyButton = document.createElement("button")
    buyButton.id = "buyButton"
    buyButton.innerText = "Lägg till i kundvagn"
    buyButton.onclick
    // skicka till varukorg knappen
    
    mainContainer.appendChild(titleContainer)
    mainContainer.appendChild(descriptionContainer)
    mainContainer.appendChild(imgContainer)
    mainContainer.appendChild(priceContainer)
    mainContainer.appendChild(buyButton)
    mainContent.appendChild(mainContainer)
    // appendar divarna till mainContainer
    

    }

}
