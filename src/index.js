let apiKey = "1a2b7258ebd456c01aef9175dfe8b709";

function start(event) {
  event.preventDefault();
  globalThis.city = document.getElementById("enter-city").value;
  city = city.toLowerCase();
  let cityName = document.querySelector("#city");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(function (response) {
    globalThis.temp = document.querySelector("#temp");
    let cityTemp = response.data.main.temp;
    temp.innerHTML = `${cityTemp}°`;
    cityName.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
    document.getElementById("humidity").innerHTML = response.data.main.humidity;
    document.getElementById("wind").innerHTML = response.data.wind.speed;
  });
}
let search = document.querySelector("#search");
search.addEventListener("click", start);

function where(position) {
  globalThis.lat = position.coords.latitude;
  globalThis.lon = position.coords.longitude;
}

navigator.geolocation.getCurrentPosition(where);

function curFunction(event) {
  event.preventDefault();
  let apiUrlTwo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrlTwo).then(function (response) {
    let curCity = response.data.name;
    city.innerHTML = curCity;

    let curTemp = response.data.main.temp;
    temp.innerHTML = `${curTemp}°`;
  });
}

let current = document.getElementById("current");
current.addEventListener("click", curFunction);
