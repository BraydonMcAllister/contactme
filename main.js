//scope is overriden by strict mode in browser 
function validateForm(){
    let name_ = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let errors = document.getElementsByClassName("errors");
    let invalidChars = ['!', '#', '$', '%', '^', '&', '*', '+', '-', '=', '/', '\\'];
    let invalidCharsInName = [];
    let invalidCharsInEmail = [];
    let invalidCharsInMessage = [];
    let isError = false;
    if(name_.value.length < 1){
        errors.item(0).innerText = "name must not be blank";
        isError = true;
    }
    if(email.value.length < 1){
     errors.item(1).innerText = "email must not be blank";
     isError = true;
    }
    
    let nameCount = 0 ;
    let emailCount = 0;
    let messageCount = 0;

        for(let i = 0; i < invalidChars.length; i++){
            if(name_.value.includes(invalidChars[i])){
                invalidCharsInName[nameCount] = invalidChars[i];
                nameCount++;
            }
            if(email.value.includes(invalidChars[i])){
                invalidCharsInEmail[emailCount] = invalidChars[i];
                emailCount++;
            }
            if(message.value.includes(invalidChars[i])){
                invalidCharsInMessage[messageCount] = invalidChars[i];
                messageCount++;
            }
        }

        console.log(invalidCharsInName);
        console.log(invalidCharsInEmail);

        if(invalidCharsInName.length > 0){
            errors.item(0).innerText = "invalid character name: " + invalidCharsInName.toString();  
            isError = true;
        }
        if(invalidCharsInEmail.length > 0){
            errors.item(1).innerText = "invalid character email: " + invalidCharsInEmail.toString();   
            isError = true;
        }
        if(invalidCharsInMessage.length > 0){
            errors.item(2).innerText = "invalid character in message: " + invalidCharsInMessage.toString();   
            isError = true;
        }
 
   return !isError;
}

function clearErrors(){
    let errors = document.getElementsByClassName("errors");
    for(let i = 0; i < 3; i++){
        errors.item(i).innerText = "";
    }   
}

