function renderCards() {
    
    let productList = localStorage.getItem('productsInCart')
   
    if (productList !=null) {
        productList = JSON.parse(productList)     

        // tar bort element och visar att kundvagnen är tom om localStorage == localstorage.clear
    } else {
        let noProductsInCart = document.createElement("h1")
        noProductsInCart.innerHTML = "Kundvagnen är tom."
        
        noProductsInCart.style.marginTop = "150px"

        document.getElementById("summaContainer").style.display = "none"

        index = document.getElementById("index")
        index.appendChild(noProductsInCart)

    }
    // showTotal kommer visa slutpriset. 
    let showTotal = 0  

    //slutför köp knapp som tar bort produkter, laddar om sidan och sparar köphistorik
    document.getElementById("checkOutBtn").addEventListener("click", function(){
        
        alert("Tack för ditt köp!");
        
        let purchaseHistory
        purchaseHistory = localStorage.getItem("productsInCart")

        localStorage.clear();
        location.reload();

        localStorage.setItem("purchaseHistory" , purchaseHistory)

    })
    
        let removeValue = 0
        let buttonId = removeValue
    

    let belopp = document.getElementById("belopp")

    for (let i = 0; i < productList.length; i++) {

        let product = productList[i]
        //uppdaterar slutpriset varje gång en ny produkt läggs till i kundvagnen.
        showTotal = showTotal + product.price

        let imgContainer = document.createElement("div")    
        let textContainer = document.createElement("div")

          
        let cardContainer = document.createElement("div")
        cardContainer.className = "cardContainer" 
        cardContainer.id = "cardContainer"

        let indexContainer = document.getElementById("index")


        let productImg = document.createElement("img")
        productImg.src = product.image

        let productTitle = document.createElement("h1")
        productTitle.innerHTML = product.title
          
        let productPrice = document.createElement("b")
        productPrice.innerHTML = product.price + " kr"
    
        //skapar en knapp med unikt Id för varje produktkort. knappen tar bort produkten ur productList, uppdaterar local storage och laddar om sidan.
        function createTaBortButton() {

            let taBortBtn = document.createElement("button") 
            taBortBtn.id = removeValue
            buttonId = taBortBtn.id
            taBortBtn.className = "taBortBtn"
            taBortBtn.innerHTML = '<i class="far fa-trash-alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ta bort</i>'
            cardContainer.appendChild(taBortBtn)

            taBortBtn.addEventListener("click", function removeProduct() {
                
            productList.splice(taBortBtn.id, 1)
            productList = JSON.stringify(productList)
            localStorage.setItem("productsInCart", productList)
            location.reload();
            
            })
            
        
        

        }
        createTaBortButton()

        imgContainer.className = "imgContainer"
        textContainer.className = "textContainer"
        productImg.className = "productImg"  
    
        indexContainer.appendChild(cardContainer)
        cardContainer.appendChild(imgContainer)
        imgContainer.appendChild(productImg)
        cardContainer.appendChild(textContainer)

    
        textContainer.appendChild(productTitle)
        textContainer.appendChild(productPrice)

    
        belopp.innerHTML = showTotal    

        removeValue ++

    }
    //visar antalet produkter i kundvagnen, i headern
    document.getElementById("cartSpan").innerHTML = productList.length

// tar bort element och visar att kundvagnen är tom om producList finns på localStorage MEN är tom
if (productList.length < 1) {
        document.getElementById("summaContainer").style.display = "none"

        let noProductsInCart = document.createElement("h1")
        noProductsInCart.innerHTML = "Kundvagnen är tom."
        
        noProductsInCart.style.marginTop = "150px"

        index = document.getElementById("index")
        index.appendChild(noProductsInCart)
    }
    
}   
renderCards()