function OKValidations()                                    
{ 
    var name = document.forms["contactform"]["name"];               
    var email = document.forms["contactform"]["email"];    
    var message = document.forms["contactform"]["textarea"];  
   
    if (name.value == null || name.value == "")                                  
    { 
        window.alert("Please enter your complete name."); 
        name.style.backgroundColor = "#FF0000";
        name.focus(); 
        return false; 
    } 
       
    if (email.value == null || email.value == "" || (email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.'))                                   
    { 
        window.alert("Please enter a valid e-mail address.");
        email.style.backgroundColor = "#FF0000"; 
        email.focus(); 
        return false; 
    } 

    if (message.value == null || message.value == "")                                   
    { 
        window.alert("Please enter a right message to send"); 
        message.style.backgroundColor = "#FF0000";
        message.focus(); 
        return false; 
    } 

    return true; 
}




