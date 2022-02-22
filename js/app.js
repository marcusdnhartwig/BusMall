'use strict';
console.log('subway eat fresh');

// global ver. 
let theContainer = document.getElementById('container');
let busOne = document.getElementById('busOne');
let busTwo = document.getElementById('busTwo');
let busThree = document.getElementById('busThree');
let resultsButton = document.getElementById('resultsButton');
let resultsList = document.getElementById('displayResultsList');


let voteAllowed = 5;
let allBusses = [];



function Bus(name, fileExtension = 'jpeg'){
  this.name = name; 
  this.view = 0;
  this.clicks = 0;
  this.src = `assets/images/${name}.${fileExtension}`;

  
  allBusses.push(this);
}

// DOM REF
// let myContainter = document.getElementById('container');
// let imgOne = document.getElementById('imgOne');
// let imgTwo = document.getElementById('imgTwo');
// let imgThree = document.getElementById('imgThree');
// let imgFour = document.getElementById('imgFour');
// let imgFive = document.getElementById('imgFive');
// let imgSix = document.getElementById('imgSix');
// let imgSeven = document.getElementById('imgSeven');
// let imgEight = document.getElementById('imgEight');
// let imgNine = document.getElementById('imgNine');
// let imgTen = document.getElementById('imgTen');
// let imgEleven = document.getElementById('imgEleven');
// let imgTwelve = document.getElementById('imgTwelve');
// let imgThirteen = document.getElementById('imgThirteen');
// let imgFourteen = document.getElementById('imgFourteen');
// let imgFifteen = document.getElementById('imgFifteen');
// let imgSixteen = document.getElementById('imgSixteen');
// let imgSeventeen = document.getElementById('imgSeventeen');
// let imgEighteen = document.getElementById('imgEighteen');

// let resultsButton = document.getElementById('resultsButton');
// let showResults = document.getElementById('displayResultsList');


  


new Bus ('bag');
new Bus ('banana');
new Bus ('boots');
new Bus ('breakfast');
new Bus ('bubblegum');
new Bus ('chair');
new Bus ('cthulhu');
new Bus ('dog-duck');
new Bus ('dragon');
new Bus ('pen');
new Bus ('pet-sweep');
new Bus ('scissors');
new Bus ('shark');
new Bus ('sweep', 'png');
new Bus ('tauntaun');
new Bus ('unicorn');
new Bus ('water-can');
new Bus ('wine-glass');

// console.log(allBusses);

function getRandomIndex(){
  return Math.random(Math.random() * allBusses.length);
}
// Executable Code
// Render img

// DOM manipulation

function renderBus(){
  let busUnoIndex = getRandomIndex();
  let busDoseIndex = getRandomIndex();
  let busTresIndex = getRandomIndex();

  while(busUnoIndex === busDoseIndex || busUnoIndex === busTresIndex || busDoseIndex === busTresIndex) {
    busDoseIndex = getRandomIndex();
    busTresIndex = getRandomIndex();
  }
 
console.log(`Bus votes ${voteAllowed}`);

busOne.src = allBusses[busUnoIndex].src;
busOne.alt = allBusses[busUnoIndex].name;
allBusses[busUnoIndex].views++;

busTwo.src = busses[busDoseIndex].src;
busTwo.alt = busses[busDoseIndex].name;
allBusses[busDoseIndex].views++;

busThree = busses[busTresIndex].src;
busThree = busses[busTresIndex.name];
allBusses[busTresIndex].views++;
}

// renderBus();

function engageClick(event) {
  votes--;
  let busClicked = event.target.alt;

  for (let i = 0; i < allBusses.length; i++) {
    if (busClicked === allBusses[i].name) {
      allBusses[i].clicks++;
    }
  }  
  renderBus();
  
  if (votes === 0) {
    theContainer.removeEventListener('click', engageClick);
  }
}

function engageResults() {
  for (let i = 0; i < allBusses.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allBusses[i].name} was viewd ${allBusses[i].views} times, and the one that looked most bussy was ${allBusses[i].clicks}.`;
    displayUl.appendChild(li);
  }
}

theContainer.addEventListener('click', engageClick);
resultsButton.addEventListener('click', engageResults);






//   busOne

//   imgOne.src = allBusses[0].src;
//   imgTwo.src = allBusses[1].src;
//   imgThree.src = allBusses[2].src;
//   imgFour.src = allBusses[3].src;
//   imgFive.src = allBusses[4].src;
//   imgSix.src = allBusses[5].src;
//   imgSeven.src = allBusses[6].src;
//   imgEight.src = allBusses[7].src;
//   imgNine.src = allBusses[8].src;
//   imgTen.src = allBusses[9].src;
//   imgEleven.src = allBusses[10].src;
//   imgTwelve.src = allBusses[11].src;
//   imgThirteen.src = allBusses[12].src;
//   imgFourteen.src = allBusses[13].src;
//   imgFifteen.src = allBusses[14].src;
//   imgSixteen.src = allBusses[15].src;
//   imgSeventeen.src = allBusses[16].src;
//   imgEighteen.src = allBusses[17].src;
// }


// Need to render images

