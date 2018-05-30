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
      $(e).html('')
      data.links.forEach(function(link){
        content = ''
        if(link.data.content !== null){
          content = link.data.content
        };
        $(e).append('<p><a href="'+link.source + '">'+ link.source + '</a> linked here.<br>'
          + content + '</p>')
      });
    });
  });
});
