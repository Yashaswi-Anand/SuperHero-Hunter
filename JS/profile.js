var superheroId = localStorage.getItem("superheroId");
console.log(superheroId);
function fetchSuperheroProfile(){
    // XMLHttpRequest object to get data from API
    var xhrRequest = new XMLHttpRequest();
    
    xhrRequest.open('GET', 'https://gateway.marvel.com/v1/public/characters/'+superheroId+'?ts=1658332513014&apikey=bd5eef2251cdf7a39ca803334bb51084&hash=c1a3dc88257417380bd76e7b919b6dff', true);

    // onload function to get data from API
    xhrRequest.onload = function(){
        var responce = JSON.parse(xhrRequest.response);
        console.log(responce.data.results);
        var superheroData = responce.data.results[0];
        document.getElementById('name').innerHTML = superheroData.name;
        document.getElementById('superHeroImg').src = superheroData.thumbnail.path+"."+superheroData.thumbnail.extension;
        document.getElementById('series').innerHTML = superheroData.series.available;
        document.getElementById('comics').innerHTML = superheroData.comics.available;
        document.getElementById('stories').innerHTML = superheroData.stories.available;
        document.getElementById('events').innerHTML = superheroData.events.available;
        document.getElementById('description').innerHTML = superheroData.description==""?"No description here":superheroData.description;

    }
    xhrRequest.send();
}

fetchSuperheroProfile();