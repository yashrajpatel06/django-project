$(function() {

    $("#name_error_message").hide();
    $("#email_error_message").hide();
    $("#number_error_message").hide();
    $("#subject_error_message").hide();
    

    var error_name = false;
    var error_email = false;
    var error_number = false;
    var error_subject = false;

    $("#namee").focusout(function(){
       check_name();
    });
    $("#emaill").focusout(function() {
       check_email();
    });
    $("#numberr").focusout(function() {
       check_number();
    });
    $("#subjectt").focusout(function() {
       check_subject();
    });

    function check_name() {
        var pattern = /^[a-zA-Z]{3,20}$/;
        var fname = $("#namee").val();
        if (pattern.test(fname) && fname !== '') {
           $("#name_error_message").html("Valid Name");
           $("#namee").css("border-bottom","2px solid #34F458");
        } else {
           $("#name_error_message").html("It will check your name to be 3-20 characters long and contain only letters");
           $("#name_error_message").show();
           $("#namee").css("border-bottom","2px solid #F90A0A");
           error_name = true;
        }
     }


     function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#emaill").val();
        if (pattern.test(email) && email !== '') {
           $("#email_error_message").html("valid Email");
           $("#emaill").css("border-bottom","2px solid #34F458");
        } else {
           $("#email_error_message").html("Invalid Email");
           $("#email_error_message").show();
           $("#emaill").css("border-bottom","2px solid #F90A0A");
           error_email = true;
        }
     }

     function check_number() {
        var pattern = /^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/;
        var number = $("#numberr").val();
        if (pattern.test(number) && number !== '') {
           $("#number_error_message").html("valid Number");
           $("#numberr").css("border-bottom","2px solid #34F458");
        } else {
           $("#number_error_message").html("Invalid Number(Number should be 10 digits)");
           $("#number_error_message").show();
           $("#numberr").css("border-bottom","2px solid #F90A0A");
           error_number = true;
        }
     }

     function check_subject() {
        var pattern = /^[a-zA-Z0-9]*$/;
        var fname = $("#subjectt").val();
        if (pattern.test(fname) && fname !== '') {
           $("#subject_error_message").hide();
           $("#subjectt").css("border-bottom","2px solid #34F458");
        } else {
           $("#subject_error_message").html("please enter your subject");
           $("#subject_error_message").show();
           $("#subjectt").css("border-bottom","2px solid #F90A0A");
           error_subject = true;
        }
     }


     $("#formValidation").submit(function() {
        error_name = false;
        error_email = false;

        check_name();
        check_email();
        check_number();
        check_subject();

        if (error_name === false && error_email == false && error_number == false && error_subject == false) {
            alert("Registration Successfull");
            return true;
         } else {
            alert("Please Fill the form Correctly");
            return false;
         }

      });
   });
