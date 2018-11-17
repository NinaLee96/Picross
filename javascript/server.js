
//find out how to send post to php

//grabs data from client side and pushes to server

function loadToServer() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    httpRequest = new XMLHttpRequest();
    if (!httpRequest){
        alert('Cannot create an XMLHTTP instance');
        return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', '../php/login.php', true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('username=' + username + "&password="+ password);
    // console.log(username);
    // console.log(password);
}

function alertContents() {
    try{
        if(httpRequest.readyState == XMLHttpRequest.DONE) {
            if(httpRequest.status == 200){
                var lines = httpRequest.responseText;
                console.log(lines);
            }
            else{
                alert('There was a problem with the requests');
            }
        }
    }
    catch( e ){
        alert('Caught exception: '+ e.description);
    }
}

class User{
    constructor(email, username, password1, password2){
        this.email = email;
        this.username = username;
        this.password1 = password1;
        this.password2 = password2;
    }
}

function regToServer(){
    let users = [
        new User(document.getElementById("email").value,
        document.getElementById("regUsername").value,
        document.getElementById("password1").value,
        document.getElementById("password2").value )
    ]
    var userString = JSON.stringify(users);
    console.log(typeof(userString));
    console.log(userString);
    httpRequest = new XMLHttpRequest();
    if (!httpRequest){
        alert('Cannot create an XMLHTTP instance');
        return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', '../php/register.php', true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('user=' + userString);
    // console.log(username);
    // console.log(password);
}
