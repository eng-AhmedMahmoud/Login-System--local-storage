// var signUpName = document.getElementById("signUpName");
// var signUpEmail = document.getElementById("signUpEmail");
// var signUpPass = document.getElementById("signUpPass");

// var allUsers;
// if(localStorage.getItem(allUsers) == null){
//     allUsers = [];
// }
// else{
//     allUsers = JSON.parse(localStorage.getItem("users"));

// }
// document.querySelector(".btn").addEventListener("click", function(){

//     if(signUpName.value == "" && signUpEmail.value == ""&& signUpPass == "" ){
//         document.querySelector(".error2").innerHTML = "All inputs required"
//     }else if(signUpName.value != "" && signUpEmail.value == "" && signUpPass == ""){
//         document.querySelector(".error2").innerHTML = "All inputs required"

//     }
//     else if(signUpName.value == "" && signUpEmail.value == "" && signUpPass != ""){
//         document.querySelector(".error2").innerHTML = "All inputs required"

//     }
//     else if(signUpName.value != "" && signUpEmail.value != "" && signUpPass == ""){
//         document.querySelector(".error2").innerHTML = "All inputs required"

//     }
//     else if(signUpName.value != "" && signUpEmail.value == "" && signUpPass != ""){
//         document.querySelector(".error2").innerHTML = "All inputs required"

//     }
//     else if(signUpName.value == "" && signUpEmail.value != "" && signUpPass == ""){
//         document.querySelector(".error2").innerHTML = "All inputs required"

//     }
//     else if(signUpName.value == "" && signUpEmail.value != "" && signUpPass != ""){
//         document.querySelector(".error2").innerHTML = "All inputs required"

//     }
    
//     else if(signUpEmail.value == signUpEmail.value){
//         document.querySelector(".error2").innerHTML = "this email is already"

//     }
    
//     else{


//         var inputs = {
//             name: signUpName.value,
//             email: signEmail.value,
//             password: signPass.value,
//         }
//         allUsers.push(inputs);
//         localStorage.setItem("users",JSON.stringify(allUsers));
//         document.querySelector("errors2").innerHTML = "success"
//         document.querySelector("errors2").style.color = "green"
//         clearForm();
//     }
// })



// function clearForm(){
// signUpName.value = "";
// signUpEmail.value = "";
// signUpPass.value = "" ;
// }