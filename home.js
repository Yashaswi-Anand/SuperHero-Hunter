// tokan -> 1182834895615033

// Input field
var searchInput = document.getElementById("searchInput");
// Result list
var showResult = document.getElementById('show-superhero-result');
// Favorite Array
var favIdArray = [];
var favListArray = [];
// Function to search for superhero
function superheroSearch(input){

  // XMLHttpRequest to get data from API
  var xhrRequest = new XMLHttpRequest();

  input.addEventListener('input', function(e){
    
    //console.log(this.value);
  
    xhrRequest.open('GET', 'https://www.superheroapi.com/api.php/1182834895615033/search/'+this.value, true);
      
    xhrRequest.onload = function(){
        //console.log(xhrRequest.response);
        var responceJson = JSON.parse(xhrRequest.response);
        //console.log(responceJson.results);
        showResult.innerHTML = "";
        var length = responceJson.results.length;
        
        for(let i=0;i<length;i++){
          var list = responceJson.results[i];
          console.log(list.name, list.id);
          
          // Create a list item and append to the list
          var li = document.createElement("li");
          // li.className = "li";
          console.log(li);
          // add a list with the name and image of the superhero and style it
         li.innerHTML = '<a href="" class="seRe" id="'+list.id+'">'+
          '<img class="result-img" src="'+list.image.url+'" alt=""></a>'+ list.name +
          '<div class ="addFav" id="'+list.id+'" data-name="'+list.name+'" data-image="'+list.image.url+'"><i class="fa-regular fa-heart"></i></div>';
          
          showResult.appendChild(li);
        }

        // Add event listener to the list items
        var listItems = document.getElementsByClassName("seRe");
        console.log(listItems);
        for(let i of listItems){
          i.addEventListener('click', function(e){
            e.preventDefault();
            console.log(this.id);
            localStorage.setItem('superheroId', this.id);
            window.location.href = "./profile.html";
          });
        }
        
        // Add event listener to the add favourite button
        var addFav = document.getElementsByClassName("addFav");
        console.log(addFav);
        for(let i of addFav){
          i.addEventListener('click', function(e){

          // return true or false if this.id is in the array
          var idAlreadPresent = favIdArray.includes(this.id);
          console.log(idAlreadPresent);
          

          if(idAlreadPresent == false){
            e.preventDefault();
            favIdArray.push(this.id);
            favListArray.push({id: this.id, name: this.dataset.name, imageUrl: this.dataset.image});
            localStorage.setItem('favArray', JSON.stringify(favListArray));
            console.log(favIdArray, favListArray);
            // change the icon to a filled heart icon into solid heart icon 
           this.innerHTML = '<i class="fa-solid fa-heart"></i>';
          }else{
              // find the index of this.id in the array
              var index = favIdArray.indexOf(this.id);
              // remove the index from the array
              favIdArray.splice(index, 1);
              favListArray.splice(index, 1);
              localStorage.setItem('favArray', JSON.stringify(favListArray)); 
              this.innerHTML = '<i class="fa-regular fa-heart"></i>';
            }
          });
        }
    }
    // Send request to API
    xhrRequest.send();
  });
  
}

// search super hero according to input
superheroSearch(searchInput);
