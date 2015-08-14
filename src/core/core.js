$(document).ready(function() {

    $('#off-canvas-click').click(function(e) {
        if($('#offcanvas-1').attr('aria-hidden') === 'false') {
            UIkit.offcanvas.hide([force = false]);
        } else {
            UIkit.offcanvas.show('#offcanvas-1');
        }
    });


})