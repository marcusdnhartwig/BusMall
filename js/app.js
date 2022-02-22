'use strict';
console.log('subway eat fresh');

// Variables
// let clicksAllowed = 1;
let clicksAllowed = 25;
let allBusses = [];

// DOM Windows
let imageContainer = document.getElementById('container');
let imgOne = document.getElementById('busOne');
let imgTwo = document.getElementById('busTwo');
let imgThree = document.getElementById('busThree');
let resultsButton = document.getElementById('resultsButton');
let resultsList = document.getElementById('displayResultsList');
// Constructor
function Bus(name, fileExtension = 'jpeg'){
  this.name = name;
  this.numViews = 0;
  this.numCLicks = 0;
  this.src = `assets/images/${name}.${fileExtension}`;
  allBusses.push(this);
}
new Bus('bag');
new Bus('banana');
new Bus('bathroom');
new Bus('boots');
new Bus('breakfast');
new Bus('bubblegum');
new Bus('chair');
new Bus('cthulhu');
new Bus('dog-duck');
new Bus('dragon');
new Bus('pen');
new Bus('pet-sweep');
new Bus('scissors');
new Bus('shark');
new Bus('sweep', 'png');
new Bus('tauntaun');
new Bus('unicorn');
new Bus('water-can');
new Bus('wine-glass');
// console.log(allBusses);
// Other Code
function randomIndexNum() {
  return Math.floor(Math.random()*allBusses.length);
}
function renderBusses(){
  let imagesArray= [];
  imagesArray[0] = randomIndexNum();
  imagesArray[1] = randomIndexNum();
  imagesArray[2] = randomIndexNum();
  // console.log(imagesArray);
  while(imagesArray[1] === imagesArray[0]) {
    imagesArray[1] = randomIndexNum();
  }
  while(imagesArray[2] === imagesArray[1] || imagesArray[2] === imagesArray[0]) {
    imagesArray[2] = randomIndexNum();
  }
  imgOne.src = allBusses[imagesArray[0]].src;
  imgOne.alt = allBusses[imagesArray[0]].name;
  allBusses[imagesArray[0]].numViews++;

  imgTwo.src = allBusses[imagesArray[1]].src;
  imgTwo.alt = allBusses[imagesArray[1]].name;
  allBusses[imagesArray[1]].numViews++;
  
  imgThree.src = allBusses[imagesArray[2]].src;
  imgThree.alt = allBusses[imagesArray[2]].name;
  allBusses[imagesArray[2]].numViews++;
}
renderBusses();
function handleClick(event){
  clicksAllowed--;
  let bussesClicked = event.target.alt;
  for (let i = 0; i < allBusses.length; i++){
    if(bussesClicked === allBusses[i].name){
      allBusses[i].numCLicks++;
    }
  }
  renderBusses();
  if (clicksAllowed === 0) {
    imageContainer.removeEventListener('click', handleClick);
  }
}

console.log('$5 footlong');

// eslint-disable-next-line no-unused-vars
function handleResultsButton(event){
  if (clicksAllowed === 0){
    for(let i = 0; i < allBusses.length; i++){
      let li = document.createElement('li');
      li.textContent = `${allBusses[i].name} viewed: ${allBusses[i].numViews}. Clicked: ${allBusses[i].numCLicks} times.`;
      resultsList.appendChild(li);
    }
  }
}
console.log('Jared was always weird.');

imageContainer.addEventListener('click', handleClick);
resultsButton.addEventListener('click', handleResultsButton);
