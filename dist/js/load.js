$(function() {
   
  $.ajax({
    type: 'GET',
    url: 'https://kakigawa-1219.github.io/js-Exercise7/dist/js/include.json',
    dataType: 'json',
    success: function(json){
      var len = json.length;
     
             
      for(var i=0; i < len; i++){
        var htmltext =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
        +   '<div class="thumbnail">'
        +       '<div class="thumbnail-image">'
        +           '<img class="img-circle" src="dist/img/jinbutsu_male.jpg">'
        +       '</div>'
        +       '<div class="user-indicator"></div>'
        +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
        +       `<div class="user-division">${json[i].division}</div>`
        +       `<div class="user-position">${json[i].position}</div>`
        +      '<div class="text-center"></div>'
        +   '</div>'
        + '</li>';

        var htmltext1 =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
        +   '<div class="thumbnail">'
        +       '<div class="thumbnail-image">'
        +           '<img class="img-circle" src="dist/img/jinbutsu_female.jpg">'
        +       '</div>'
        +       '<div class="user-indicator"></div>'
        +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
        +       `<div class="user-division">${json[i].division}</div>`
        +       `<div class="user-position">${json[i].position}</div>`
        +      '<div class="text-center"></div>'
        +   '</div>'
        + '</li>';

        if(json[i].gender=="男"){
            $("#loadarea").append(htmltext);
        }
        else{
            $("#loadarea").append(htmltext1);
        }
    
    }
       
    }
    
  });
  });

