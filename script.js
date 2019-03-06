$(() => {
    $('#submit').on('click', (e) => {
        const userZip = $('#zipcode').val();
        console.log(userZip);
        e.preventDefault();
        makeCall(userZip);
    });

    function makeCall(zipcode) {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&appid=b1042ac96d2896e980b9206448183de6',
            type: 'GET'
        }).done(function (data) {
            console.log('the data: ', data);
            getData(data);
        });
    }

    function getData(responseData) {
        const city = responseData.name;
        console.log(city);
        const temp = responseData.main.temp.toFixed(0);
        console.log(temp);
        const description = responseData.weather[0].description;
        console.log(description);

        appendToDom(city, temp, description)
    }

    function appendToDom (city, temp, description) {
        $('#result').empty();
        $('#result').append('<p id="city"></p>', 'City: ' + city);
        $('#result').append('<p id="temp"></p>', 'Temperature : ' + temp);
        $('#result').append('<p id="description"></p>', 'Description : ' + description);
    }
})