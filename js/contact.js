$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Enter Your name",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: " Must complete this field",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "Enter a valid phone number",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "Enter valid email"
                },
                message: {
                    required: "Write something",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})


function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    var templateParams = {
      to_email: 'gokul@codeatechnologies.com', 
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    };
  
    emailjs.send('service_zehbkci', 'template_fn0tbqi', templateParams, '_PzMw-Ou7wAhyIBiI')
      .then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
        // You can add further logic or display a success message here
      }, function(error) {
        console.log('Error sending email:', error);
        // You can add further error handling or display an error message here
      });
  }
  
  
function displaySuccessMessage() {
    alert('Message sent successfully!');
  }

