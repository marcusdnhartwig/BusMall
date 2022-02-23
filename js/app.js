'use strict';
console.log('subway eat fresh');

// Variables
//let clicksAllowed = 5;
let clicksAllowed = 25;
let allBusses = [];

/////////// STEP 3 From below ////////
let retreivedBusses = localStorage.getItem('Bus');
console.log('retreivedBusses',retreivedBusses);

// ////// Step 4: Parse data for code to read
 let parsedBusses = JSON.parse(retreivedBusses);
 console.log('parsed busses', parsedBusses);

///// Step 5: Use the data that came out of localStorage


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


///////////// LOCAL STORAGE
/// Step 5: Use the data that came out of localStorage
if (retreivedBusses) {
  allBusses = parsedBusses;
} else {
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
  }
  


console.log(allBusses);


// Other Code
function randomIndexNum() {
  return Math.floor(Math.random()*allBusses.length);
}

let productIndex = [];

function renderBusses(){

  while (productIndex.length < 6) {
    let randomNum = randomIndexNum();
    while(!productIndex.includes(randomNum))
    productIndex.push(randomNum);
  }
  console.log(productIndex);

  let busOne = productIndex.shift();
  let busTwo = productIndex.shift();
  let busThree = productIndex.shift();


  // let imagesArray= [];
  // imagesArray[0] = randomIndexNum();
  // imagesArray[1] = randomIndexNum();
  // imagesArray[2] = randomIndexNum();
  // // console.log(imagesArray);
  // while(imagesArray[1] === imagesArray[0]) {
  //   imagesArray[1] = randomIndexNum();
  // }
  // while(imagesArray[2] === imagesArray[1] || imagesArray[2] === imagesArray[0]) {
  //   imagesArray[2] = randomIndexNum();
  // }
  imgOne.src = allBusses[busOne].src;
  imgOne.alt = allBusses[busOne].name;
  allBusses[busOne].numViews++;

  imgTwo.src = allBusses[busTwo].src;
  imgTwo.alt = allBusses[busTwo].name;
  allBusses[busTwo].numViews++;
  
  imgThree.src = allBusses[busThree].src;
  imgThree.alt = allBusses[busThree].name;
  allBusses[busThree].numViews++;
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
   
    /////////// LOCAL STORAGE BEGINS ////////////
    // step 1: stringify data
    let stringifyBusses = JSON.stringify(allBusses);
     console.log('stringified busses', stringifyBusses);
    
    // // Step 2: set the item into local storage
     localStorage.setItem('Bus', stringifyBusses);
    
    // Step 3: get item out of local storag THIS IS GLOBAL ^^^^^^^^^
    // Step 4: Parse data for code to read THIS IS GLOBAL ^^^^^^^^

  }    
}

console.log('$5 footlong');

// eslint-disable-next-line no-unused-vars
function handleResultsButton(event){
  if (clicksAllowed === 0){
    renderChart();
    // for(let i = 0; i < allBusses.length; i++){
    //   let li = document.createElement('li');
    //   li.textContent = `${allBusses[i].name} viewed: ${allBusses[i].numViews}. Clicked: ${allBusses[i].numCLicks} times.`;
    //   resultsList.appendChild(li);
    // }
  }
}
console.log('Jared was always weird.');

imageContainer.addEventListener('click', handleClick);
resultsButton.addEventListener('click', handleResultsButton, removeEventListener);

const ctx = document.getElementById('myChart').getContext('2d');

function renderChart(){
  
  let allBusNames = [];
  let bussesClicked = [];
  let allBusview= [];
  for (let i = 0; i < allBusses.length; i++){
    allBusNames.push(allBusses[i].name);
    bussesClicked.push(allBusses[i].numCLicks); 
    allBusview.push(allBusses[i].numViews);
  }

  
  let chartObject = {
    type: 'bar',
    data: {
      labels: allBusNames,
      datasets: [{
        label: '# of Views',
        data: allBusview,
        backgroundColor: [
          'rgba(280, 150, 190, .2)',
          'rgba(54, 162, 235, .2)',
          'rgba(255, 206, 86, .2)',
          'rgba(75, 192, 192, .2)',
          'rgba(153, 102, 255, .2)',
          'rgba(255, 159, 64, .2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },{
        label: '# of Clicks',
        data: bussesClicked,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  const busChart = new Chart(ctx, chartObject);
  
}




















// console.log('subway eat fresh');

// // Variables
// let ticksAllowed = 1;
// //let clicksAllowed = 25;
// let allProducts = [];

// // DOM Windows
// let productContainerTwo = document.getElementById('containerTwo');
// let productOne = document.getElementById('productOne');
// let productTwo = document.getElementById('productTwo');
// let productThree = document.getElementById('productThree');
// let productButton = document.getElementById('resultsButton');
// let productList = document.getElementById('displayResultsList');
// // Constructor
// function Product(name, fileExtension = 'jpeg'){
//   this.name = name;
//   this.numViews = 0;
//   this.numCLicks = 0;
//   this.src = `assets/images/${name}.${fileExtension}`;
//   allProducts.push(this);
// }
// new Product('bag');
// new Product('banana');
// new Product('bathroom');
// new Product('boots');
// new Product('breakfast');
// // new Bus('bubblegum');
// // new Bus('chair');
// // new Bus('cthulhu');
// // new Bus('dog-duck');
// // new Bus('dragon');

// // Other Code
// function randomIndexNum() {
//   return Math.floor(Math.random()*allProducts.length);
// }
// function renderBusses(){
//   let imagesArray= [];
//   imagesArray[0] = randomIndexNum();
//   imagesArray[1] = randomIndexNum();
//   imagesArray[2] = randomIndexNum();
//   // console.log(imagesArray);
//   while(imagesArray[1] === imagesArray[0]) {
//     imagesArray[1] = randomIndexNum();
//   }
//   while(imagesArray[2] === imagesArray[1] || imagesArray[2] === imagesArray[0]) {
//     imagesArray[2] = randomIndexNum();
//   }
//   productOne.src = allProducts[imagesArray[0]].src;
//   productOne.alt = allProducts[imagesArray[0]].name;
//   allProducts[imagesArray[0]].numViews++;

//   productTwo.src = allProducts[imagesArray[1]].src;
//   productTwo.alt = allProducts[imagesArray[1]].name;
//   allProducts[imagesArray[1]].numViews++;
  
//   productThree.src = allProducts[imagesArray[2]].src;
//   productThree.alt = allProducts[imagesArray[2]].name;
//   allProducts[imagesArray[2]].numViews++;
// }
// renderProducts();
// function handleClick(event){
//   ticksAllowed--;
//   let productsClicked = event.target.alt;
//   for (let i = 0; i < allProducts.length; i++){
//     if(productsClicked === allProducts[i].name){
//       allProducts[i].numCLicks++;
//     }
//   }
//   renderProducts();
//   if (ticksAllowed === 0) {
//     imageContainer.removeEventListener('click', handleClick);
//   }
// }

// console.log('$5 footlong');

// // eslint-disable-next-line no-unused-vars
// function handleResultsButton(event){
//   if (ticksAllowed === 0){
//     renderChart();
//     // for(let i = 0; i < allBusses.length; i++){
//     //   let li = document.createElement('li');
//     //   li.textContent = `${allBusses[i].name} viewed: ${allBusses[i].numViews}. Clicked: ${allBusses[i].numCLicks} times.`;
//     //   resultsList.appendChild(li);
//     // }
//   }
// }
// console.log('Jared was always weird.');

// imageContainer.addEventListener('click', handleClick);
// resultsButton.addEventListener('click', handleResultsButton, removeEventListener);

// const context = document.getElementById('my-chart').getContext('2d');

// function renderChart(){
  
//   let allProductNames = [];
//   let productsClicked = [];
//   let allProducetsViewed= [];
//   for (let i = 0; i < allProducts.length; i++){
//     allProductNames.push(allProducts[i].name);
//     productsClicked.push(allProducts[i].numCLicks); 
//     allProducetsViewed.push(allProducts[i].numViews);
//   }

  
//   let chartObject = {
//     type: 'bar',
//     data: {
//       labels: allProductNames,
//       datasets: [{
//         label: '# of Views',
//         data: allProducetsViewed,
//         backgroundColor: [
//           'rgba(280, 150, 190, .2)',
//           'rgba(54, 162, 235, .2)',
//           'rgba(255, 206, 86, .2)',
//           'rgba(75, 192, 192, .2)',
//           'rgba(153, 102, 255, .2)',
//           'rgba(255, 159, 64, .2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       },{
//         label: '# of Clicks',
//         data: productsClicked,
//         backgroundColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       },]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   };
//   const busChart = new Chart(ctx, chartObject);
  
// }







console.log('Petra City');

// let ticksAllowed = 1;
// let allProducts = [];

// // DOM Windows
// let productContainerTwo = document.getElementById('containerTwo');
// let productOne = document.getElementById('productOne');
// let productTwo = document.getElementById('productTwo');
// let productThree = document.getElementById('productThree');
// let buttonTwo = document.getElementById('buttonTwo');
// let productList = document.getElementById('productList');

// // Constructor
// function Product(name, fileExtension = 'jpeg'){
//   this.name = name;
//   this.numViews = 0;
//   this.numCLicks = 0;
//   this.src = `assets/images/${name}.${fileExtension}`;
//   allProducts.push(this);
// }
// new Product('bubblegum');
// new Product('chair');
// new Product('cthulhu');
// new Product('dog-duck');
// new Product('dragon');
// new Bus('pen');
// new Bus('pet-sweep');
// new Bus('scissors');
// new Bus('shark');
// new Bus('sweep', 'png');
// new Bus('tauntaun');
// new Bus('unicorn');
// new Bus('water-can');
// new Bus('wine-glass');
// console.log(allBusses);

// // Other Code
// function randomIndexNum() {
//   return Math.floor(Math.random() * allProducts.length);
// }
// function renderProducts(){
//   let imagesArray= [];
//   imagesArray[0] = randomIndexNum();
//   imagesArray[1] = randomIndexNum();
//   imagesArray[2] = randomIndexNum();
//   // console.log(imagesArray);
//   while(imagesArray[1] === imagesArray[0]) {
//     imagesArray[1] = randomIndexNum();
//   }
//   while(imagesArray[2] === imagesArray[1] || imagesArray[2] === imagesArray[0]) {
//     imagesArray[2] = randomIndexNum();
//   }
//   productOne.src = allProducts[imagesArray[0]].src;
//   productOne.alt = allProducts[imagesArray[0]].name;
//   allProducts[imagesArray[0]].numViews++;

//   productTwo.src = allProducts[imagesArray[1]].src;
//   productTwo.alt = allProducts[imagesArray[1]].name;
//   allProducts[imagesArray[1]].numViews++;
  
//   productThree.src = allProducts[imagesArray[2]].src;
//   productThree.alt = allProducts[imagesArray[2]].name;
//   allProducts[imagesArray[2]].numViews++;
// }
// renderProducts();
// function handleClick(event){
//   ticksAllowed--;
//   let productsClicked = event.target.alt;
//   for (let i = 0; i < allProducts.length; i++){
//     if(productsClicked === allProducts[i].name){
//       allProducts[i].numCLicks++;
//     }
//   }
//   renderProducts();
//   if (clicksAllowed === 0) {
//     imageContainer.removeEventListener('click', handleClick);
//   }
// }

// console.log('Kilwa Kisawani');

// // eslint-disable-next-line no-unused-vars
// function handleResultsButton(event){
//   if (clicksAllowed === 0){
//     renderChart();
//   }
// }