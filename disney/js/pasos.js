/*Verificamos que el campo de correo contenga caracteres coherentes al mismo*/
function pasos()
{
    //Obtenemos el valor del campo de correo electrónico
    var email = document.getElementById("mail").value;
    
    // Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(email) )
    {
        //Si el correo es campo válido, dirigimos a la página del paso 2
        window.location = "suscripcion/acuerdo.html"
    }
    else
    {
        document.getElementById("errormail").className = "visible";
        document.getElementById('mail').style.border='1px solid #FF554C';
    }
    localStorage.setItem("correo", email);
}

/*Verificamos que la coontraseña cotenga caracteres válidos*/
function clave()
{
    //Obtenemos el valor del campo de correo electrónico
    var contrasena = document.getElementById("contra").value;
    console.log(contrasena);
	// Using test we can check if the text match the pattern
	if( contrasena.length >= 6 && contrasena!="Contraseña")
    {
        //Si el correo es campo válido, dirigimos a la página del paso 2
        window.location = "billing.html"
    }
    
    else
    {
        document.getElementById("errorpass").className = "visible";
        document.getElementById('contra').style.border='1px solid #FF554C';
    }
}

/*Manipulacion del boton para ver/ocultar contraseña*/
function ojo()
{
    var x = document.getElementById("contra").type;
    if(x == "password")
    {
        document.getElementById("contra").type = "text";
        document.getElementById("ojo").src = "../../img/ojo2.png";
    }
    else
    {
        document.getElementById("contra").type = "password";
        document.getElementById("ojo").src = "../../img/ojo1.png";
    }
}

/*MAnipulacion del capo de contraseña*/
function valor()
{
    x = document.getElementById("contra").value;
    if(x == "Contraseña" && document.getElementById("contra").type == "text")
    {
        document.getElementById("contra").type = "password";  
    }
    
    if(x == "Contraseña")
    {
        document.getElementById("contra").value = "";  
    }   
}

/*Resalta la periodicidad del pago*/
function periodo(ID)
{
    //var per = document.getElementById("radio1").checked;
    if(ID == "per1")
    {
        document.getElementById("per1").style.border = "1px solid blue";
        document.getElementById("per1").style.backgroundColor = "rgba(0,0,255,0.2)";
        //Activamos tambien el respectivo radio button
        document.getElementById("pago1").checked = true;        
        document.getElementById("per2").style.border = "transparent";
        document.getElementById("per2").style.backgroundColor = "transparent";
    }
    
    else
    {
        document.getElementById("per2").style.border = "1px solid blue";
        document.getElementById("per2").style.backgroundColor = "rgba(0,0,255,0.2)";
        //Activamos tambien el respectivo radio button
        document.getElementById("pago2").checked = true; 
        document.getElementById("per1").style.border = "transparent";
        document.getElementById("per1").style.backgroundColor = "transparent";
    }
}

/*Resalta el borde inferior de las opciones de pago*/
function resaltar(ID)
{
    if(ID == "met1")
    {
        document.getElementById("met1").style.borderBottom = "2px solid white";
        document.getElementById("met2").style.borderBottom = "transparent";
        document.getElementById("met3").style.borderBottom = "transparent";
    }
    
    else if(ID == "met2")
    {
        document.getElementById("met2").style.borderBottom = "2px solid white";
        document.getElementById("met3").style.borderBottom = "transparent";
        document.getElementById("met1").style.borderBottom = "transparent";
    }
    
    else if(ID == "met3")
    {
        document.getElementById("met3").style.borderBottom = "2px solid white";
        document.getElementById("met1").style.borderBottom = "transparent";
        document.getElementById("met2").style.borderBottom = "transparent";
    }
    
    else
    {
        alert("Unexpected Error");
    }
}
    
function tarjeta(event)
{
    var tar = document.getElementById("numero").value;
    var lon = tar.length;
    
    var x = event.which || event.keyCode;
    if((lon == "4" || lon == "9" || lon == "14") && x!="8" && x!="46")
    {
       document.getElementById("numero").value = tar + " ";
    }
}


/*PRIVADO: MANEJO DE TECLAS POR SU NUMERO*/
function onKeyDownHandler(event)
{
    /*var x = String.fromCharCode(event.keyCode);*/
    var x = event.which || event.keyCode;
    if(x == "8")
    {
        alert("Bingo ALV");
    }
}
/*
function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
    /[a-zA-Z0-9\*]/g means "match any value of lowercase a-z, uppercase A-Z, all digits and *.
}
*/