function getWeatherData(searchedCity="Baku"){
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + searchedCity+ '&appid=ecad3558ca18ddbfb33b1e3dbff4c348',
        success: function(data){
            let temp = data.main.temp;
            let humidity = data.main.humidity;
            let wind_speed = data.wind.speed;
            $('.widget__temperature').text(parseInt(temp)-273);
            $('.widget__city').text(searchedCity);
            $('.widget__attr-value:eq(0)').text(humidity);
            $('.widget__attr-value:eq(1)').text(wind_speed);
            $('.widget__weather-icon>img').attr('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon  +'.png');
        },
        error: function(errorResult){
            alert('Sehvlik var!!');
        },  
    });
};

$(document).ready(function (){
    getWeatherData();
});

$(document).on('click', '#search', function(){
    let searchedCity = $('input').val();
    getWeatherData(searchedCity);
});