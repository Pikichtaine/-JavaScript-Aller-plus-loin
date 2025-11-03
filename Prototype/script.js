let contenedor=document.getElementById("container")

let spawn=document.getElementById("boton")
let city = document.getElementById("city")
let date = document.getElementById("date")
let clima=document.getElementById("Clima")
let presion=document.getElementById("presion")
let viento=document.getElementById("wind")
let humididad=document.getElementById("humidite")
let temperatura=document.getElementById("temperature")
let input = document.getElementById('city-select')
let elIcon = document.getElementById('icon')

function spawni(){
let input = document.getElementById('city-select')
let valor=input.value.trim()
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valor}&appid=b058d6053afbfb0e999b6f139f98b457&units=metric`)
.then(respuesta => {
    console.log("Estado HTTP:", respuesta.status);
    return respuesta.json()})
    .then(data=>{
    console.log(data)
    let utcTime = data.dt * 1000;
    let localTime = utcTime + (data.timezone * 1000);
    date.innerText=new Date(localTime).toLocaleTimeString();
    temperatura.innerText=(data.main.temp + "°C")
    presion.innerText=(data.main.pressure +" hPa")
    humididad.innerText=(data.main.humidity + " %")
    clima.innerText=data.weather[0].description
    city.innerText=data.name
    viento.innerText=(data.wind.speed + " km/h")
    const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        elIcon.innerHTML = `<img src="${iconUrl}" alt="${data.weather[0].description}">`;
    input.value=""
    })
.catch(error=>
    console.error(error))
}
spawn.addEventListener("click",function(){
    spawni();
});

input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        spawni();
    }
});