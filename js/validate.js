function f_validate(val){ // เช็คตัวเลข
    if (document.getElementById("dropdown").value == "spec_id"){
        if (event.keyCode < 45 || event.keyCode > 57) {
            alert("กรุณาป้อนตัวเลขค่ะ");
            event.returnValue = false;
            val.focus();
            }
    } else if (document.getElementById("dropdown").value == "mat_id"){
        if (event.keyCode < 45 || event.keyCode > 57) {
            alert("กรุณาป้อนตัวเลขค่ะ55");
            event.returnValue = false;
            val.focus();
            }
        }
       
}

function f_senddata(){
    var search_by = document.getElementById("dropdown").value;
    var search_text = document.getElementById("condition_str").value;
    
    if (search_text == "") {
        alert("โปรดตรวจสอบข้อมูลการค้นหาอีกครั้ง");
        document.getElementById("condition_str").value.textContent = "";
        return;
    } else {
        var queryString = "?para1=" + search_by + "&para2=" + search_text;
        window.location.href = "p11specidp.html" + queryString;
        console.log(queryString);

      }
}
   

   