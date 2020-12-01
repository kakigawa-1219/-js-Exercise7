$(function() {
    $.getJSON("include.json" , function(data) {
      var
        ulObj = $("#ul-user"),
        len = data.length;
  
      for(var i = 0; i < len; i++) {
        ulObj.append($("<li>").attr({"id":data[i].number}).text(data[i].lastName));
      }
    });
  });



  