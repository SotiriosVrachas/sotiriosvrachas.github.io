jQuery(function($){
  var urls = [];
  var base;

  $("*[data-webmention-count]").each(function(i,e){
    var parser = document.createElement('a');
    parser.href = $(e).data('url');
    base = parser.protocol + "//" + parser.hostname;
    urls.push(parser.pathname+parser.search);
  });

  $.getJSON("https://webmention.io/api/count?jsonp=?", {
    base: base,
    target: urls.join(",")
  }, function(data){
    $("*[data-webmention-count]").each(function(i,e){
      $(e).text(data.count);
    });
  });
});
