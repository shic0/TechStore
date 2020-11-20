 window.addEventListener("load", initSite)
 document.getElementById("buttonBtn").addEventListener("click", login) 

function initSite() {

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
        window.location = "/index.html"
       
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


