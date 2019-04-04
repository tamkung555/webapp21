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
            let grey_table = '<div class=\"linegreykeyword\">';
            let white_table = '<div class=\"linewhitekeyword\">';
            let tablecontainer = '<div class=\"tablelinecontainer\"></div>';
            let statutencours = '<div class=\"statutencours\">';
            let statutencours1 = '<div class=\"statutencours1\">';
            let tablecelcopy = '<div class=\"tablecelcopy\">';
            let tablecelcopy1 = '<div class=\"tablecelcopy1\">';
            let background = '<div class=\"background\"></div>';
            let fond = '<div class=\"fond\"></div>';
            let lable = '<div class=\"label\">';
            let lable_mat = '<div class=\"label\" id=\"material_ID\" value=\"';
            let div_end = '</div>';

            for (i in user.result){
                if (i%2==0){
                    html_result += grey_table + tablecontainer;
                }
                else{
                    html_result += white_table + tablecontainer;
                }
                html_result += statutencours1 + fond + lable + user.result[i].spec_ID + div_end + div_end;
                html_result += statutencours + fond + lable_mat + user.result[i].material_ID + '\">' + user.result[i].material_ID + div_end + div_end;
                html_result += tablecelcopy + background + tablecelcopy1 + lable + user.result[i].description + div_end + div_end + div_end;
                html_result += '<button type=\"button\" class=\"buttonnext button:hover\" onclick=\"doSearchpage()\"><div class=\"next\">NEXT</div></botton>' + div_end;
                // html_result += '<div class=\"buttonnext\"><div class=\"rectangle4\" type=\"button\" onclick=\"doSearchpage()\"></div><a style="cursor: pointer;"><div class=\"next\">NEXT</div></div></a>' + div_end;
                // html_result += '<a href=\"p11materialid.html\"><div class=\"buttonnext\"><div class=\"rectangle4\" type=\"button\" onclick=\"doSearchpage()\"></div><div class=\"next:hover\">NEXT</div></div></a>' + div_end;
            }
            document.getElementById('search_result').innerHTML = html_result;
        });
    })