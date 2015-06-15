function loadApiItem(){
    $('html, body').animate({
        scrollTop: $("#btn-table-options").offset().top
    }, 500);

//    Add active class for menu option
    $('.option-active').removeClass('option-active');
    $('#load-api-option').toggleClass('option-active');

//    Hide current showing snippet demonstrations then show this one
    $('.snippet-content').hide();

//    $("#add-item-content").fadeToggle(300);
//    "#load-api"

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users.js",
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },
        contentType: "application/json",
        dataType: "jsonp",
        data: {
            format: "json"
        },
        success: function(data){
            console.log(data);
            $("#load-api").html(data);
        },
        error: function(e){

        }
    });
}