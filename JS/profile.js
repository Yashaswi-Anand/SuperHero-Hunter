var superheroId = localStorage.getItem("superheroId");

function fetchSuperheroProfile(){
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('GET', 'https://www.superheroapi.com/api.php/1182834895615033/'+superheroId, true);

    xhrRequest.onload = function(){
        var responce = JSON.parse(xhrRequest.response);
        console.log(responce);
        document.getElementById('name').innerHTML = responce.name;
        document.getElementById('superHeroImg').src = responce.image.url;
        document.getElementById('gender').innerHTML = responce.appearance.gender;
        document.getElementById('height').innerHTML = responce.appearance.height[1];
        document.getElementById('weight').innerHTML = responce.appearance.weight[1];
        document.getElementById('speed').innerHTML = responce.powerstats.speed;
        document.getElementById('intelligence').innerHTML = responce.powerstats.intelligence;
        document.getElementById('strength').innerHTML = responce.powerstats.strength;
        document.getElementById('power').innerHTML = responce.powerstats.power;
        // document.getElementById('eye').innerHTML = responce.appearance.eyeColor;
    }
    xhrRequest.send();
}

fetchSuperheroProfile();