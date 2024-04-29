let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));
let GreetingField = document.getElementById('greeting');
let MsgField = document.getElementById('Msg');
let SignOutBtn = document.getElementById('signout-btn');


let SignOut = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    window.location.href = '../html/login.html';
}

let CheckCred = () => {
    if(!sessionStorage.getItem("user-creds"))
        window.location.href = '../html/login.html';
    else{
        MsgField.innerText = `user with "${UserCreds.email}" logged in`;
        GreetingField.innerText = `Hello ${UserInfo.firstname} ${UserInfo.lastname}!`;
    }
}

window.addEventListener('load', CheckCred);
SignOutBtn.addEventListener('click', SignOut);
