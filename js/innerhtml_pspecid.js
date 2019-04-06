function innerHTML(){
    let search_by = localStorage.getItem("search_by");
    let search_text = localStorage.getItem("search_text");
    let html_result = '';
    if (search_by == 'mat_no') {
        search_by = "Material ID";
      } else if (search_by == 'spec_id') {
        search_by = "Spec ID";
      } else if (search_by == 'mat_desc'){
        search_by = "Keyword";
      }
    html_result += search_by + "&nbsp&nbsp&nbsp" + '\"' + search_text + '\"' ;
    document.getElementById('sortby').innerHTML = html_result;
    console.log(html_result);
}
window.onload = innerHTML;