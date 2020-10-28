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
// Check your console to see that the products are stored in the listOfProducts varible.
    
    for (let i = 0; i < listOfProducts.length; i++) {
        let productList = listOfProducts[i]
        console.log(productList)
        
        
        
        

    }
    
    

    
    let mainContent = document.getElementById("mainContent")
    mainContent.style.display = "flex"
    mainContent.style.justifyContent = "space-around"

   

     // Kallar på parent elementet till mainContainer
    
    let mainContainer = document.createElement("div")
  
    mainContainer.style.display = "flex"
    mainContainer.style.flexDirection = "column"
    mainContainer.style.justifyContent = "space-evenly"
    mainContainer.style.alignItems = "center"
    mainContainer.id = "mainContainer"
     // skapat mainContainer samt lite styling
     
    let titleContainer = document.createElement("div")
    titleContainer.id = "titleContainer"
    titleContainer.style.display.flex = "flex"
    titleContainer.style.flex = "none"
    titleContainer.style.fontSize = "50px"
    titleContainer.style.alignItems = "center"
    titleContainer.style.justifyContent = "center"
    titleContainer.style.fontWeight = "700"
    titleContainer.innerHTML = listOfProducts[3].title
    // Titeln på telefonen
    
    let descriptionContainer = document.createElement("div")
    descriptionContainer.style.flex = "none"
    descriptionContainer.id = "descriptionContainer"
    descriptionContainer.style.fontSize = "25px"
    descriptionContainer.style.fontWeight = "700"
    descriptionContainer.innerHTML = listOfProducts[3].description
    // Description på telefonen
     
    let imgContainer = document.createElement("img")
    imgContainer.style.flex = "none"
    imgContainer.id = "imgContainer"
    imgContainer.style.height = "650px"
    imgContainer.style.width = "374px"
    imgContainer.src = listOfProducts[3].image
    
    // bilden på telefonen
    
    let priceContainer = document.createElement("div")
    priceContainer.style.flex = "none"
    priceContainer.id = "priceContainer"
    priceContainer.innerHTML = listOfProducts[3].price + " " + "kr"
    priceContainer.style.fontSize = "30px"
    priceContainer.style.fontWeight = "700"
    
    
    // Priset på telefonen
    
    let buyButton = document.createElement("button")
    buyButton.style.flex = "none"
    buyButton.id = "buyButton"
    buyButton.style.backgroundColor = "#5596F5"
    buyButton.innerText = "lägg till i kundvagn"
    buyButton.style.color = "white"
    buyButton.style.fontWeight = "700"
    buyButton.onclick


    // skicka till varukorg knappen

   
    mainContainer.appendChild(titleContainer)
    mainContainer.appendChild(descriptionContainer)
    mainContainer.appendChild(imgContainer)
    mainContainer.appendChild(priceContainer)
    mainContent.appendChild(mainContainer)
    mainContainer.appendChild(buyButton)
    // appendar divarna till mainContainer
     
    
    
    
     // Add your code here, remember to brake your code in to smaller function blocks
     // to reduce complexity and increase readability. Each function should have
     // an explainetory comment like the one for this function, see row 22.
     // TODO: Remove the console.log and these comments when you've read them.
}
