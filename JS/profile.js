var superheroId = localStorage.getItem("superheroId");
console.log(superheroId);
function fetchSuperheroProfile(){
    // XMLHttpRequest object to get data from API
    var xhrRequest = new XMLHttpRequest();
    
    xhrRequest.open('GET', 'https://gateway.marvel.com/v1/public/characters/'+superheroId+'?ts=1658332513014&apikey=bd5eef2251cdf7a39ca803334bb51084&hash=c1a3dc88257417380bd76e7b919b6dff', true);

    // onload function to get data from API
    xhrRequest.onload = function(){
        var responce = JSON.parse(xhrRequest.response);
        //console.log(responce.data.results);
        var superheroData = responce.data.results[0];
        document.getElementById('name').innerHTML = superheroData.name;
        document.getElementById('superHeroImg').src = superheroData.thumbnail.path+"."+superheroData.thumbnail.extension;
        document.getElementById('gender').innerHTML = superheroData.series.available;
        // document.getElementById('height').innerHTML = responce.appearance.height[1];
        // document.getElementById('weight').innerHTML = responce.appearance.weight[1];
        // document.getElementById('speed').innerHTML = responce.powerstats.speed;
        // document.getElementById('intelligence').innerHTML = responce.powerstats.intelligence;
        // document.getElementById('strength').innerHTML = responce.powerstats.strength;
        // document.getElementById('power').innerHTML = responce.powerstats.power;
        // document.getElementById('eye').innerHTML = responce.appearance.eyeColor;
    }
    xhrRequest.send();
}

fetchSuperheroProfile();