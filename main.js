var cityname = document.querySelector(".city")
var button = document.querySelector(".submit");
var temperaturedegree = document.querySelector(".temperature-degree");
var description = document.querySelector(".temperature-description");
var place = document.querySelector(".cityname");
var minimun = document.querySelector(".temp-min");
var maximun = document.querySelector(".temp-max");

//var degree = document.querySelector(".degree-section");


// on clicking the button things will display...
button.addEventListener("click", function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityname.value + '&appid=f9a996f9d706b0bf5bf3aaef724c54ee')
    .then((response) => {
      return response.json()
    })
    .then(data => {
      console.log(data);

      var temperaturedegreeValue = data["main"]["temp"];
      var descriptionValue = data["weather"][0]["description"];
      var cityValue = data["name"];
      var maxValue = data["main"]["temp_max"];
      var minValue = data["main"]["temp_min"];

      temperaturedegree.innerHTML = temperaturedegreeValue;
      description.innerHTML = descriptionValue;
      place.innerHTML = cityValue;
      minimun.innerHTML = minValue;
      maximun.innerHTML = maxValue;


      // change background according to weather....
      var weatherValue = data["weather"][0]["main"];

      if (weatherValue === "Clear") {
        document.body.style.backgroundImage = "url('assets/clear sky.jpg')";
      }
      else if (weatherValue === "Rain") {
        document.body.style.backgroundImage = "url('assets/rain.jpg')";
      }
      else if (weatherValue === "Haze") {
        document.body.style.backgroundImage = "url('assets/haze.jpg')";
      }
      else if (weatherValue === "Clouds") {
        document.body.style.backgroundImage = "url('assets/cloudy.jpg')";
      }
      else if (weatherValue === "Drizzle") {
        document.body.style.backgroundImage = "url('assets/drizzle.jpg')";
      }
    });
})
































































