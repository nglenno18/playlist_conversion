var socket = io();

socket.on('connect', function(){
    var delivery = new Delivery(socket);

    delivery.on('delivery.connect',function(delivery){
      $("#fileDialog").on('click', function(evt){
        // chooseFile('#fileDialog');

        var chooser = $('#fileDialog');
        chooser.unbind('change');
        chooser.change(function(evt) {
          // console.log($(this).val());
          // console.log('FILE PATH: ', evt.target.files);
          var files = $('#fileDialog')[0].files;
          var file = files[0];
          console.log(files[0].name);
          $('#file-link').text(files[0].name);
          $('#file-link').href = files[0].path;
          console.log(files[0]);
          console.log('CHOSEN FILE: ', file);
          var extraParams = {sender: socket.id};
          delivery.send(file, extraParams);
          evt.preventDefault();
        });
      });
    });

    delivery.on('send.success',function(fileUID){
      console.log("file was successfully sent.");
    });
  });


// function chooseFile(name) {
//   var chooser = $(name);
//   chooser.unbind('change');
//   chooser.change(function(evt) {
//     // console.log($(this).val());
//     // console.log('FILE PATH: ', evt.target.files);
//     var files = $('#fileDialog')[0].files;
//     var file = files[0];
//     console.log(files[0].name);
//     $('#file-link').text(files[0].name);
//     $('#file-link').href = files[0].path;
//     console.log(files[0]);
//     return file;
//
//     // socket.emit('file-entered', evt.target.files[0], function(){
//     //   // console.log('File submitted to the server', evt.target.files[0]);
//     // });
//   });
// }






jQuery('.section').on('click', function(e){
  var sectionid = e.currentTarget.id;
  resetSections();
  if($('#bottom_body_container').css("visibility")=="collapse"){
    if($(e.currentTarget).css("margin-top")=="0px") {
      var color = $(e.currentTarget).css("background-color");
      $('#bottom_body_container').css("visibility", "visible").show();
      $('#bottom_body').css("background-color", color).show();
      $(e.currentTarget).removeClass("section");
      $(e.currentTarget).addClass("highlighted-section");
    }
  }
  else{
    $(e.currentTarget).removeClass("highlighted-section");
    $(e.currentTarget).addClass("section");
    $('#bottom_body_container').css("visibility", "collapse");
  }

});

jQuery('.section').hover(function(e){
  var sectionid = e.currentTarget;
  if($('#bottom_body_container').css("visibility")!="collapse" &&
  sectionid.id !="section4"){
    $(e.currentTarget).addClass("section-spacing");
  }

  if(sectionid.id=="section4"){
    $('#section4').css("margin-left", "5px");
  }
}, function(e){
  resetSpacing();
  $('#section4').css("margin-left","5.7px");
});

jQuery('body').on('mouseover', function(){
  var width = $('#body_width').width();
  width = width - 14;
  var strwidth = "" + width + "px";
  $('#bottom_body').css("width", strwidth);
  width = 1037 - width;
  $('#bottom_body').css("border-right-width", width);
});

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
