const API_KEY = "a564a37de9eb7f2fc92a8d52f712820c";

function getCity(){
    let city = document.getElementById("city").value;
    return city; 
}


function callWeather(){
    city = getCity();
    url = "http://api.weatherstack.com/current?access_key=" + API_KEY +"&query="+city;
    console.log("Appelle API");
    fetch(url).then((res)=>{
        return res.text();
    }).then( (text) => {
        console.log(JSON.parse(text));
    });
}