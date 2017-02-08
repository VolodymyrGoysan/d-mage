document.addEventListener('turbolinks:load', function() {
  $("#search").on("keyup", function() {
    let value = $(this).val();

    $("table tr").each(function(index) {
        $row = $(this);

        let key = $row.find("td:first").text();

        if (key.match(new RegExp(value, 'i')) == null) {
          $row.hide();
        } else {
          $row.show();
        }
    });
  });
});
