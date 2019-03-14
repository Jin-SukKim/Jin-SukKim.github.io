function tplawesome(e, t) { 
    res = e;
    for(let n = 0; n < t.length; n++) {
        res = res.replace(/\{\{(.*?)\}\}/g, function(e, r) { 
            return t[n][r];
        })
    }
    return res;
}

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       let request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 5,
            order: "date"
        }); 
       // execute the request
       request.execute(function(response) {
          let results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("tpl/item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title,"videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });
    
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init() {
    gapi.client.setApiKey("AIzaSyCMUUionXrYY6CsjvBfokTDhWqCjUNStx8");
    gapi.client.load("youtube", "v3", function() {
    //api ready
	});
}