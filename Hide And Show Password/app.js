

let eyeIcon = document.getElementById("eyeicon")
let password = document.getElementById("password")

eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text"
        eyeIcon.src = "eye-open"
    }else{
        password.type = "password"
        // eyeIcon.src = "eye-close"

    }
}










