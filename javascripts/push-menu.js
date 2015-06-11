
function showPushMenu(){
    $('html, body').animate({
        scrollTop: $("#btn-table-options").offset().top
    }, 500);

//    Add active class for menu option
    $('.option-active').removeClass('option-active');
    $('#push-menu-option').toggleClass('option-active');

//    Hide current showing snippet demonstrations then show this one
    $('.snippet-content').hide();
    $("#push-menu-content").fadeToggle(300);
}

function pushMenuSidebar(){
    if ($("#menu-control-btn").hasClass('glyphicon-arrow-left')){
        $("#push-menu-sidebar").animate({
            'margin-left': '-25%'
        }, 500);

        $("#push-menu-body").animate({
            'width': '100%'
        }, 500, function(){
            $("#menu-control-btn").removeClass('glyphicon-arrow-left');
            $("#menu-control-btn").addClass('glyphicon-arrow-right');
        });
    } else {
        $("#push-menu-sidebar").animate({
            'margin-left': '0px'
        }, 500);

        $("#push-menu-body").animate({
            'width': '75%'
        }, 500, function(){
            $("#menu-control-btn").removeClass('glyphicon-arrow-right');
            $("#menu-control-btn").addClass('glyphicon-arrow-left');
        });
    }
}