//TODO Get local storage data from previous page
// var queryString = decodeURIComponent(window.location.search);
// queryString = queryString.substring(1);
// var queries = queryString.split("&para");
// var spec_id = queries[0];
// var mat_no = queries[1];
// var mat_desc = queries[2];
// var url = queries[3];
// postData(spec_id, mat_no, mat_desc, url);
// localStorage.setItem("spec_id", spec_id);
// localStorage.setItem("mat_no", mat_no);
// localStorage.setItem("mat_desc", mat_desc);
// localStorage.setItem("url", url);


$(function() {

  // TODO: Display selected material 
  // let selected_mat_img = '';
  // let headerimage = '<img class="cardbase" ';
  // let selectedimg_url = " src=\"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\" ";
  // let endimage = '/>';
  // selected_mat_img += headerimage + selectedimg_url + endimage;
  // document.getElementById("selected-mat-img").innerHTML = selected_mat_img;

  let selected_spec_id = '';
  let specidtitle = '<div class=\"specidrt153112\"> Spec ID      : ';
  let spec_mat_name = 'Hello World';
  let div_end = '</div>';
  selected_spec_id += (specidtitle + spec_mat_name + div_end);
  document.getElementById("selected-mat1").innerHTML = selected_spec_id;

  let selected_mat_id = '';
  let matidtitle = '<div class=\"materialid105001\"> Material ID: ';
  let mat_num = '123456789';
  selected_mat_id += (matidtitle + mat_num + div_end);
  document.getElementById("selected-mat2").innerHTML = selected_mat_id;

  let selected_mat_detail = '';
  let test_detail = '50 kVA, three-phase transformer, permanently sealed and completely oil filled system (without gas cushion) type, withstand short-circuit, 22,000-416/240V, symbol Dyn11.'
  let detailtitle = '<div class=\"allcarsareoperatingwelltherewere1233tripssinceyourlastlogin\">';
  selected_mat_detail += detailtitle + test_detail + div_end;
  document.getElementById("selected-mat3").innerHTML = selected_mat_detail;

  $(document).ready(function() {
    $('#mat_document').on('change', function(evt) {
      // console.log(this.files[0]);
      // console.log("-----------------------------");
      // console.log(this.files[0].size);

      var filename = this.files[0].name;
      // console.log(this.files[0].name);

      var filesize = (this.files[0].size) / (1024 * 1024);
      // console.log(filesize);

      if (this.files[0].size >= 2 * 1024 * 1024) {
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
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST"
          },
          contentType: "application/json",
          data: JSON.stringify({
            "quo_upload_file": base64,
            "price": matprice,
            "min_vol": matvol,
            "mat_no": "1050010056",
            "comp_id": "15"
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
      // url: "https://hookb.in/QJY0XzanbpU9r92dl23o",
      url: "https://peahub21.azurewebsites.net/api/v2.0/offer/",
      // url: "http://192.168.43.175:8000/api/ball/testpdf/",
      type: "POST",
      dataType: "JSON",
      // data: JSON.stringify(),
      data: info,
      cache: false,
      contentType: false,
      processData: false,
      // success: function(response) {
      //   console.log(response);
      //   if (response.success == true) {
      // alert("Document uploaded successfully.");
      //     // console.log("reset file");
      //     // file = $('#mat_document')[0].reset;
      //       // get_response_offer ();
      //       offer_next_page();
      //
      //
      //
      //   } else
      //     alert("Document uploaded failed!!!.");
      //   // alert("Document uploaded successfully.");
      // }
    })
    .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      if (jqXHR.status == 200) {
        alert("Document uploaded successfully.");
        console.log(data['type']);
        console.log("gggggggg");
        // get_response_offer(data);
        // offer_next_page();

      } else
        alert("Document uploaded failed!!!.");
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      alert("Document uploaded failed!!!.");
      console.log("HTTP Request Failed");
    })
    .always(function() {
      /* ... */
    });
}

function deletePDF() {
  console.log("Helloooooooooooo~~~~~~~");
  document.getElementById("offer_result").disabled = true;
  document.getElementById("offer_result").style.visibility = "hidden";
  document.getElementById('pdfform').reset();
  return;
}

function offer_next_page() {
  window.location.href = "c11finalcopy2.html"; //+ queryString
}

// TODO
function get_response_offer(data) {

  // collect variable to var before save to localStorage
  var spec_id = obj['spec_id'];
  var mat_no = obj['mat_no'];
  var mat_desc = obj['mat_desc'];
  var price = obj['price'];
  var minvalue = obj['min'];
  var url = obj['url'];
  var timestamp = obj['date'];
  // TODO store data to localStorage
  var theID = document.getElementsByClassName("buttonnext")[0].id;
  var index = theID.split("_");
  var i = index[1];
  var search_result = localStorage.getItem("search_result");
  var search_result_json = JSON.parse(search_result);
  var mat_no = search_result_json[i].mat_no;
  var spec_id = search_result_json[i].spec_id;
  var mat_desc = search_result_json[i].mat_desc;
  var url = search_result_json[i].url;
  var queryString = "?" + spec_id + "&para=" + mat_no + "&para=" + mat_desc + "&para=" + url;
  console.log(queryString);
}
