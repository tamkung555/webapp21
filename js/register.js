function doRegister() {
  // Name
  if (document.getElementById("textUsermane").value == "") {
    alert("please enter the username.");
    return;
  } else
    document.getElementById("textUsermane").value.textContent = "";

  if (document.getElementById("textEMail").value == "") {
    alert("please enter the contact email.");
    return;
  } else
    document.getElementById("textEMail").value.textContent = "";

  if (document.getElementById("textPassword").value == "") {
    alert("please enter password.");
    return;
  } else
    document.getElementById("textPassword").value.textContent = "";

  if (document.getElementById("textConfirmPassword").value == "") {
    alert("please enter confirm password.");
    return;
  } else
    document.getElementById("textConfirmPassword").value.textContent = "";

  if (document.getElementById("textPassword").value != document.getElementById("textConfirmPassword").value) {
    alert("Password and Confirm-password is not match!!!");
    return;
  } else
    document.getElementById("textConfirmPassword").value.textContent = "";

  var vender_status = document.getElementById("exampleFormControlSelect1").value;
  var verder_name;

  if (vender_status == 1) {
    console.log(vender_status);
    document.getElementById("CompNameid-input").style.display = "none";
    document.getElementById("CompNameid-input").value = "personal-vender";
    verder_name = document.getElementById("CompNameid-input").value;
    vender_status = document.getElementById("exampleFormControlSelect1").value;
    return;
  } else
    vender_status = document.getElementById("exampleFormControlSelect1").value;
  verder_name = document.getElementById("CompNameid-input").value;


  if (document.getElementById("textName").value == "") {
    alert("please enter name.");
    return;
  } else
    document.getElementById("textName").value.textContent = "";

  if (document.getElementById("textLastname").value == "") {
    alert("please enter lastname.");
    return;
  } else
    document.getElementById("textLastname").value.textContent = "";

  if (vender_status == "") {
    alert("please enter your company name.");
    return;
  } else
    vender_status = "";

  if (document.getElementById("idortax").value == "") {
    alert("please enter your ID card number or Tax number.");
    return;
  } else
    document.getElementById("idortax").value.textContent = "";

  if (document.getElementById("phonenumberinput").value == "") {
    alert("please enter your telephone number.");
    return;
  } else
    document.getElementById("phonenumberinput").value.textContent = "";

  if (document.getElementById("egpid").value == "") {
    alert("please enter your EGP id.");
    return;
  } else
    document.getElementById("egpid").value.textContent = "";

  if (document.getElementById("textcompanyaddress").value == "") {
    alert("please enter your address.");
    return;
  } else
    document.getElementById("textcompanyaddress").value.textContent = "";

  jQuery.ajax({
      // url: "https://peahub21.azurewebsites.net/api/v2.0/register/",
      url: "https://hookb.in/8P6lDnbmGdCXgXYxrYde",
      type: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      contentType: "application/json",
      data: JSON.stringify({
        "User_ID": document.getElementById("textUsermane").value,
        "password": document.getElementById("textPassword").value,
        "confirmpassword": document.getElementById("textConfirmPassword").value,
        "email": document.getElementById("textEMail").value,
        "Comp_Type": vender_status,
        "Name": document.getElementById("textName").value,
        "Lastname": document.getElementById("textLastname").value,
        "Comp_address": document.getElementById("textcompanyaddress").value,
        "Tax_ID": document.getElementById("idortax").value,
        "Mobile": document.getElementById("phonenumberinput").value,
        "eGP_ID": document.getElementById("egpid").value,
        "Address": document.getElementById("textcompanyaddress").value,
        "lon": document.getElementById("lon").value,
        "lat": document.getElementById("lat").value,

      })
    })
    .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {

        // TODO: Check condition Comp_type
        // if Comp_type == 1 || Comp_type == 2
        //window.location = "p11searchp.html"
        // else if (Comp_type == 3) {
        //window.location = "p11searchp.html"
        // }

        //window.location = "p11searchp.html"
        window.location.replace("/p11searchp.html")
      };
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
  
    })
    .always(function() {
      /* ... */
    });
}

function selectFunction() {
  var x = document.getElementById("exampleFormControlSelect1").value;
  if (x == "Personal") {
    document.getElementById("textcompanyaddress").disabled = true;
    document.getElementById("CompNameid-input").style.visibility = "hidden";
  } else {
    document.getElementById("textcompanyaddress").disabled = false;
    document.getElementById("CompNameid-input").style.visibility = "visible";
    return;
  }
}
