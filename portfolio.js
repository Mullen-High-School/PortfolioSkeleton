$.get("navigation.htm", function(data){
    $(".nav-placeholder").replaceWith(data);
});