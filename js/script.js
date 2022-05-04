/* Jquery for navbar */

$(document).ready(function () {

    $(window).scroll(function(){
        if ($(window).scrollTop() > 100)
            $(".navbar").css({ "background-color": "rgba(255, 255, 255, 0.7)" })
            
    else {
        $(".navbar").css({ "transition": "2s ease"});
            $(".navbar").css({ "background-color": "rgba(255, 255, 255, 0.7)" });

    }
    });
});

/* "rgba(0,0,0,.5)"  replace this with "white in order to get that dark transparent color and remove the else
comment." */



/*JavaScript for Diensten Gallery: */
// Buttons: 
const all = document.getElementById('all');
const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');
const buttonFour = document.getElementById('four');

// Categories:
const rowOne = document.getElementById('m&v');
const rowTwo = document.getElementById('c&t');
const rowThree = document.getElementById('n&b');
const rowFour = document.getElementById('t&m');



// text:
const textOne = document.getElementById('text-one');
const textTwo = document.getElementById('text-two');
const textThree = document.getElementById('text-three');
const textFour = document.getElementById('text-four');

// Functionality for display: adding click events:

all.onclick = function () {
    rowOne.style.display = "flex";
    rowTwo.style.display = "flex";
    rowThree.style.display = "flex";
    rowFour.style.display = "flex";

    textOne.style.display = "none";
    textTwo.style.display = "none";
    textThree.style.display = "none";
    textFour.style.display = "none";
}

buttonOne.onclick = function () {
    rowOne.style.display = "flex";
    rowTwo.style.display = "none";
    rowThree.style.display = "none";
    rowFour.style.display = "none";

    textOne.style.display = "block";
    textTwo.style.display = "none";
    textThree.style.display = "none";
    textFour.style.display = "none";
}

buttonTwo.onclick = function () {
    rowOne.style.display = "none";
    rowTwo.style.display = "flex";
    rowThree.style.display = "none";
    rowFour.style.display = "none";

    textOne.style.display = "none";
    textTwo.style.display = "block";
    textThree.style.display = "none";
    textFour.style.display = "none";
}

buttonThree.onclick = function () {
    rowOne.style.display = "none";
    rowTwo.style.display = "none";
    rowThree.style.display = "flex";
    rowFour.style.display = "none";

    textOne.style.display = "none";
    textTwo.style.display = "none";
    textThree.style.display = "block";
    textFour.style.display = "none";
}

buttonFour.onclick = function () {
    rowOne.style.display = "none";
    rowTwo.style.display = "none";
    rowThree.style.display = "none";
    rowFour.style.display = "flex";

    textOne.style.display = "none";
    textTwo.style.display = "none";
    textThree.style.display = "none";
    textFour.style.display = "block";
}






  
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







