$(document).ready(function(){
    $('#add-item-input').keypress(function (e) {
        if (e.which == 13) {
            addItemBtnClicked();
            return false;    //<---- Add this line
        }
    });
});

function showAddItem(){
    $('html, body').animate({
        scrollTop: $("#btn-table-options").offset().top
    }, 500);

//    Add active class for menu option
    $('.option-active').removeClass('option-active');
    $('#add-item-option').toggleClass('option-active');

//    Hide current showing snippet demonstrations then show this one
    $('.snippet-content').hide();
    $("#add-item-content").fadeToggle(300);
}

function addItemBtnClicked(){
    var task = $("#add-item-input").val();
    if (task != ''){
        task = '<li>' + task + '</li>';
        $("#list-of-tasks ol").append(task);
        $("#add-item-input").val('');
        $("#add-item-input").focus();
    }
}