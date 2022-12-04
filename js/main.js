const usernameInput = document.getElementById("signUpName")

const userEmailInput = document.getElementById("signUpEmail");

const userPasswordInput = document.getElementById("signUpPass");
const signupBtn = document.getElementById("signupBtn"); 

let usersInfo;



if(localStorage.getItem("users") == null)
{
    usersInfo = [];
}
else
{
    usersInfo = JSON.parse(localStorage.getItem("users"));
}


function signUp()
{

    userInputsValidation();
    isExist();

    if(userInputsValidation() == true && isExist() == false)
    {
        let user = 
        {
            name:usernameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        }

        usersInfo.push(user)
        localStorage.setItem("users", JSON.stringify(usersInfo));
        const confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");
        const signin = document.getElementById("signin")
        signin.classList.replace("d-none", "d-block");
    }
    else
    {
        const tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none", "d-block");
    }

}



function usernameValidation()
{
    const usernameAlert = document.getElementById("usernameAlert");

    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if( regex.test(usernameInput.value) == true && usernameInput.value != "")
    {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");

        return false
    }
}


function userPasswordValidation()
{
    let regex = /^.{5,15}$/;
    const userPasswordAlert = document.getElementById("userPasswordAlert");

    if( regex.test(userPasswordInput.value) == true && userPasswordInput.value != "")
    {

        userPasswordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");

        return false
    }
}


function userEmailValidation()
{
    const userEmailAlert = document.getElementById("userEmailAlert");

    let regex = /@[a-z]{5,10}(\.com)$/;
    if( regex.test(userEmailInput.value) == true && userEmailInput.value != "")
    {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function isExist()
{
    let accountExistMsg = document.getElementById("accountExistMsg");
    
    for(let i = 0; i < usersInfo.length; i++)
    {

        if(usersInfo[i].name.toLowerCase() == usernameInput.value.toLowerCase() || usersInfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase())
        {
            accountExistMsg.classList.replace("d-none", "d-block");
            usernameInput.classList.remove("is-valid");
            userEmailInput.classList.remove("is-valid");
            userPasswordInput.classList.remove("is-valid");

            return true
        }
    }
    return false
}

function userInputsValidation()
{
    usernameValidation();   
    userEmailValidation();
    userPasswordValidation();

    if( (usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true))
    {
        return true
    }
    else
    {
        return false
    }
}


var username = localStorage.getItem("sessionUsername");
function login()
{
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let loginBtn = document.getElementById("loginBtn");
    let wrongMsg = document.getElementById("wrongMsg");

    if(loginEmail.value == "" || loginPassword.value == "")
    {
        let fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false
    }

    for(var i = 0; i < usersInfo.length; i++)
    {
        if(usersInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() && usersInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase())
        {
            
            localStorage.setItem('sessionUsername', usersInfo[i].name)
            loginBtn.setAttribute("href", "login.html");
        }
        else
        {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    }
}
function displayWelcomeUser()
{
    document.getElementById("username").innerHTML = "Welcome "+ username;

}
function logout() {
    localStorage.removeItem('sessionUsername')
}























































// var pathParts = location.pathname.split("/")
// var baseUrl = '';
// var isAllusers;
// if(localStorage.getItem(isAllusers) == null){
//     isAllusers = [];
// }
// else{
//     isAllusers = JSON.parse(localStorage.getItem("users"));

// }
// isAllusers = JSON.parse(localStorage.getItem("users"));
// document.querySelector(".btn").addEventListener("click", function(){

//     if(signEmail.value == "" && signPass.value == ""){
//         document.querySelector(".error").innerHTML = "All inputs required"
//     }else if(signEmail.value != "" && signPass.value == ""){
//         document.querySelector(".error2").innerHTML = "All inputs required"

//     }else if(signEmail.value == "" && signPass.value != ""){
//         document.querySelector(".error2").innerHTML = "All inputs required"

//     }else{


//         var inputs = {
 
//             logEmail: signEmail.value,
//             logPassword: signPass.value,
//         }
//         isAllusers.push(inputs);
//         localStorage.setItem("users",JSON.parse(isAllusers));
//         isAllusers = JSON.parse(localStorage.getItem("isAllusers"));
//         for(var k = 0; i < isAllusers.length; k++){
//             for(var i = 0; i < allUsers.length; i++){
//                 if(isAllusers[k].logEmail == allUsers[i].email &&  isAllUsers[k].logPassword == location.href ){

//                 }
//             }

//         }
//     }
// })












































// var allInputsContainer = []


// function login(){





//    var inputs = {
 
//       email: signEmail.value,
//       password: signPass.value,
//      }
//      allInputsContainer.push(inputs);
//      console.log(allInputsContainer);


//    // display()
//    // loginDisplay()

// }


// function display(){
//    var box = "";
//    for( var i = 0; i < allInputsContainer.length; i++){
      
//    box += `
  
//    <h1 id="userName">${allInputsContainer[i].email}</h1>
//    `
//    }
//    document.getElementById("userName").innerHTML = box;

// }

// function loginTwo(){

//    var box = "";
//    for( var i = 0; i < allInputsContainer.length; i++){
      
//    box += `
  
//    <h1 id="userName">${allInputsContainer[i].email}</h1>
//    `
//    }

//    document.getElementById("userName").innerHTML = box;
//    loginTwo()

// }

// function loginDisplay(){

// }


// function validation(){
   


//  var set =  /^[a-z]{4,10}$/;
//  return set.test(signEmail.value)

// }


// if(validation() && signEmail.value != ""){
//    document.getElementById("incorrect").style.display = "none"



// }
// else if(validation() && signEmail.value && signPass == ""){
 

//    document.getElementById("incorrect").style.display = "block"
// }