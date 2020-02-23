$(document).ready(function(){
    $(".clickable").click(function(){
        $(this).children(".hide").toggle(1200);
        $(this).children(".show").toggle(1500);
    });
});