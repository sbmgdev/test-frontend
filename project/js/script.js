$(document).ready(function () {

    $.ajax({
        url: 'https://raw.githubusercontent.com/sbmgdev/test-frontend/master/api/courses.json',
        dataType: 'json',
        success: function (result) {
            moment.locale('pt-BR');
            result.data.forEach(function (course, index) {
                var startDate = moment(course.start);
                var endDate = moment(course.finish);
                var difference = moment.duration(endDate.diff(startDate)).asMinutes();
                $('#board').append('<article class="article" data-index="' + index + '"><span class="light small category">' + course.category + '</span><h4 class="course">' + course.title + '</h4><span class="light city">' + course.address.city + '</span><hr/><span class="light data">' + startDate.format('LL') + '</span><span class="fa fa-calendar light left"></span></article>');
                $('#event_details').append('<div class="event" data-index="' + index + '"><header class="header title"><span class="fa fa-arrow-left spacing"></span><h3 class="spacing">' + course.title + '</h3></header><div><p class="spacing">' + course.description + '</p><p class="spacing"><span class="fa fa-calendar"></span> ' + startDate.format('LL') + '</p><p class="spacing"><span class="fa fa-clock-o"></span> De ' + startDate.format('LT') + ' às ' + endDate.format('LT') + ' - ' + Math.floor(difference / 60) + ':' + difference % 60 + 'h</p><p class="spacing"><span class="fa fa-map-marker "></span> ' + course.address.street + ', ' + course.address.number + ', ' + course.address.neighborhood + ', ' + course.address.city + '</p><p class="spacing"><span class="fa fa-dollar"></span> ' + course.price + '</p><p class="spacing"><span class="fa fa-tag"></span> ' + course.category + '</p><p class="spacing"><img src="' + course.consultant.avatar + '"/>' + ' ' + course.consultant.name + '</p><div class="center"><button class="button">INSCRIÇÃO</button></div></div></div>');
            });

            $('article').click(function (event) {
                var article = event.delegateTarget;
                var index = $(article).attr('data-index');
                $('#board').hide();
                $('#event_details').show();
                $('.event').each(function (idx, event) {
                    var jQueryObj = $(event);
                    if(jQueryObj.attr('data-index') === index) {
                        jQueryObj.show();
                    } else {
                        jQueryObj.hide();
                    }
                });

            });
        }
    });


});