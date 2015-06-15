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
            data = data['users'];
            console.log(data);
            for (var i = 0; i < 15; i ++){
                $("#load-api table").append('<tr>' +
                                                    '<td>' +  data[i].id  + '</td>' +
                                                    '<td>' +  data[i].birth_year  + '</td>' +
                                                    '<td>' +  data[i].color  + '</td>' +
                                                    '<td>' +  data[i].height  + '</td>' +
                                                    '<td>' +  data[i].weight + '</td>' +
                                            '</tr>')
            }
        },
        error: function(e){

        }
    });
}