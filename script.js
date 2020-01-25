



// Open Card Reveal Click
$('.open-button').click(function(){
    $(this).siblings('.card-reveal').toggleClass('open');
});

  // Close Card Reveal Click
$('.close-button').click(function(){
    $(this).parent().parent('.card-reveal').toggleClass('open');
});

// closes the panel on click outside
$(document).mouseup(function (e) {
    var container = $('#contact-panel');
    if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        container.removeClass('is-active');
      }
  });
  
  
// Time of Day Greeting
var thehours = new Date().getHours();
var themessage;
var morning = ('Good Morning');
var afternoon = ('Good Afternoon');
var evening = ('Good Evening');

if (thehours >= 0 && thehours < 12) {
themessage = morning; 
} else if (thehours >= 12 && thehours < 17) {
themessage = afternoon;
} else if (thehours >= 17 && thehours < 24) {
themessage = evening;
}
$('.greeting').append(themessage);

//Smooth Scroll
$(document).ready(function() {
    $(".smooth").click(function(event){
            event.preventDefault();
             //calculate destination place
            var dest=0;
            if($(this.hash).offset().top > $(document).height()-$(window).height()){
                dest=$(document).height()-$(window).height();
            }else{
                dest=$(this.hash).offset().top;
            }
             //go to destination
            $('html,body').animate({scrollTop:dest}, 1000,'swing');
        });
    });

