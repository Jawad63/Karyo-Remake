$(document).ready(function(){

    $(window).scroll(function(){
    if($(window).scrollTop()>100)
    $(".navbar").css({"background-color" : "rgba(0,0,0,.5)"});
    else {
        $(".navbar").css({ "background-color": "rgba(255, 255, 255, 0.5)" });
    }
    
    });

});

/* "rgba(0,0,0,.5)"  replace this with "white in order to get that dark transparent color and remove the else
comment." */





