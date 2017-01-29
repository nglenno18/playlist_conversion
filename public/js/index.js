var socket = io();

socket.on('connect', function(){
  console.log(socket.id);
});


jQuery('.section').on('click', function(e){
  console.log(e);
  var sectionid = e.currentTarget.id;
  console.log('\n\nID is: ', e.currentTarget.id);
  resetSections();
  if($('#bottom_body_container').css("visibility")=="collapse"){
    if($(e.currentTarget).css("margin-top")=="0px") {
      console.log('Bottom plane was collapsed, should expand');
      var color = $(e.currentTarget).css("background-color");
      console.log('\nCOLOR: ', color);

      $('#bottom_body_container').css("visibility", "visible").show();
      $('#bottom_body').css("background-color", color).show();

      $(e.currentTarget).removeClass("section");
      $(e.currentTarget).addClass("highlighted-section");
    }
  }
  else{
    $(e.currentTarget).removeClass("highlighted-section");
    $(e.currentTarget).addClass("section");
    console.log('asdfhadskjfgadskgfkdsa');
    $('#bottom_body_container').css("visibility", "collapse");
  }

});

var resetSections = function(){
  console.log('RESETTING ALL SECTIONS');
  $('#section1').removeClass("highlighted-section");
  $('#section1').addClass("section");
  $('#section2').removeClass("highlighted-section");
  $('#section2').addClass("section");
  $('#section3').removeClass("highlighted-section");
  $('#section3').addClass("section");
  $('#section4').removeClass("highlighted-section");
  $('#section4').addClass("section");
}
