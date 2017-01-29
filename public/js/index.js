var socket = io();

socket.on('connect', function(){
  console.log(socket.id);
});


jQuery('.section').on('click', function(e){
  var sectionid = e.currentTarget.id;
  console.log('\n\nID is: ', e.currentTarget.id);
  resetSections();
  if($('#bottom_body_container').css("visibility")=="collapse"){
    if($(e.currentTarget).css("margin-top")=="0px") {
      // console.log('Bottom plane was collapsed, should expand');
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

jQuery('.section').hover(function(e){
  var sectionid = e.currentTarget;
  console.log(sectionid);

  if($('#bottom_body_container').css("visibility")!="collapse" &&
  sectionid.id !="section4"){

    $(e.currentTarget).addClass("section-spacing");
  }
  if(sectionid.id=="section4"){
    $('#section4').css("margin-left", "5px");
  }else{
    // $('#section4').css("margin-left","5px");
  }

}, function(e){
  resetSpacing();
  $('#section4').css("margin-left","5.7px");
});

jQuery('body').on('mouseover', function(){
  var width = $('#body_width').width();
  width = width - 14;
  var strwidth = "" + width + "px";
  console.log('\n\n\nWIDTH IS :', strwidth);
  $('#bottom_body').css("width", strwidth);
  width = 1037 - width;
  console.log('\n\n\nWIDTH IS :', width);


  $('#bottom_body').css("border-right-width", width);

})

var resetSections = function(){
  console.log('RESETTING ALL SECTIONS');
  $('#section1').removeClass("highlighted-section");
  $('#section1').removeClass("section-spacing");
  $('#section1').addClass("section");
  $('#section2').removeClass("highlighted-section");
  $('#section2').removeClass("section-spacing");
  $('#section2').addClass("section");
  $('#section3').removeClass("highlighted-section");
  $('#section3').removeClass("section-spacing");
  $('#section3').addClass("section");
  $('#section4').removeClass("highlighted-section");
  $('#section4').removeClass("section-spacing");
  $('#section4').addClass("section");
}
var resetSpacing = function(){
  console.log('RESETTING spacing');
  $('#section1').removeClass("section-spacing");
  $('#section2').removeClass("section-spacing");
  $('#section3').removeClass("section-spacing");
  $('#section4').removeClass("section-spacing");
}
