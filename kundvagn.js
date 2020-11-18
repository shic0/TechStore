function renderCards() {
    
    let productList = localStorage.getItem('productsInCart')
   
    if (productList !=null) {
            productList = JSON.parse(productList)  
    } else {
        
    }
 
//    console.log(localStorage)

    let checkOutContainer = document.getElementsByName("checkOutContainer")
 
    document.getElementById("checkOutBtn").addEventListener("click", function(){
        alert("Tack för ditt köp!");
        localStorage.clear();
        location.reload();
    })
    
    
    let belopp = document.getElementById("belopp")
    
    belopp.innerHTML = "&nbsp;23213 kr"
    


    for (let i = 0; i < productList.length; i++) {

    let product = productList[i]
        

        let imgContainer = document.createElement("div")    
        let textContainer = document.createElement("div")

        let taBortBtn = document.createElement("button")
          
        let cardContainer = document.createElement("div")
        cardContainer.className = "cardContainer" 

        let indexContainer = document.getElementById("index")

        let productImg = document.createElement("img")
        productImg.src = product.image

        let productTitle = document.createElement("h1")
        productTitle.innerHTML = product.title
          
        let productPrice = document.createElement("b")
        productPrice.innerHTML = product.price + " kr"
          
        taBortBtn.innerHTML = '<i class="far fa-trash-alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ta bort</i>'
          
          
        imgContainer.className = "imgContainer"
        textContainer.className = "textContainer"
        productImg.className = "productImg"  
        taBortBtn.className = "taBortBtn"
              
    
        indexContainer.appendChild(cardContainer)
        cardContainer.appendChild(imgContainer)
        imgContainer.appendChild(productImg)
        cardContainer.appendChild(textContainer)
        cardContainer.appendChild(taBortBtn)
    
        textContainer.appendChild(productTitle)
        textContainer.appendChild(productPrice)
//        productTitle.style.fontWeight = "bold"
     
        
    
        }
    }
    
renderCards()

function checkLocalStorage(){
    let productNumbers = localStorage.getItem("cartNumbers")
    // Hämtar cartnumbers värde från local storage och sparar den i en variabel
   
    if (productNumbers) {
        document.getElementById("cartSpan").innerHTML = productNumbers
        // om det finns något värde i cartNumbers från localStorage, så blir inner html på cartspan = värdet
        
    }
}
checkLocalStorage()

/*
let checkOutContainer = document.getElementsByName("checkOutContainer")
let cardContainer = document.createElement("div")
cardContainer.className = "cardContainer"

let imgContainer = document.createElement("div")
let textContainer = document.createElement("div")
let productImg = document.createElement("img")
let taBortBtn = document.createElement("button")

//productImg.src = productIphoneX.imgUrl

let indexContainer = document.getElementById("index")


let productTitle = document.createElement("h1")
//productTitle.innerHTML = productIphoneX.title

let productPrice = document.createElement("b")
//productPrice.innerHTML = productIphoneX.price

taBortBtn.innerHTML = '<i class="far fa-trash-alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ta bort</i>'

textContainer.appendChild(productTitle)
textContainer.appendChild(productPrice)
//productTitle.style.fontWeight = "bold"


imgContainer.className = "imgContainer"
textContainer.className = "textContainer"
productImg.className = "productImg"  
taBortBtn.className = "taBortBtn"

indexContainer.appendChild(cardContainer)
cardContainer.appendChild(imgContainer)
imgContainer.appendChild(productImg)
cardContainer.appendChild(textContainer)
cardContainer.appendChild(taBortBtn)

*/