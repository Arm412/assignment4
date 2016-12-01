// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
  $('.predict').hide();
  $.ajax({
    type: 'GET',
    url: 'http://www.mattbowytz.com/simple_api.json?data=all',
    dataType: 'json',
  }).done(function(j_object){
    input = $('.flexsearch-input');
    input.keyup(function (k) {
      var x = 0;
      $('.predict').html("");
      int = j_object.data.interests;
      for(x = 0; x < int.length; x++){
        if (int[x].toLowerCase().startsWith(input.val().toLowerCase())){
          str = '<a class="links" href="">' + int[x] + '</a><br>';
          $('.predict').append(str);
        }
      }
      pro = j_object.data.programming;
      for(x = 0; x < pro.length; x++){
        if (pro[x].toLowerCase().startsWith(input.val().toLowerCase())){
          str = '<a class="links" href="">' + pro[x] + '</a><br>';
          $('.predict').append(str);
        }
      }
      $('.predict').show();
    })
    })
})()

