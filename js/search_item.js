fetch('https://api.myjson.com/bins/ux9zk')
    .then((res) => { return res.json() })
    .then((data) => {
        let html_result = '';
        data.forEach((user) => {
            const {condition:{search_by,search_text}} = user
            html_result += search_by + "&nbsp&nbsp&nbsp" + '\"' + search_text + '\"' ;
            document.getElementById('sortby').innerHTML = html_result;
        });
})

fetch('https://api.myjson.com/bins/ux9zk')
    .then((res) => { return res.json() })
    .then((data) => {
        let html_result = '';
        data.forEach((user) => {
            const {result:{material_ID,spec_ID,description}} = user
            var i;
            for (i in user.result){
                html_result += "<tr>" + "<td class=\"statutencours1 lable\">" + user.result[i].spec_ID + "</td>" + 
                "<td class=\"statutencours lable\">" + user.result[i].material_ID + "</td>" +
                "<td class=\"tablecelcopy tablecelcopy1 lable\">" + user.result[i].description + "</td>" +
                "<td class=\"lable\"><a href=\"p11materialid.html\"><div class=\"buttonnext\">" +
                "<div class=\"rectangle4\"></div><div class=\"next\">NEXT</div></div></a></td></tr>";
            }
            html_result += "</tbody>";
            document.getElementById('search_result').innerHTML = html_result;
        });
    })