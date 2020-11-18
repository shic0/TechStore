testArray = [
    {
        "title": "iPhone X",
        "description": "Last years phone from Apple with a beautiful all display front.",
        "image": "assets/iPhoneX.png",
        "price": 11495,
        "inCart": 0
    },{
        "title": "One Plus 5",
        "description": "Sleek and powerful smartphone from One Plus.",
        "image": "assets/OnePlus5.png",
        "price": 4995,
        "inCart": 0
    },{
        "title": "Galaxy S8",
        "description": "Really cool edge to edge smartphone from Samsung.",
        "image": "assets/SamsungS8.png",
        "price": 7990,
        "inCart": 0
    },{
        "title": "LG V30",
        "description": "Super nice and beautiful smartphone from LG.",
        "image": "assets/LGV30.png",
        "price": 7495,
        "inCart": 0
    }
]

function renderCards() {
    
    let productList = localStorage.getItem('productsInCart');
   
    productList = JSON.parse(productList)
     


    let checkOutContainer = document.getElementsByName("checkOutContainer")
    
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
