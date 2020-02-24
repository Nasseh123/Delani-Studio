$(document).ready(function(){
    $(".clickable").click(function(){
        $(this).children(".hide").toggle(1200);
        $(this).children(".show").toggle(1500);
    });
    // giving feedback to the customer
$("button").click(function (feedback) {
    var client = document.getElementById('name').value;
    alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    feedback.preventDefault();
  });
  //portifolio section 
$(".card").hover(function () {
    $(this).children(".c").fadeToggle(1000);
  });
});

  //    reset my form button
$("button").on('click' ,function () {
    $('form').each(function () {
      this.reset();
    });
  });