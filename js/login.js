function doLogin() {
  if (document.getElementById("username").value == "") {
    username.textContent = "please enter the username";
    alert("please enter the username");
    return;
  } else
    document.getElementById("username").value.textContent = "";

  if (document.getElementById("password").value == "") {
    password.textContent = "please enter the password";
    alert("please enter the password");
    return;
  } else
    document.getElementById("password").value.textContent = "";

  jQuery.ajax({
      url: "https://hookb.in/8P6P0JqN8RCXgXYxrY8E",
      type: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      contentType: "application/json",
      data: JSON.stringify({
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value
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
