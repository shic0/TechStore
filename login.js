window.onload = initSite


    


let users = []

function loadPremadeUsers(){
initUsers = [
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
initUsers = JSON.stringify(initUsers)
users.push(initUsers)
localStorage.setItem("userList", users)
}

function initSite() {

if (localStorage.getItem("userList") === null) {
  loadPremadeUsers()
}

} 

function pushToList(){

    let newUser = {
        username: document.getElementById("createName").value,
        password: document.getElementById("createPassword").value
    }
    
    users = localStorage.getItem("userList")

    users = JSON.parse(users)
    users.push(newUser)

    users = JSON.stringify(users)
    localStorage.setItem("userList", users)

    alert("account created, you can now log in.")

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
