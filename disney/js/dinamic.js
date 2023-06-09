function boton1(ID)
{
    if(ID==1)
    {
        var x = document.getElementById("b1").classList.toggle("show");
        document.getElementById("p1").classList.toggle("open");
        if(x==true)
        {
            document.getElementById("img1").src = "img/minus-sign.png";
        }
        else
        {
            document.getElementById("img1").src = "img/plus-sign.png";
        }
    }
    
    if(ID==2)
    {
        var x = document.getElementById("b2").classList.toggle("show");
        if(x==true)
        {
            document.getElementById("img2").src = "img/minus-sign.png";
        }
        else
        {
            document.getElementById("img2").src = "img/plus-sign.png";
        }
    }
    
    if(ID==3)
    {
        var x = document.getElementById("b3").classList.toggle("show");
        if(x==true)
        {
            document.getElementById("img3").src = "img/minus-sign.png";
        }
        else
        {
            document.getElementById("img3").src = "img/plus-sign.png";
        }
    }
    
    if(ID==4)
    {
        var x = document.getElementById("b4").classList.toggle("show");
        if(x==true)
        {
            document.getElementById("img4").src = "img/minus-sign.png";
        }
        else
        {
            document.getElementById("img4").src = "img/plus-sign.png";
        }
    }
}

window.onscroll = function() 
{
    myFunction();
}

function myFunction() 
{
    var x = document.documentElement.scrollTop;
    
    if (x > 450) 
    {
        document.getElementById("nav").className = "fondo";
        document.getElementById("btnsubs").className = "mostrar";
        document.getElementById("imgprincipal").className = "show2";
        
        document.getElementById("linkhead").href="#inicio";
        document.getElementById("subscribe").href="html/subscribe.html";
    }
    
    else 
    {
        //Modificamos las clases de los ID's si el desplazamiento hacia abajo es menor a 450px
        document.getElementById("nav").className = "barra-nav";
        document.getElementById("btnsubs").className = "boton-subs";
        document.getElementById("imgprincipal").className = "imgmain";
        
        //Le quitamos su enlace a la imagen mietras está oculta
        document.getElementById("linkhead").removeAttribute("href");
        //Le quitamos su enlace al boton mietras está oculto
        document.getElementById("linkhead").removeAttribute("href");
    }
    document.getElementById("altura").value = x;
}


window.onresize = function()
{
    anchoscreen();
}

function anchoscreen()
{
    var ancho = window.innerWidth;
    //var alto = window.innerHeight;
    if(ancho <= 770)
    {
        document.getElementById("lion").src = "img/lionking2.png";
    }
    
    else
    {
        document.getElementById("lion").src = "img/demo2.png";
    }
}