$(document).ready(function() {
  $("#JS-def").hide();
  $("#JS-con").click(function() {
    $("#JS-con").hide();
    $ ("#JS-def").show();
  });

  $("#JS-def").click(function() {
    $("#JS-def").hide();
    $("#JS-con").show();
  });

  $("#Operators-def").hide();
  $("#Operators-con").click(function() {
    $("#Operators-con").hide();
    $("#Operators-def").show();
  });

  $("#Operators-def").click(function() {
    $("#Operators-def").hide();
    $("#Operators-con").show();
  });

  $("#Variables-def").hide();
  $("#Variables-con").click(function() {
    $("#Variables-con").hide();
    $("#Variables-def").show();
  });

  $("#Variables-def").click(function() {
    $("#Variables-def").hide();
    $("#Variables-con").show();
  });
});
