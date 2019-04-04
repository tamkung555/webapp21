function doSearch(){
    // loader
    document.getElementById("loader").style.display = "block";

    jQuery.ajax({
        url: "https://hookb.in/2qYlbDYPOghDYDK6RK91",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            
        },
        contentType: "application/json",
        data: JSON.stringify(
            {
            "condition": {
                "search_by": document.getElementById("dropdown").value,
                "search_text": document.getElementById("condition_str").value
            }
            })
    })
    .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data); //Return Data
        if (jqXHR.status == 200) {
            window.localStorage.setItem('datasearch',JSON.stringify(data));
            document.getElementById("loader").style.display = "none";
            //window.location = "p11searchp.html"
            //window.location.replace( "/p11searchp.html" )
            console.log("Query")
        };
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
        
    })
    .always(function() {
        /* ... */
    });
}
