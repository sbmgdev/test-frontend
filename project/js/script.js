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

                var value = function () {
                    var val = difference % 60;

                    if (val < 10) {
                        return '0' + val;
                    } else {
                        return (val);
                    }
                };

                $('#board-container').append('<div class="col-sm-6 col-md-4 padding"><article class="article" data-index="' + index + '"><span class="light small">' + course.category + '</span><h4>' + course.title + '</h4><span class="light">' + course.address.city + '</span><hr/><span class="light">' + startDate.format('LL') + '</span><span class="fa fa-calendar light right"></span></article></div>');
                $('#event_details').append('<div class="event" data-index="' + index + '"><header class="header title"><span class="fa fa-arrow-left spacing arrow"></span><h3 class="spacing">' + course.title + '</h3></header><div class="course-detail"><h3 class="spacing title-course">' + course.title + '</h3><p class="spacing height">' + course.description + '</p><p class="spacing"><span class="fa fa-calendar fa-2x"></span> ' + startDate.format('LL') + '</p><p class="spacing"><span class="fa fa-clock-o fa-2x"></span> De ' + startDate.format('LT') + ' às ' + endDate.format('LT') + ' - ' + Math.floor(difference / 60) + ':' + value() + 'h</p><p class="spacing"><span class="fa fa-map-marker fa-2x"></span> <a class="link" href="https://www.google.com.br/maps/search/' + course.address.street + ', ' + course.address.number + ', ' + course.address.neighborhood + ', ' + course.address.city + '" target="_blank">' + course.address.street + ', ' + course.address.number + ', ' + course.address.neighborhood + ', ' + course.address.city + '</a></p><p class="spacing"><span class="fa fa-dollar  fa-2x"></span> R$' + course.price + ',00</p><p class="spacing"><span class="fa fa-tag fa-2x"></span> ' + course.category + '</p><p class="spacing"><img src="' + course.consultant.avatar + '"/>' + ' ' + course.consultant.name + '</p><div class="center"><button class="button">INSCRIÇÃO</button></div></div></div>');
            });

            $('article').click(function (event) {
                var article = event.delegateTarget;

                var index = $(article).attr('data-index');

                $('#board').hide();

                $('#event_details').show();

                $('.event').each(function (idx, event) {
                    var jQueryObj = $(event);

                    if (jQueryObj.attr('data-index') === index) {
                        jQueryObj.show();
                    } else {
                        jQueryObj.hide();
                    }
                });

            });

            $('.arrow').click(function () {
                $('#event_details').hide();

                $('#board').show();
            });
        }
    });
});