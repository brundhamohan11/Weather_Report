const button=document.getElementById("button");
const weatherContent=document.getElementById("weathercontent");
const weather=document.getElementById("weather");
let counter=0;

button.onclick =() =>{
    axios.get('https://www.freetestapi.com/api/v1/weathers').then(function(response){
        button.textContent= "NEXT";
        weatherContent.textContent="";
        console.log(response.data[counter].country);
        weatherContent.textContent=response.data[counter].country;
        setTimeout(function() {
           weather.textContent=response.data[counter].weather_description;
        },1500);
        counter++;

    })
    .catch(function(error){
        console.log(error);
    });
};