$.get("../navigation.htm", function(data){
    $(".nav-placeholder").replaceWith(data);
});

function myFunction() 
    {
    document.getElementById("redPlanet").innerHTML = "Green Planet";
    document.getElementById("redPlanet").className = "planet";
    document.getElementById("redPlanet").setAttribute ("style", "color: limegreen");
    }