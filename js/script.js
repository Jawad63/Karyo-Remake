/* JS for navbar */

$(document).ready(function () {

    $(window).scroll(function(){
    if($(window).scrollTop()>100)
    $(".navbar").css({"background-color" : "rgba(255, 255, 255, 0.5)"});
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
  
/*========== CONTACT FORM INPUT VALIDATION ==========*/
//Original Resource: https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form
$(function () {

  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $('#contact-form').validator();


  // when the form is submitted
  $('#contact-form').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
          var url = "mailer/gmail-contact.php";

          // POST values in the background the script URL
          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data) {
                  // data = JSON object that contact.php returns

                  // we recieve the type of the message: success x danger and apply it to the
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  // let's compose Bootstrap alert box HTML
                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                  // If we have messageAlert and messageText
                  if (messageAlert && messageText) {
                      // inject the alert to .messages div in our form
                      $('#contact-form').find('.messages').html(alertBox);
                      // empty the form
                      $('#contact-form')[0].reset();
                  }
              }
          });
          return false;
      }
  })
});

// File size restriction: 




// OFFERTE FORM INPUT VALIDATION FOR OFFERTE 

$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator
  
    $('#offerte-form').validator();
  
  
    // when the form is submitted
    $('#offerte-form').on('submit', function (e) {
  
        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "mailer/offerte.php";
  
            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: new FormData(this),
                processData: false,
                contentType: false,
                success: function (data) {
                    // data = JSON object that contact.php returns
  
                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    

  
                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
  
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#offerte-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#offerte-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});


// Team section:
// local reviews data
const reviews = [
    {
      id: 1,
      name: "Yusuf Yorulmaz",
      job: "Zaakvoerder",
      img:
        "Images/Team/Yusuf-team.jpeg",
      text:
        "Sinds 1992 staat Yusuf zelf op de werkvloer, gestart bij een baas en sinds 2003 staat hij zelf aan het roer.",
    },
    {
      id: 2,
      name: "Verkoopsdienst",
      job: "Gratis offerte",
      img:
        "images/logo's/Karyo_Small_Blue-removebg-preview.png",
      text:
        "Voor een offerte op maat, graag het online formulier invullen zodat ons team u kan contacteren.",
    },
    {
      id: 3,
      name: "Na Service",
      job: "Gratis offerte",
      img:
        "images/logo's/Karyo_Small_Blue-removebg-preview.png",
      text:
            "Voor een offerte op maat, graag het online formulier invullen zodat ons team u kan contacteren.",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });




