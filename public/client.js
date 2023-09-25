let button = document.getElementById("button-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        latText.innerText = `Latitude : ${lat.toFixed(2)}`;
        longText.innerText = `Longitude : ${long.toFixed(2)}`;
    });
});

