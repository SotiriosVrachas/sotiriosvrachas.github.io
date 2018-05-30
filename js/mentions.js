jQuery(function($){

  $("*[data-webmention]").each(function(i,e){
    var parser = document.createElement('a');
    target = $(e).data('url');
  });

  $.getJSON("https://webmention.io/api/count?jsonp=?", {
    target: target
  }, function(data){
    $("*[data-webmention-count]").each(function(i,e){
      $(e).text(data.count);
    });
  });
  
  $.getJSON("https://webmention.io/api/mentions?jsonp=?", {
    target: target
  }, function(data){
    $("*[data-webmention]").each(function(i,e){
      $(e).html(data.links[0].activity.sentence_html);
    });
  });
  
});
