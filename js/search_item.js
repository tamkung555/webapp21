fetch('https://api.myjson.com/bins/exnrk')
    .then((res) => { return res.json() })
    .then((data) => {
  
    var obj = data['result'];
    var data_json = JSON.stringify(obj);
    localStorage.setItem("search_result", data_json);
    var i;
    let html_result = '';
    let div_end = '</div>';
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
    let lable_mat = '<div class=\"label\">';
    let button = '<button type=\"button\"';
    let button_class = 'class=\"buttonnext button:hover\"';
    let onclick = 'onclick=\"next_page()\">';
    let next = '<div class=\"next\">NEXT</div></botton>' + div_end;
    let id = '';

    for (i in obj){
        if (i%2==0){
            html_result += grey_table + tablecontainer;
        }
        else{
            html_result += white_table + tablecontainer;
        }
        id = 'id=\"next_' + i + '\"';
        html_result += statutencours1 + fond + lable + obj[i].spec_id + div_end + div_end;
        html_result += statutencours + fond + lable_mat + obj[i].mat_no + div_end + div_end;
        html_result += tablecelcopy + background + tablecelcopy1 + lable + obj[i].mat_desc + div_end + div_end + div_end;
        html_result += button + button_class + id + onclick + next;
    }
    document.getElementById('search_result').innerHTML = html_result;
});