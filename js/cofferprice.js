$(function() {

  $(document).ready(function() {
    $('#mat_document').on('change', function(evt) {
      console.log(this.files[0]);
      console.log("-----------------------------");
      console.log(this.files[0].size);

      var filename = this.files[0].name;
      console.log(this.files[0].name);

      var filesize = (this.files[0].size)/(1024*1024);
      console.log(filesize);

      if (this.files[0].size >= 5*1024*1024) {
        alert("PDF file of maximum 5MB. Please try again.");
      }

    });
  });

  $('form').on('pdfform').on('submit', function(e) {
    // console.log("Hello");
    // TODO creat table row for price detail
    e.preventDefault();

    var reader = new FileReader(),
      file = $('#mat_document')[0];

    if (!file.files.length) {
      alert('no file uploaded');
      return false;
    }

    reader.onload = function() {

      var matprice = document.getElementById("textPriceUnit").value;
      var matvol = document.getElementById("textVolume").value;


      if (document.getElementById("textPriceUnit").value == "") {
        alert("Please enter the material unit price.");
        return;
      } else
        document.getElementById("textPriceUnit").value = "";

      if (document.getElementById("textVolume").value == "") {
        alert("Please enter minimun of material offer value.");
        return;
      } else
        document.getElementById("textVolume").value = "";

      var data = reader.result,
        base64 = data.replace(/^[^,]*,/, ''),
        info = {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST"
          },
          contentType: "application/json",
          data: JSON.stringify({
            "myfile": base64,
            "price": matprice
          })
        };
      console.log(info);
      console.log("--------------------------------");
      localStorage.setItem('localinfo', JSON.stringify(info));

    };

    reader.readAsDataURL(file.files[0]);
  });
});

function confirmoffer() {
  console.log("bscbhsbcsbcadkslnkcnskdbcnshkdbchdsbcdkb");
  var info = localStorage.getItem('localinfo');
  // var info_json = JSON.parse(info);
  // console.log(info_json);
  // console.log(info);
  jQuery.ajax({
    url: "https://hookb.in/1gYaYxZBezCDmD2qx2M1",
    // url: "https://peahub21.azurewebsites.net/api/v2.0/register/",
    // url: "http://192.168.43.175:8000/api/ball/testpdf/",
    type: "POST",
    dataType: "JSON",
    // data: JSON.stringify(),
    data: info,
    cache: false,
    contentType: false,
    processData: false,
    success: function(response) {
      console.log(response);
      if (response.success == true) {
        alert("Document uploaded successfully.");
        // console.log("reset file");
        // file = $('#mat_document')[0].reset;
      } else
        alert("Document uploaded failed!!!.");
      // alert("Document uploaded successfully.");
    }
  });

}
