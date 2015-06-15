var userData;

function loadApiItem(){
    $('html, body').animate({
        scrollTop: $("#btn-table-options").offset().top
    }, 500);

//    Add active class for menu option
    $('.option-active').removeClass('option-active');
    $('#load-api-option').toggleClass('option-active');

//    Hide current showing snippet demonstrations then show this one
    $('.snippet-content').hide();

    $("#load-api").fadeToggle(300);

    $.ajax({
        type: "GET",
        url: "http://loadcsv.herokuapp.com/users.js",
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
            userData = data['users'];
            for (var i = 0; i < 15; i ++){
                $("#load-api table").append('<tr id="tr-' + userData[i].id + '">' +
                                                    '<td>' +  userData[i].id  + '</td>' +
                                                    '<td>' +  userData[i].birth_year  + '</td>' +
                                                    '<td>' +  userData[i].color  + '</td>' +
                                                    '<td>' +  userData[i].height  + '</td>' +
                                                    '<td>' +  userData[i].weight + '</td>' +
                                            '</tr>')
            }
        },
        error: function(e){

        }
    });
}

function searchApiItem(){
    var textSearch = $("#search-text-input").val();

    if (textSearch){

        for (var i = 0; i < userData.length; i ++){
            if (userData[i].birth_year != textSearch){
                $("#tr-" + userData[i].id).hide();
            } else {
                $("#tr-" + userData[i].id).show();
            }
        }

    }

}

function refreshTable(){
    for (var i = 0; i < userData.length; i ++){
        $("#tr-" + userData[i].id).show();
        $("#search-text-input").val('');
    }
}