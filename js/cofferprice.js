$(function() {
      $('form').on('submit', function(e) {
        console.log("Hello")

        e.preventDefault();

        var reader = new FileReader(),
          file = $('#mat_document')[0];

        if (!file.files.length) {
          alert('no file uploaded');
          return false;
        }

        reader.onload = function() {
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
                "price": "123"
              })
            };
          console.log(info)
          console.log("--------------------------------")

          // console.log(data)

          jQuery.ajax({
            url: "https://hookb.in/1gYaYxZBezCDmD2qx2M1",
            // url: "https://peahub21.azurewebsites.net/api/v2.0/register/",
            // url: "http://192.168.43.175:8000/api/ball/testpdf/",
            type: "POST",
            dataType: "JSON",
            data: info,
            cache: false,
            contentType: false,
            processData: false,
            success: function(response) {
              console.log(response);
              if (response.success == true) {
                alert("Document uploaded successfully.");
              }
              else
              alert("Document uploaded failed!!!.");
              // alert("Document uploaded successfully.");
            }
          });
        };

        reader.readAsDataURL(file.files[0]);
      });
    });

    // $(function(){
    //         $("#input-id").on('change', function(event) {
    //             var file = event.target.files[0];
    //             if(file.size>=2*1024*1024) {
    //                 alert("JPG images of maximum 2MB");
    //                 $("#form-id").get(0).reset(); //the tricky part is to "empty" the input file here I reset the form.
    //                 return;
    //             }
    //
    //             if(!file.type.match('image/jp.*')) {
    //                 alert("only JPG images");
    //                 $("#form-id").get(0).reset(); //the tricky part is to "empty" the input file here I reset the form.
    //                 return;
    //             }
    //
    //             var fileReader = new FileReader();
    //             fileReader.onload = function(e) {
    //                 var int32View = new Uint8Array(e.target.result);
    //                 //verify the magic number
    //                 // for JPG is 0xFF 0xD8 0xFF 0xE0 (see https://en.wikipedia.org/wiki/List_of_file_signatures)
    //                 if(int32View.length>4 && int32View[0]==0xFF && int32View[1]==0xD8 && int32View[2]==0xFF && int32View[3]==0xE0) {
    //                     alert("ok!");
    //                 } else {
    //                     alert("only valid JPG images");
    //                     $("#form-id").get(0).reset(); //the tricky part is to "empty" the input file here I reset the form.
    //                     return;
    //                 }
    //             };
    //             fileReader.readAsArrayBuffer(file);
    //         });
    //     });
