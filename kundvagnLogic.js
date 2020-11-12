function addCard(){
  
  let productIphoneX = {
    title: "iPhone X",
    price: "11495 kr",
    imgUrl: "/assets/iPhoneX.png"
  }

  let productOne = {
    title: "One Plus 5",
    price: "4995 kr"
  }

  let productGalaxy = {
    title: "Galaxy S8",
    price: "7990 kr"
  }

  let productLG = {
    title: "LG V30",
    price: "7495 kr"
  }

let body = document.body

let cardContainer = document.createElement("div")
let imgContainer = document.createElement("div")
let textContainer = document.createElement("div")
let productImg = document.createElement("img")
let taBortBtn = document.createElement("button")

productImg.src = productIphoneX.imgUrl

let indexContainer = document.getElementById("index")
let slutförContainer = document.getElementsByName("slutförContainer")

let productTitle = document.createElement("h1")
productTitle.innerHTML = productIphoneX.title

let productPrice = document.createElement("b")
productPrice.innerHTML = productIphoneX.price

taBortBtn.innerHTML = '<i class="far fa-trash-alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ta bort</i>'

textContainer.appendChild(productTitle)
textContainer.appendChild(productPrice)
productTitle.style.fontWeight = "bold"

cardContainer.className = "cardContainer"
imgContainer.className = "imgContainer"
textContainer.className = "textContainer"
productImg.className = "productImg"  
taBortBtn.className = "taBortBtn"

indexContainer.appendChild(cardContainer)
cardContainer.appendChild(imgContainer)
imgContainer.appendChild(productImg)
cardContainer.appendChild(textContainer)
cardContainer.appendChild(taBortBtn)

}

addCard()

function showCard() {
  let productList = localstorage.getItems
  
  
}