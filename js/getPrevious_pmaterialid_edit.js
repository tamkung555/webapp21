
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var mat_no = queries[0];
var spec_id = queries[1];
var spec_id = queries[2];
var url = queries[3];
var startdate_def = new Date();
startdate_def.setDate(startdate_def.getDate() - 30);
var enddate_def = new Date();
var startdateformat = getdateformat(startdate_def);
var enddateformat = getdateformat(enddate_def);

window.onload= function() {
            reload();
  function reload(){
  //var mat_no = "100002321";
  // var spec_id = 'RE-233444';
  // var mat_desc = '50 kVA, three-phase transformer, permanently sealed and completely oil filled system (without gas cushion) type, withstand short-circuit, 22,000-416/240V, symbol Dyn11.';
  document.getElementById("sec_ID").innerHTML = "SPEC ID: "+spec_id;
  document.getElementById("mat_No").innerHTML = "MAT ID: "+mat_no;
  document.getElementById("depc").innerHTML = mat_desc;

};
}

//var mat_no = "100002321";
postData(mat_no,startdateformat,enddateformat);

function postData(material_no,startdateformat,enddateformat){
    // loader
    //document.getElementById("loader").style.display = "block";
    //let mat_no = material_no;
    //let mat_no = "2222222";

    jQuery.ajax({
        url: "https://hookb.in/kx6xKbGgjXhepeoxWojw",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        contentType: "application/json",
        data: JSON.stringify(
            {
                mat_no: mat_no ,
                start_date: startdateformat ,
                end_date: enddateformat
            })
    })
    .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data); //Return Data
        if (jqXHR.status == 200) {
            window.localStorage.setItem('datasearch',JSON.stringify(data));
            //document.getElementById("loader").style.display = "none";
            //window.location = "p11searchp.html"
            //window.location.replace( "/p11searchp.html" )
            console.log("Query")
        };
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");

    })

}



//var obj = JSON.parse(txt);
fetch('https://api.myjson.com/bins/ocl5k')
    .then((res) => { return res.json() })
    .then((data) => {
      var obj = data['result'];
      console.log(obj);
      var companyname = obj['comp_name'];
      var price = obj['price'];
      var minvalue = obj['min'];
      var timestamp = obj['date'];
      var mobile_company = obj['comp_tel'];
      var uri = obj['url'];

      var price_min = Math.min(...price);
      var price_max = Math.max(...price);
      var price_average = price.reduce((a,b) => a + b, 0) / price.length;
      document.getElementById("minnimum").innerHTML = price_min;
      document.getElementById("maximun").innerHTML = price_max;
      document.getElementById("average").innerHTML = price_average;
      console.log(price_max);
      console.log(price_average);

var text = "";
var i;

for ( i= 0; i < price.length; i++) {
  text += "<tr><td>"+companyname[i] + "</td><td>" + price[i] + "</td><td>" + minvalue[i] + "</td><td>" +  timestamp[i] + "</td><td>" + mobile_company[i]+"</td><td><a href=\".media/"+uri[i]+"\"><button class=\"btn btn-primary\">Next</button></a></td></tr>";
}


document.getElementById("tablebody").innerHTML = text;
})



function Send(){
  console.log("Send()");
   var startDate = document.getElementById("datepickerstart").value;
   var startdate = startDate.split("/");
   var date_output = '';
   var i;
   for (i = startdate.length-1; i >= 0; i--) {
       date_output += startdate[i];
       if (i>0){
           date_output += '/';
       }
   }
   console.log(date_output);

   var endDate = document.getElementById("datepickerend").value;
   var enddate = endDate.split("/");
   var dateend_output = '';
   var j;
   for (j = enddate.length-1; j >= 0; j--) {
       dateend_output += enddate[j];
       if (j>0){
           dateend_output += '/';
       }
   }
   console.log(dateend_output);
   postData(mat_no,date_output,dateend_output);
}



function getdateformat(date){
  var date = document.location+'';
  var date2_split = date.split(' ');
  var month = date2_split[1];
  var month_array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var month_string = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  for (i in month_array){
    if(month==month_array[i]) {
        var dateformat = date2_split[3]+"/"+month_string[i]+"/"+date2_split[2];
        return dateformat;
    }
}


}
