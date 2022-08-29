let weather = {
    //the api key
    apiKey : '76ddd5a4c10833e44eaeeea0be7f10a0',
    fetchWeather: function(city){
        //here we're calling the api
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        + this.apiKey
        )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    //this function to get the data and display it
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name; 
        document.querySelector(".icon").src="http://openweathermap.org/img/w/"+icon+".png"; 
        document.querySelector(".temp").innerText = temp + "C°";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " +speed + "km/h";
         
    },
    //this function for the input
    search: function(){
        this.fetchWeather(document.querySelector(".search input").value);
        
    }
};
//here we're calling the button to make search 
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})
//here we're making the "Enter" key able to make search
document.querySelector(".search input").addEventListener("keyup",function(event){
    if(event.key =="Enter"){
        weather.search();
    }
})