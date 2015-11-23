$(document).ready(function() {

  var source;
  var studentTemplate;
  var studentList;
  var counter = 0;

  // make an ajax call to retrieve eta data from server
  $.ajax({
    url:'/data/eta.json',
  }).done(function(data) {
    $('.nextStudent').on('click', function(){
      console.log("Next");
    });
    $('.prevStudent').on('click', function(){
      console.log("Prev")
    });
     source = $("#studentList").html();
     studentTemplateFunction = Handlebars.compile(source);
     var student = data.eta[0];
     studentHtml = studentTemplateFunction(student);

     $('.studentContainer').html(studentHtml);
  });
});
