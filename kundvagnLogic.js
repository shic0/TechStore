
let body = document.body

/*
let checkOutContainer = document.getElementsByName("checkOutContainer")
let cardContainer = document.createElement("div")
cardContainer.className = "cardContainer"

let imgContainer = document.createElement("div")
let textContainer = document.createElement("div")
let productImg = document.createElement("img")
let taBortBtn = document.createElement("button")

productImg.src = productIphoneX.imgUrl

let indexContainer = document.getElementById("index")


let productTitle = document.createElement("h1")
productTitle.innerHTML = productIphoneX.title

let productPrice = document.createElement("b")
productPrice.innerHTML = productIphoneX.price

taBortBtn.innerHTML = '<i class="far fa-trash-alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ta bort</i>'

textContainer.appendChild(productTitle)
textContainer.appendChild(productPrice)
productTitle.style.fontWeight = "bold"


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




function renderCards() {

let listOfProducts= localStorage.getItem('cartNumbers');

console.log(listOfProducts)

  for (let i = 0; i < listOfProducts.length; i++) {
          
      let product = listOfProducts[i]

      let checkOutContainer = document.getElementsByName("checkOutContainer")
      
      let imgContainer = document.createElement("div")
      let textContainer = document.createElement("div")
      let productImg = document.createElement("img")
      let taBortBtn = document.createElement("button")
      
      let cardContainer = document.createElement("div")
      cardContainer.className = "cardContainer"
      
      let indexContainer = document.getElementById("index")
      
      
      let productTitle = document.createElement("h1")
      productTitle.id = "productTitle"
      productTitle.innerHTML = product.productTitle
      
      let productPrice = document.createElement("b")
      productPrice.id ="productPrice"
      productPrice.innerHTML = product.price + " " + "kr"
      
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
      productTitle.style.fontWeight = "bold"
  };    
}

renderCards()