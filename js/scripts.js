$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Cats Are Better!</li>");
    $("ul#webpage").prepend("<li>I Agree!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });

  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Dogs Are Better!</li>");
    $("ul#webpage").prepend("<li>Are you sure?</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });

  });


  $("button#stop").click(function() {
    $("ul#user").prepend("<li>I cant decide!</li>");
    $("ul#webpage").prepend("<li>Cats, trust me!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
