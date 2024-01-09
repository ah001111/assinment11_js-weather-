
let searchinput = document.querySelector('.search');
let container = document.querySelector('.card-group');
let allarray = [];
let allobject = {};

async function getweather(x) {

    let respone = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=78e9c9097d75418082064938240801&q=${x}&days=3`)

    let date = await respone.json()
    console.log(date);

    allobject = date;
    allarray = date.forecast.forecastday;
    // console.log(allarray);

    displaytoday();
    displaynext();
}

getweather()








function displaytoday() {
    let datetoday = new Date(`${allarray[0].date}`)
    console.log(datetoday)
    let num=datetoday.getDate()
    let dayy = datetoday.toLocaleDateString("en-Us", { weekday: "long" })

    let divs = " ";
    divs = `  <div class="card">
            <div class=" justify-content-between pt-2" id="today">
                <div class="day ps-2">${dayy}</div>
                <div class=" date pe-2">${allarray[0].date}</div>
            </div>
            <div class="">
                <div class="name pt-4 ps-3 fs-5">${allobject.location.region}</div>
                <div class=" d-flex justify-content-around">
                    <div class="dagraa pt-2 ps-3 fw-bold text-light">${allobject.current.temp_c}<sup>o</sup>C</div>

                    <div class="icon pt-4">
                        <img src="https:${allobject.current.condition.icon}" class="phot" alt="" width="90">
                    </div>
                </div>
                <div class="custom pb-3 ps-3 text-primary">${allobject.current.condition.text}</div>
                <span class="humidity ps-3"><img src="imgs/icon-umberella.png" class="p-1" alt="">${allobject.current.humidity}%</span>
                <span class="wind ps-3 pb-3"><img src="imgs/icon-wind.png" class="p-1" alt="">${allobject.current.wind_kph}km/h</span>
                <span class="winddir ps-3" ><img src="imgs/icon-compass.png" class="p-1" alt="">${allobject.current.wind_dir}</span>
            </div>
       `
    container.innerHTML = divs;
}



function displaynext() {
   
    let divs = " ";
    for (let i = 0; i < 2; i++) {
        let datetoday = new Date(`${allarray[i+1].date}`)
        let dayy = datetoday.toLocaleDateString("en-Us", { weekday: "long" })
        divs += ` <div class="card">
        <div class="text-center">
            <div class="day ps-2 pt-2">${dayy}</div>
            <div class="icon pt-5">
                <img src="https:${allarray[i + 1].day.condition.icon}" class="phoo" alt="" width="48">
            </div>
            <div class="max fs-5 pt-3 fw-bold text-light">${allarray[i + 1].day.maxtemp_c}<sup>o</sup>C</div>
            <small class="min pt-3">${allarray[i + 1].day.mintemp_c}<sup>o</sup></small>
            <div class="naxtcustom pt-3 text-primary">${allarray[i + 1].day.condition.text}</div>
        </div>
    </div>
  `
    }
    container.innerHTML += divs;
}





function search(){
   
    let s_value = searchinput.value;
    getweather(s_value);
}


searchinput.addEventListener('input' , search);



window.addEventListener('load' ,function(){
  let defu = 'cairo';
getweather(defu); 
});




