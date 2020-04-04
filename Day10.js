function valid_email(str)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(str))
{  
// console.log("Valid email address!");
return true  
}  
else  
{  
// console.log("You have entered an invalid email address!");  
return false
}
}

valid_email('me-info@example.com');