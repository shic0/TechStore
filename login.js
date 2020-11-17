 window.addEventListener("load", initSite)
 document.getElementById("buttonBtn").addEventListener("click", login) 
 document.getElementById("logoutBtn").addEventListener("click", logOut) 
//

/* document.getElementById("loginBtn").addEventListener("click",logIn)
//kallar på log in button

const username = "TechStore"
const password = "123" */
//spara i localStorage 

function initSite() {
   handleInit() 
} 

function handleInit() {
    const loggedInUser = getLoggedInUser()

    if(loggedInUser) {
      hideLogin()
    }else {
        let welcomeMessage = document.createElement("h2")
        welcomeMessage.innerText = "Välkommer till TechStore"
        mainMessage.appendChild(welcomeElement)
    }

} 

function getLoggedInUser() {
    return localStorage.getItem("loggedInUser")
}

function getUsers() {
    let userList = localStorage.getItem("userList")
    
    if(!userList) {
        return []
    }

    userList = JSON.parse(userList)
    return userList
}


function login() {
    const username = document.getElementById("usernameInput").value
    const password = document.getElementById("passwordInput").value
   
    const userList  = getUsers()
    
    let foundUser = undefined

    userList.forEach((users) => {
        if(username  == users.username && password == users.password) {
            foundUser = users
        }
    })
    if(foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser))
        alert("Du är inloggad!")
        window.location = "/kundvagn.html"
       /*  hideLogin() */
    } 
}

function logOut() {
    localStorage.removeItem("loggedInUser")
    showLogin()
}

function hideLogin() {
    document.getElementById("loginContent").classList.add("hidden")
    document.getElementById("logoutContent").classList.remove("hidden")
}

function showLogin() {
    document.getElementById("loginContent").classList.remove("hidden")
    document.getElementById("logoutContent").classList.add("hidden")
}
    /* if(username == checkUserName && password == checkPassword){
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
}  */














/* 
// FOR CREATING USERS 
let users = [
    {
         username: "Shahin",
         password: "123"
    }, {
         username: "Tim",
         password: "123"
     }, {
         username: "Sherin",
         password: "123"
     }

 ]

 localStorage.setItem("userList", JSON.stringify(users))


 ///spara i localStorage 
 */

