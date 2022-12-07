window.onload = function(){
    document.getElementById('submitBtn').onclick = function(event){
        event.preventDefault();
        let passwordVal = document.getElementById('password').value;
        let passwordMatch = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
        if(passwordMatch.test(passwordVal)){
            alert('Form submitted successfully');
        }
        else{
            alert('Password field is at least 10 characters in length and contain at least one number and one uppercase and lowercase letter');
        }
    }
}