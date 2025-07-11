let inpt = document.querySelector("#in")
let btn = document.querySelector("button")



btn.addEventListener("click", async () => {
    let city = inpt.value.trim();
    if (city=="") {
        alert("please enter city name")
        return;
        
    }
    let display = document.querySelector(".result")
    try{
        let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=b0fe6d2bb5d94c57aeb52956252306&q=${city}`)
        let url = await res.json()
         display.innerHTML = `<p>${url.location.name}, ${url.location.region}, ${url.location.country}</p>
                        <p>Local Time= ${Date()}</p>
                         <p>Temperature = ${url.current.temp_c}°C</p>
                         <p>Humidity=${url.current.humidity}%</p>
                         <p>wind speed=${url.current.wind_mph} km/h</p>
                         <p>Pressure=${url.current.pressure_mb} hPa</p>
                         <p>Condition=${url.current.condition.text}</p>
                          <img class="icon" src="${url.current.condition.icon}" alt=""> 
                         `;
    } catch{
              display.innerText="Api not responsing"
    }
   
})


