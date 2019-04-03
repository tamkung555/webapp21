function f_chknum(val){ // เช็คตัวเลข
    if (event.keyCode < 45 || event.keyCode > 57) {
    alert("กรุณาป้อนตัวเลขค่ะ");
    event.returnValue = false;
    val.focus();
    }
    }
   
    
   