var username=document.getElementById("username")
var password=document.getElementById("password")
var submit= document.getElementById("submit")
var logout=document.getElementById("logout")
var data=localStorage.getItem('authorized')


submit.onclick=(e)=>{
    
    e.preventDefault()
        if(username.value === password.value){
            localStorage.setItem("authorized","yes")
            window.alert("successful")
            window.location = "./OrderListingPage.html";
        }else{
            window.alert("failed")
            window.location="./index.html"
        }
    }
