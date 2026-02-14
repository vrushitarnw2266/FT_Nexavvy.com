function contact_num_valid(evt) {
    var theEvent = evt || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var count = (evt.target.value.match(/\+/g) || []).length;
    if (count < 2 && key == '+') {
        evt.target.value = evt.target.value.replace(/\+/g, "");
        evt.target.value = '+' + evt.target.value;
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        return false;
    }
    var regex = /[+0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
window.OTPverify =='';

jQuery("#Contact_Us").submit(function (e) {
  jQuery(this).find('input[type="password"],input[type="text"],input[type="number"],input[type="tel"],input[type="email"],textarea').each(function () { jQuery(this).val($.trim(jQuery(this).val())); })

  function valid_contact() {
    var name = document.querySelector('#Contact_Us #name');
	var contact_no = document.querySelector('#Contact_Us #contact_no');
    var email = document.querySelector('#Contact_Us #email');
    var country_code = document.querySelector('#Contact_Us #country_code');
    var OTP = document.querySelector('#Contact_Us #OTP'); 
    if (name.value == '') {
      document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter Name.';
      name.style.borderColor = "red";
      name.focus();
      return false;
    } else {
      name.style.borderColor = ""
    }
    var digit = name.value;
    var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
    if (!alpha.test(digit)) {
      document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Name: ' + name.value;
      name.style.borderColor = "red";
      name.value = '';
      name.focus();
      return false;
    } else {
      name.style.borderColor = ""
    }

    if (email.value == '') {
      document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter Email Address.';
      email.style.borderColor = "red";
      email.focus();
      return false;
    } else {
      email.style.borderColor = ""
    }
    var c_reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var c_address = email.value;
    if (c_reg.test(c_address) == false) {
      document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Email Address: ' + email.value;
      email.style.borderColor = "red";
      email.value = '';
      email.focus();
      return false;
    } else {
      email.style.borderColor = ""
    }


    if (contact_no.value == '') {
      document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter Mobile No.';

      contact_no.style.borderColor = "red";
      contact_no.focus();
      return false;
    } else {
      contact_no.style.borderColor = ""
    }
    var c_mobile = contact_no.value.replace(/\+/g, '');
    var c_pattern = /^(?!(\d)\1+\b|1234567890)\d{10,}$/;
    if (!c_pattern.test(c_mobile)) {
      document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Mobile No.: ' + contact_no.value;
      contact_no.style.borderColor = "red";
      contact_no.value = '';
      contact_no.focus();
      return false;
    } else {
      contact_no.style.borderColor = ""
    }
document.querySelector('#Contact_Us #error_data').innerHTML = '';


  /**************************** OPT ENAGLE INTRAKT *******************************/
    
    
  if(OTP.value=='' || window.OTPverify =='')
  {
    document.querySelector('#Contact_Us #error_data1').innerHTML = 'Please wait, We have sent an OTP on your WhatsApp Number! Please enter above to Verify.';
    OTP.style.borderColor="red";
    OTP.focus();

    
    $.ajax({
         type: "POST",
         url: 'verify_otp.php',
//         data: {contact_no:contact_no.value,country_code:country_code.value}, //    // serializes the form's elements.,
         data: $('#Contact_Us').serialize(), //    // serializes the form's elements.,
         beforeSend:function(){
           document.querySelector('#Contact_Us #form_process').style.visibility="visible";
           jQuery(this).find('[type="submit"]').prop('disabled', true);
         },
         success: function(data)
         {
           if(data<99999)
           {
             jQuery('#OTP').parent().removeClass('hide');
		   			 jQuery('#verify_otp_div').removeClass('hide');
			   
             document.querySelector('#Contact_Us #form_process').style.visibility="hidden";
             jQuery(this).find('[type="submit"]').prop('disabled', false);
             window.OTPverify=data;
           }
           else
           {

             document.querySelector('#Contact_Us #form_process').style.visibility="hidden";
             jQuery(this).find('[type="submit"]').prop('disabled', false);
             document.querySelector('#Contact_Us #error_data1').innerHTML = 'Sorry! Some Technical issue occured. Please try again after sometime.';      
           }
         },
         error: function(data)
         {

             document.querySelector('#Contact_Us #form_process').style.visibility="hidden";
             jQuery(this).find('[type="submit"]').prop('disabled', false);
             document.querySelector('#Contact_Us #error_data1').innerHTML = 'Sorry! Some Technical issue occured. Please try again after sometime.';
         }
       });
      e.preventDefault();
    
    return false;
  }else{OTP.style.borderColor=""}
  
  
  if (OTP.value!= window.OTPverify)
  {
    document.querySelector('#Contact_Us #error_data1').innerHTML = 'Invalid OTP Please try again.';
    OTP.style.borderColor="red";
    OTP.value = '';
        OTP.focus();
    return false;
  }else
  {
    OTP.style.borderColor="";
	document.querySelector('#Contact_Us #error_data1').innerHTML = '';
    //document.querySelector('#Contact_Us #error_data1').innerHTML = 'OTP verified successfully.';
     }
 
    
/************************* OPT ENAGLE INTRAKT END*****************************/	
  document.querySelector('#Contact_Us #error_data').innerHTML = '';
  document.querySelector('#Contact_Us #error_data1').innerHTML = '';
	
	return true;
}
	
	
  if (valid_contact() == true) {
    document.querySelector('#Contact_Us #form_process').style.visibility = "visible";
    jQuery(this).find('[type="submit"]').prop('disabled', true); //.fadeOut('slow');
    var form_url = jQuery("#Contact_Us").attr('action'); // the script where you handle the form input.	
    $.ajax({
      type: "POST",
      url: form_url,
      data: jQuery("#Contact_Us").serialize(), // serializes the form's elements.
      success: function (data) {
        var fomVal = jQuery.parseJSON(data);
        if (fomVal.status == 1) {
          jQuery.ajax({
            type: "POST",
            url: "https://api.FT_Nexavvy.com/api/MAIL_API.php",
            data: fomVal,
            success: function (response) {
              jQuery("#Contact_Us").empty();
              jQuery("#Contact_Us").replaceWith(response);
            },
            error: function (error) {
              jQuery("#Contact_Us").empty();
              jQuery("#Contact_Us").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
            }
          });
        } else {
          jQuery("#Contact_Us").empty();
          jQuery("#Contact_Us").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
        }
      },
      error: function (data) {
        jQuery("#Contact_Us").empty();
        jQuery("#Contact_Us").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
      }
    });

    e.preventDefault();
  } else {
    e.preventDefault();

  }
});



jQuery("#Inquiry").submit(function (e) {
  jQuery(this).find('input[type="password"],input[type="text"],input[type="number"],input[type="tel"],input[type="email"],textarea').each(function () {jQuery(this).val($.trim(jQuery(this).val())); })

  function valid_contact() {
    var name = document.querySelector('#Inquiry #name');
	var contact_no = document.querySelector('#Inquiry #contact_no');
    var email = document.querySelector('#Inquiry #email');
	var country_code = document.querySelector('#Inquiry #country_code');
    var otp = document.querySelector('#Inquiry #otp'); 
    if (name.value == '') {
      document.querySelector('#Inquiry #error_data').innerHTML = '* Please Enter Name.';
      name.style.borderColor = "red";
      name.focus();
      return false;
    } else {
      name.style.borderColor = ""
    }
    var digit = name.value;
    var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
    if (!alpha.test(digit)) {
      document.querySelector('#Inquiry #error_data').innerHTML = '* Invalid Name: ' + name.value;
      name.style.borderColor = "red";
      name.value = '';
      name.focus();
      return false;
    } else {
      name.style.borderColor = ""
    }

    if (email.value == '') {
      document.querySelector('#Inquiry #error_data').innerHTML = '* Please Enter Email Address.';
      email.style.borderColor = "red";
      email.focus();
      return false;
    } else {
      email.style.borderColor = ""
    }
    var c_reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var c_address = email.value;
    if (c_reg.test(c_address) == false) {
      document.querySelector('#Inquiry #error_data').innerHTML = '* Invalid Email Address: ' + email.value;
      email.style.borderColor = "red";
      email.value = '';
      email.focus();
      return false;
    } else {
      email.style.borderColor = ""
    }


    if (contact_no.value == '') {
      document.querySelector('#Inquiry #error_data').innerHTML = '* Please Enter Mobile No.';

      contact_no.style.borderColor = "red";
      contact_no.focus();
      return false;
    } else {
      contact_no.style.borderColor = ""
    }
    var c_mobile = contact_no.value.replace(/\+/g, '');
    var c_pattern = /^(?!(\d)\1+\b|1234567890)\d{10,}$/;
    if (!c_pattern.test(c_mobile)) {
      document.querySelector('#Inquiry #error_data').innerHTML = '* Invalid Mobile No.: ' + contact_no.value;
      contact_no.style.borderColor = "red";
      contact_no.value = '';
      contact_no.focus();
      return false;
    } else {
      contact_no.style.borderColor = ""
    }


    document.querySelector('#Inquiry #error_data').innerHTML = '';
	
	
	/**************************** OPT ENAGLE INTRAKT *******************************/
    
    
  if(otp.value=='' || window.otpverify =='')
  {
    document.querySelector('#Inquiry #error_data_otp').innerHTML = 'Please wait, We have sent an OTP on your WhatsApp Number! Please enter above to Verify.';
    otp.style.borderColor="red";
    otp.focus();
    
    
    $.ajax({
         type: "POST",
         url: 'verify_otp_inquiry.php',
        // data: {contact_no:contact_no.value,country_code:country_code.value}, //    // serializes the form's elements.,
         data: $('#Inquiry').serialize(), //    // serializes the form's elements.,
         beforeSend:function(){
           document.querySelector('#Inquiry #form_process').style.visibility="visible";
           jQuery(this).find('[type="submit"]').prop('disabled', true);
         },
         success: function(data)
         {
           if(data<99999)
           {
             jQuery('#otp').parent().removeClass('hide');
             document.querySelector('#Inquiry #form_process').style.visibility="hidden";
             jQuery(this).find('[type="submit"]').prop('disabled', false);
             window.otpverify=data;
           }
           else
           {

             document.querySelector('#Inquiry #form_process').style.visibility="hidden";
             jQuery(this).find('[type="submit"]').prop('disabled', false);
             document.querySelector('#Inquiry #error_data_otp').innerHTML = 'Sorry! Some Technical issue occured. Please try again after sometime.';      
           }
         },
         error: function(data)
         {

             document.querySelector('#Inquiry #form_process').style.visibility="hidden";
             jQuery(this).find('[type="submit"]').prop('disabled', false);
             document.querySelector('#Inquiry #error_data_otp').innerHTML = 'Sorry! Some Technical issue occured. Please try again after sometime.';
         }
       });
      e.preventDefault();
    
    return false;
  }else{otp.style.borderColor=""}
  
  
  if (otp.value!= window.otpverify)
  {
    document.querySelector('#Inquiry #error_data_otp').innerHTML = 'Invalid otp Please try again.';
    otp.style.borderColor="red";
    otp.value = '';
        otp.focus();
    return false;
  }else
  {
    otp.style.borderColor="";
	
    document.querySelector('#Inquiry #error_data_otp').innerHTML = 'OTP verified successfully.';
     }
 
    
/************************* OPT ENAGLE INTRAKT END*****************************/	
  document.querySelector('#Inquiry #error_data').innerHTML = '';
  document.querySelector('#Inquiry #error_data_otp').innerHTML = '';
	
	return true;	
}
	
  if (valid_contact() == true) {
    document.querySelector('#Inquiry #form_process').style.visibility = "visible";
    jQuery(this).find('[type="submit"]').prop('disabled', true); //.fadeOut('slow');
    var form_url = jQuery("#Inquiry").attr('action'); // the script where you handle the form input.	
    $.ajax({
      type: "POST",
      url: form_url,
      data: jQuery("#Inquiry").serialize(), // serializes the form's elements.
      success: function (data) {
        var fomVal = jQuery.parseJSON(data);
        if (fomVal.status == 1) {
          jQuery.ajax({
            type: "POST",
            url: "https://api.FT_Nexavvy.com/api/MAIL_API.php",
            data: fomVal,
            success: function (response) {
              jQuery("#Inquiry").empty();
              jQuery("#Inquiry").replaceWith(response);
            },
            error: function (error) {
              jQuery("#Inquiry").empty();
              jQuery("#Inquiry").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
            }
          });
        } else {
          jQuery("#Inquiry").empty();
          jQuery("#Inquiry").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
        }
      },
      error: function (data) {
        jQuery("#Inquiry").empty();
        jQuery("#Inquiry").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
      }
    });

    e.preventDefault();
  } else {
    e.preventDefault();
  }
});