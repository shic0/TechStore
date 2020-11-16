window.addEventListener("load", initSite)
//

document.getElementById("loginBtn").addEventListener("click",logIn)
//kallar på log in button

const username = "TechStore"
const password = "123"
//spara i localStorage 

function initSite() {
   console.log("sidan är laddad!")
}

function logIn() {

    const checkUserName = document.getElementById("username").value
    const checkPassword = document.getElementById("password").value

    if(username == checkUserName && password == checkPassword){
        console.log("login")
        sessionStorage.setItem("loggedInUser", checkUserName)
        window.location = "/kundvagn.html"
        // sparar i local storage samt navigerar till kungvagn sidan
       
    } else {
        let divOne = document.getElementById("divOne")
        // kallar på parent element
        
        let failLogIn = document.createElement("h3")
        divOne.innerHTML = ""
        failLogIn.innerText = "Incorrect username or password"
        //skapar en h3 så jag kan byta innertext vid misslyckad inloggning
        
        divOne.appendChild(failLogIn)
        // appendar failLogIn till divOne
        
     } 
}