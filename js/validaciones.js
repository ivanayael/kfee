function OKValidation()
{
    var nombre = document.forms["contactform"]["name"];
    var correo = document.forms["contactform"]["email"];
    var mensaje = document.forms["contactform"]["textarea"];

    if (nombre.value == null || nombre.value == "" )
    {
 
        alert("Ingresa nombre");
        nombre.style.backgroundColor = "#FF0000";
        nombre.focus();
        return false;
    }
    
    if (mensaje.value == null || mensaje.value == "" )
    {
 
        alert("Ingresa un mensaje para/n nosotros antes de enviar");
        mensaje.style.backgroundColor = "#FF0000";
        mensaje.focus();
        return false;
    }

    if (correo.value == null || correo.value == "" )
    {
 
        alert("Ingresa un email para que nos pongamos en contacto con vos/n a la brevedad");
        correo.style.backgroundColor = "#FF0000";
        correo.focus();
        return false;
    }

    return true;

}