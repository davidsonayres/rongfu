$(function() {

  $("li#home").on('click', function() {
    $("#content_box").load("home.html");
  });

  $("#about").on('click', function() {
    $("#content_box").load("about.html");
  });

  $("#reel").on('click', function() {
    $("#content_box").load("reel.html");
  });

  $("#photos").on('click', function() {
    $("#content_box").load("photos.html");
  });

  $("#resume").on('click', function() {
    $("#content_box").load("resume.html");
  });

  $("#contact").on('click', function() {
    $("#content_box").load("contact.html");
  });

  $("#media").on('click', function() {
    $("#content_box").load("media.html");
  });

})
