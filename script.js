function displayContent(json) {
    var def = '';
    var pre_html = '<table id="table" class="table">';
    var actual_html='';
    var post_html = '</table>'
    var len = json.feed.entry.length
    for (var i=0; i<len; i++) {
        actual_html += [
        '<tr><td><span class="tags">',
        json.feed.entry[i].gsx$tags.$t,
        '</span> <a href="#" onclick="document.getElementById(\'definitionbox\').innerHTML =\'<h1>',
        json.feed.entry[i].gsx$topic.$t,
        '</h1><p>',
        json.feed.entry[i].gsx$policy.$t,
        '\';return false;">',
        json.feed.entry[i].gsx$topic.$t,
        '</a></td></tr>'
        ].join(''); 
    }
document.getElementById('topics_container').innerHTML = pre_html + actual_html + post_html;
}
function clearselection(){
        $("tr").show();
};
//<![CDATA[
$(window).load(function Limit(){
var $rows = $('#table tr');
$('#search').keyup(function Limit() {
    
    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text;
    
    $rows.show().filter(function Limit() {
        text = $(this).text().replace(/\s+/g, ' ');
        return !reg.test(text);
    }).hide();
});
});//]]>
function loadinfo(){
    if (document.getElementById("topics_container").innerHTML == '') {
    document.getElementById("login").innerHTML = '<div class="col-sm-12" style="padding-top:10px;"><center><h1>Sign in to continue</h1><p style="margin-top:40px;">The Daily Bruin\'s policies and procedures are accessible to those signed in to Daily Bruin Google accounts.<p>Please log into your account and try again.<p style="margin-top:40px;"><a href="https://accounts.google.com/ServiceLogin?continue=https://drive.google.com/st/auth/host/0B9y1-prT44zAXzNZaHphdjVXWlE" class="btn btn-primary btn-lg active" role="button">Sign in with Google</a></center></div>';
    } else {
    document.getElementById("definitionbox").innerHTML = '<h1>Policies and Procedures</h1><p>The Daily Bruin\'s policies and procedures can be accessed using the table of contents and search bar to the left.';
    }
}