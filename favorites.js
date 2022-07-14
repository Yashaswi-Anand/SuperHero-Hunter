var listDiv = document.getElementById("fav-list");

function showAllFavorites(){
    var favArray = JSON.parse(localStorage.getItem('favArray'));
    console.log(favArray);
    
    if(favArray){
        for(var i of favArray){
            console.log(i);
            var li = document.createElement("li");
            // add a list with the name and image of the superhero and style it
            li.innerHTML = '<img class="result-img" src="'+i.imageUrl+'" alt="">'+i.name+'<div class="removeFav" id="'+i.id+'"><i class="fa-regular fa-heart"></i></div>';
            
            listDiv.appendChild(li);
        }

        // Add event listener to the remove favourite button
        var removeFav = document.getElementsByClassName("removeFav");
        console.log(removeFav);
        for(let i of removeFav){
            i.addEventListener('click', function(e){
                e.preventDefault();
                // find the index of this.id in the array
                var index = favArray.indexOf(i.id);
                // remove the index from the array
                favArray.splice(index, 1);
                localStorage.setItem('favArray', JSON.stringify(favArray)); 
                console.log(favArray);
                // remove the list item from the list
                i.parentElement.remove();
            });
        }
    }
}



showAllFavorites();