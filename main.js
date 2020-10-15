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
        // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);
        console.log(listOfProducts);
        console.log(listOfProducts);
    let mainContent = document.getElementById("mainContent")
     // Kallar på parent elementet till mainContainer
    
    let mainContainer = document.createElement("div")
    mainContainer.style.width = "300px"
    mainContainer.style.height = "300px"
    mainContainer.style.display = "flex"
    mainContainer.style.flexDirection = "column"
     // skapat mainContainer samt lite styling
     
    let titleContainer = document.createElement("div")
    titleContainer.style.height ="20px"
    

     // Titeln på telefonen

    let descriptionContainer = document.createElement("div")
     // Description på telefonen
     
    let imgContainer = document.createElement("img")
   
     // bilden
    
    let priceContainer = document.createElement("div")
     // Priset på telefonen
    
    let buyButton = document.createElement("button")
     // skicka till varukorg
    
    
    mainContainer.appendChild(descriptionContainer)
    mainContainer.appendChild(titleContainer)
    mainContainer.appendChild(imgContainer)
    mainContainer.appendChild(priceContainer)
    mainContent.appendChild(mainContainer)
    mainContainer.appendChild(buyButton)

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
}
