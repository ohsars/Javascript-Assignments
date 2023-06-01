"use strict"

const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

    const dogs = document.getElementById("imgContainer");

    function addNewDoggo() {
      // console.log("clicked");

      const promise = fetch(DOG_URL);
      promise
      .then(function(response) {
        const processingPromise = response.json(); //Json 
        return processingPromise
      })
      .then(function(processedResponse) {
        const img = document.createElement('img');
        img.style.width = '300px';
        img.style.height = '300px';
        img.style.marginBottom = "10px";
        img.style.rowGap =  ".2rem";
        img.style.gap = ".2rem"
        img.style.borderRadius = ".5rem";
        img.style.transition = "all ease-in"
        img.src = processedResponse.message;
        img.alt = "cute dog";
        dogs.appendChild(img);
      }).catch((error) => {
        alert("Cant find resource, Try again");
      })

      // document.getElementById('getImg').addEventListener("click", addNewDoggo)
    }