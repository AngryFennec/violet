(function() {
  $('amplitude-volume-slider').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #291449), '
                + 'color-stop(' + val + ', #291449)'
                + ')'
                );
});
})();
