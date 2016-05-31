$(document).ready(function() {
  $(".definition").hide();
  $(".concept").click(function() {
    alert($(".concept").attr("id"));
    var id = ($(".concept").attr("id"));
    $(".concept#"+id).hide();
    id = parseInt(id);
    id += 1;
    alert(id);
    id = id.toString();
    def = ".definition#"+id;
    ($ (def).show());
  });

  $(".definition").click(function() {
    $(".definition").hide();
    $(".concept").show();
  });
});
