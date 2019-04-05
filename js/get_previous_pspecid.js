var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&para");
var search_by = queries[0];
var search_text = queries[1];
postData(search_by, search_text);
localStorage.setItem("search_by", search_by);
localStorage.setItem("search_text", search_text);

function postData(sort, text){
    let search_by = sort;
    let search_text = text;

    jQuery.ajax({
        url: "https://hookb.in/XkLYYLraDZsbobmZEmVm",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            
        },
        contentType: "application/json",
        data: JSON.stringify(
            {
            "condition": {
                "search_by": search_by,
                "search_text": search_text
            }
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
    .always(function() {
        /* ... */
    });
}