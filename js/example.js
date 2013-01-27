function update() {
  var size = parseInt($('#maxsize').val(), 10);
  if (!isNaN(size)) {
    $('.dyntextval').html($('#dyntext').value);
    $('.jtextfill').textfill({debug: true, maxFontPixels: size});
  }
}

$(function () {
  $('#maxsize').keyup(update);
  $('#dyntext').keyup(update);
  update()
});
