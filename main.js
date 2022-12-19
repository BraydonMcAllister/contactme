//scope is overriden by strict mode in browser 
function validateForm(){
    let name_ = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let errors = document.getElementsByClassName("errors");
    let invalidChars = ['#', '$', '%', '^', '&', '*', '+', '-', '=', '/', '\\'];
    let invalidCharsInName = [];
    let invalidCharsInEmail = [];
    let invalidCharsInMessage = [];
    let numErrorsInName = 0 ;
    let numErrorsInEmail = 0;
    let numErrorsinMessage = 0;

    let isError = false;
   
    if(name_.value.length < 1){
        errors.item(0).innerText = "name must not be blank";
        isError = true;
    }
    if(email.value.length < 1){
     errors.item(1).innerText = "email must not be blank";
     isError = true;
    }
    
    

        for(let i = 0; i < invalidChars.length; i++){
            if(name_.value.includes(invalidChars[i])){
                invalidCharsInName[numErrorsInName] = invalidChars[i];
                numErrorsInName++;
            }
            if(email.value.includes(invalidChars[i])){
                invalidCharsInEmail[numErrorsInEmail] = invalidChars[i];
                numErrorsInEmail++;
            }
            if(message.value.includes(invalidChars[i])){
                invalidCharsInMessage[numErrorsinMessage] = invalidChars[i];
                numErrorsinMessage++;
            }
        }

        if(invalidCharsInName.length > 0){
            errors.item(0).innerText = "invalid character in name: " + invalidCharsInName.toString();  
            isError = true;
        }
        if(invalidCharsInEmail.length > 0){
            errors.item(1).innerText = "invalid character in email: " + invalidCharsInEmail.toString();   
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
        errors.item(i).style.border="none";
    }   
}

