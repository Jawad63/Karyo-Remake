/* JS for navbar */

$(document).ready(function () {

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


/* JS for diensten image filter : */ 

$('.filter-button').on('click', (e) => {
    const filter = $(e.target).attr('data-filter');
    console.log(filter);
       const items = $('.item-content').parent();
    for (item of items) {
      if (filter == '') {
        
          $(item).addClass('animated zoomIn faster');
        $(item).parent().addClass('animated zoomIn faster');
        $(item).removeClass('d-none');
        $(item).parent().removeClass('d-none');
        
       
        console.log('x');
      }else if ($(item).attr('data-category') == filter) {
        $(item).addClass('animated zoomIn faster');
        $(item).parent().addClass('animated zoomIn faster');
        $(item).removeClass('d-none');
        $(item).parent().removeClass('d-none');
      } else {
        $(item).addClass('d-md-none  d-lg-block');
        $(item).parent().addClass('d-none');
        $(item).removeClass('animated zoomIn faster');
        $(item).parent().removeClass('animated zoomIn faster');
      }
    }
  });





