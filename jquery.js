
$(document).ready(function(){
  $("a").on('click', function(event) {
    
    if (this.hash !== "") {

      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
        scrollLeft: "-=200px"
      , "slow");
        
        //scrollTop: $(hash).offset().top
      //}, 800, function(){

        window.location.hash = hash;
      });
    } 
  });
});

