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

// PICTURES:
const picOne = document.getElementById('pic-1'); 
const picTwo = document.getElementById('pic-2');
const picThree = document.getElementById('pic-3');
const picFour = document.getElementById('pic-4');
const picFive = document.getElementById('pic-5');
const picSix = document.getElementById('pic-6'); 
const picSeven = document.getElementById('pic-7');
const picEight = document.getElementById('pic-8');
const picNine = document.getElementById('pic-9');
const picTen = document.getElementById('pic-10');
const picEleven = document.getElementById('pic-11');
const picTwelve = document.getElementById('pic-12');
const picThirteen = document.getElementById('pic-13');
const picFourteen = document.getElementById('pic-14'); 
const picFifteen = document.getElementById('pic-15');
const picSixteen = document.getElementById('pic-16');
const picSeventeen = document.getElementById('pic-17');
const picEighteen = document.getElementById('pic-18');
const picNineteen = document.getElementById('pic-19'); 
const picTwenty = document.getElementById('pic-20');
const picTwentyOne = document.getElementById('pic-21');
const picTwentyTwo = document.getElementById('pic-22');
const picTwentyThree = document.getElementById('pic-23');
const picTwentyFour= document.getElementById('pic-24');
const picTwentyFive = document.getElementById('pic-25');
const picTwentySix = document.getElementById('pic-26');
const picTwentySeven= document.getElementById('pic-27');
const picTwentyEight = document.getElementById('pic-28');
const picTwentyNine = document.getElementById('pic-29');
const picThirty = document.getElementById('pic-30');
const picThirtyOne = document.getElementById('pic-31');
const picThirtyTwo  = document.getElementById('pic-32');
const picThirtyThree  = document.getElementById('pic-33');

// text:
const textOne = document.getElementById('text-one');
const textTwo = document.getElementById('text-two');
const textThree = document.getElementById('text-three');
const textFour = document.getElementById('text-four');

// Functionality for display: adding click events:

all.onclick = function () {
    // Pictures: 
    picOne.style.display = "block";
    picTwo.style.display = "block";
    picThree.style.display = "block";
    picFour.style.display = "block";
    picFive.style.display = "block";
    picSix.style.display = "block";
    picSeven.style.display = "block";
    picEight.style.display = "block";
    picNine.style.display = "block";
    picTen.style.display = "block";
    picEleven.style.display = "block";
    picTwelve.style.display = "block";
    picThirteen.style.display = "block";
    picFourteen.style.display = "block";
    picFifteen.style.display = "block";
    picSixteen.style.display = "block";
    picSeventeen.style.display = "block";
    picEighteen.style.display = "block";
    picNineteen.style.display = "block";
    picTwenty.style.display = "block";
    picTwentyOne.style.display = "block";
    picTwentyTwo.style.display = "block";
    picTwentyThree.style.display = "block";
    picTwentyFour.style.display = "block";
    picTwentyFive.style.display = "block";
    picTwentySix.style.display = "block";
    picTwentySeven.style.display = "block";
    picTwentyEight.style.display = "block";
    picTwentyNine.style.display = "block";
    picThirty.style.display = "block";
    picThirtyOne.style.display = "block";
    picThirtyTwo.style.display = "block";
    picThirtyThree.style.display = "block";

    


    //Text:
    textOne.style.display = "none";
    textTwo.style.display = "none";
    textThree.style.display = "none";
    textFour.style.display = "none";
}

buttonOne.onclick = function () {
    // Pictures: 
    picOne.style.display = "block";
    picTwo.style.display = "block";
    picThree.style.display = "block";
    picFour.style.display = "block";
    picFive.style.display = "block";
    picSix.style.display = "block";
    picSeven.style.display = "block";
    picEight.style.display = "block";
    picNine.style.display = "block";
    picTen.style.display = "block";
    picEleven.style.display = "block";
    picTwelve.style.display = "block";
    picThirteen.style.display = "block";
    picFourteen.style.display = "block";
    picFifteen.style.display = "block";
    picSixteen.style.display = "block";
    picSeventeen.style.display = "block";
    picEighteen.style.display = "block";
    picNineteen.style.display = "none";
    picTwenty.style.display = "none";
    picTwentyOne.style.display = "none";
    picTwentyTwo.style.display = "none";
    picTwentyThree.style.display = "block";
    picTwentyFour.style.display = "block";
    picTwentyFive.style.display = "block";
    picTwentySix.style.display = "block";
    picTwentySeven.style.display = "block";
    picTwentyEight.style.display = "block";
    picTwentyNine.style.display = "block";
    picThirty.style.display = "none";
    picThirtyOne.style.display = "none";
    picThirtyTwo.style.display = "none";
    picThirtyThree.style.display = "none";

    //Text:
    textOne.style.display = "block";
    textTwo.style.display = "none";
    textThree.style.display = "none";
    textFour.style.display = "none";

}

buttonTwo.onclick = function () {
    // Pictures: 
    picOne.style.display = "none";
    picTwo.style.display = "none";
    picThree.style.display = "none";
    picFour.style.display = "none";
    picFive.style.display = "none";
    picSix.style.display = "none";
    picSeven.style.display = "none";
    picEight.style.display = "none";
    picNine.style.display = "none";
    picTen.style.display = "none";
    picEleven.style.display = "none";
    picTwelve.style.display = "none";
    picThirteen.style.display = "none";
    picFourteen.style.display = "none";
    picFifteen.style.display = "none";
    picSixteen.style.display = "none";
    picSeventeen.style.display = "none";
    picEighteen.style.display = "none";
    picNineteen.style.display = "block";
    picTwenty.style.display = "block";
    picTwentyOne.style.display = "block";
    picTwentyTwo.style.display = "block";
    picTwentyThree.style.display = "none";
    picTwentyFour.style.display = "none";
    picTwentyFive.style.display = "none";
    picTwentySix.style.display = "none";
    picTwentySeven.style.display = "none";
    picTwentyEight.style.display = "none";
    picTwentyNine.style.display = "none";
    picThirty.style.display = "block";
    picThirtyOne.style.display = "block";
    picThirtyTwo.style.display = "block";
    picThirtyThree.style.display = "block";

    //Text:
    textOne.style.display = "none";
    textTwo.style.display = "block";
    textThree.style.display = "none";
    textFour.style.display = "none";

}

buttonThree.onclick = function () {
    // Pictures: 
    picOne.style.display = "none";
    picTwo.style.display = "none";
    picThree.style.display = "none";
    picFour.style.display = "none";
    picFive.style.display = "none";
    picSix.style.display = "none";
    picSeven.style.display = "none";
    picEight.style.display = "none";
    picNine.style.display = "none";
    picTen.style.display = "none";
    picEleven.style.display = "none";
    picTwelve.style.display = "none";
    picThirteen.style.display = "none";
    picFourteen.style.display = "none";
    picFifteen.style.display = "none";
    picSixteen.style.display = "none";
    picSeventeen.style.display = "none";
    picEighteen.style.display = "none";
    picNineteen.style.display = "block";
    picTwenty.style.display = "block";
    picTwentyOne.style.display = "block";
    picTwentyTwo.style.display = "block";
    picTwentyThree.style.display = "none";
    picTwentyFour.style.display = "none";
    picTwentyFive.style.display = "none";
    picTwentySix.style.display = "none";
    picTwentySeven.style.display = "none";
    picTwentyEight.style.display = "none";
    picTwentyNine.style.display = "none";
    picThirty.style.display = "block";
    picThirtyOne.style.display = "block";
    picThirtyTwo.style.display = "none";
    picThirtyThree.style.display = "block";

    //Text:
    textOne.style.display = "none";
    textTwo.style.display = "none";
    textThree.style.display = "block";
    textFour.style.display = "none";

}

buttonFour.onclick = function () {
    // Pictures: 
    picOne.style.display = "none";
    picTwo.style.display = "block";
    picThree.style.display = "block";
    picFour.style.display = "none";
    picFive.style.display = "none";
    picSix.style.display = "block";
    picSeven.style.display = "block";
    picEight.style.display = "none";
    picNine.style.display = "none";
    picTen.style.display = "block";
    picEleven.style.display = "block";
    picTwelve.style.display = "none";
    picThirteen.style.display = "none";
    picFourteen.style.display = "block";
    picFifteen.style.display = "none";
    picSixteen.style.display = "none";
    picSeventeen.style.display = "none";
    picEighteen.style.display = "none";
    picNineteen.style.display = "none";
    picTwenty.style.display = "none";
    picTwentyOne.style.display = "none";
    picTwentyTwo.style.display = "none";
    picTwentyThree.style.display = "none";
    picTwentyFour.style.display = "none";
    picTwentyFive.style.display = "none";
    picTwentySix.style.display = "none";
    picTwentySeven.style.display = "none";
    picTwentyEight.style.display = "none";
    picTwentyNine.style.display = "none";
    picThirty.style.display = "none";
    picThirtyOne.style.display = "none";
    picThirtyTwo.style.display = "none";
    picThirtyThree.style.display = "none";

    //Text:
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







