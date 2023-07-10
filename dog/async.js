const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

const dogs = document.getElementById("imgContainer");

async function addNewDoggo() {
  const promise = await fetch(DOG_URL);
  const processedResponse = await promise.json();
  img.src = processedResponse.message;
  img.alt = "cute dog";
  dogs.appendChild(img);
}