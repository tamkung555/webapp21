$(function() {

  $(document).ready(function() {
    $('#mat_document').on('change', function(evt) {
      // console.log(this.files[0]);
      // console.log("-----------------------------");
      // console.log(this.files[0].size);

      var filename = this.files[0].name;
      // console.log(this.files[0].name);

      var filesize = (this.files[0].size)/(1024*1024);
      // console.log(filesize);

      if (this.files[0].size >= 2*1024*1024) {
        alert("PDF file of maximum 2MB. Please try again.");
      }

      localStorage.setItem('filename-json', JSON.stringify(filename));
      localStorage.setItem('filesize-json', JSON.stringify(filesize));

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

      document.getElementById("offer_result").style.visibility = "initial";

      var matprice = document.getElementById("textPriceUnit").value;
      var matvol = document.getElementById("textVolume").value;


      if (document.getElementById("textPriceUnit").value == "") {
        alert("Please enter the material unit price.");
        return;
      }

      if (document.getElementById("textVolume").value == "") {
        alert("Please enter minimun of material offer value.");
        return;
      }

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
            "quo_upload_file": base64,
            "price"          : matprice,
            "min_vol"        : matvol,
            "mat_no"         : "12345",
            "comp_id"        : "12345"
          })
        };
      // console.log(info);
      // console.log("--------------------------------");
      localStorage.setItem('localinfo', JSON.stringify(info));
      localStorage.setItem('matprice-json', JSON.stringify(matprice));
      localStorage.setItem('matvol-json', JSON.stringify(matvol));

      var filenamejson = localStorage.getItem('filename-json');
      // console.log(filenamejson);
      var filename = JSON.parse(filenamejson);
      // console.log(filename);

      var filesizejson = localStorage.getItem('filesize-json');
      var fileSize = JSON.parse(filesizejson);
      // console.log(fileSize);
      typeof fileSize;
      var filesize = fileSize.toFixed(2);

      //TODO -> Insert selected PDF file:
      let html_result = '';
      let grey_table = '<div class=\"resulttable\">';
      let div_end = '</div>';
      let pdflogo = '<img class=\"pdflogo\" anima-src="./img/c-1-1-material-id---price-pdfcolor.png" src="./img/c-1-1-material-id---price-pdfcolor.png">';
      let titlename = '<div class=\"myidpdf\">';
      let pdftitle = '<div class=\"pdftitle\"> PDF </div>';
      let sizeUnit = '<div class=\"pdfUnitsize\"> MB </div>';
      let pdfsize = '<div class=\"pdfsize\">';
      let uploadedtitle = '<div class=\"uploadedtitle\"> UPLOADED </div>';
      let deleteButtun = '<img onclick="deletePDF()" anima-src="./img/c-1-1-material-id---price-icdeleteoutline24px@2x.png" class=\"icdeleteoutline24px1\" src="./img/c-1-1-material-id---price-icdeleteoutline24px@2x.png">';

      html_result += grey_table + pdflogo + (titlename + filename + div_end) + (pdftitle) + (pdfsize + filesize + div_end + sizeUnit) + uploadedtitle + deleteButtun + div_end;
      document.getElementById('offer_result').innerHTML = html_result;
    };
    reader.readAsDataURL(file.files[0]);
  });
});

function confirmoffer() {
  if (document.getElementById("textPriceUnit").value == "") {
    alert("Please enter the material unit price.");
    return;
  }

  if (document.getElementById("textVolume").value == "") {
    alert("Please enter minimun of material offer value.");
    return;
  }

  var info = localStorage.getItem('localinfo');
  // var info_json = JSON.parse(info);
  // console.log(info_json);
  // console.log(info);
  jQuery.ajax({
    url: "https://hookb.in/1gYaYxZBezCDmD2qx2M1",
    // url: "https://peahub21.azurewebsites.net/api/v2.0/offer/",
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

function deletePDF() {
  console.log("Helloooooooooooo~~~~~~~");
  document.getElementById("offer_result").disabled = true;
  document.getElementById("offer_result").style.visibility = "hidden";
  document.getElementById('pdfform').reset();
  return;
}
