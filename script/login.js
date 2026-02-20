document.getElementById("btn-login").addEventListener("click", function(){
    // get mobile number
    let mobileNumber = document.getElementById("mobile-number").value;
    // get pin
     let pin = document.getElementById("inputed-pin").value;
    // verify number and pin then access to home page.
    if(mobileNumber === "12345678901" && pin === "1234"){
        alert("Login successful.");
        window.location.assign("/home.html");
    }else{
        alert("Invalid Mobile number or pin");
    }
})