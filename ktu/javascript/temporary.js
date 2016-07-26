$(window).load(function() {
    $(this).scrollTop(0);
    // progress bar animation
    var bar = document.getElementById('progress-bar'),
        fallback = document.getElementById('download-progress'),
        loaded = 0;
    var load = function() {
        loaded += Math.floor((Math.random() * 2) + 3);
        bar.value = loaded;
        $(fallback).empty().append("HTML5 progress tag not supported: ");
        if (loaded == 100) {
            clearInterval(beginLoad);
            console.log('Load was performed.');
        }
    };

    var beginLoad = setInterval(function() {
        load();
    }, 10);
    // Set extra timeout for loading page
    $(this).scrollTop(0);
    window.setTimeout(hideLanding,1750);
  });
function hideLanding(){
    $(this).scrollTop(0);
    $('#loading').fadeOut(500);
}