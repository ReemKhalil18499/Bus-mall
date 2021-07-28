"use strict"

let leftImageElement=document.getElementById('left-image');
let middleImageElement=document.getElementById('middle-image');
let rightImageElement=document.getElementById('right-image');

let maxAttempts=25;
let userAttemptsCounter=0;


function Products (name,src){
    this.name=name;
    this.src=src;
    this.shown=0;
    this.votes=0;
    products.push(this);
    namesArr.push(this.name);
}
let namesArr=[];
let votesArr=[];
let shownArr=[];
let numbers=[];
let products=[];
new Products('bag.jpg','img/bag.jpg');
new Products('banana.jpg','img/banana.jpg');
new Products('bathroom.jpg','img/bathroom.jpg');
new Products('boots.jpg','img/boots.jpg');
new Products('breakfast.jpg','img/breakfast.jpg');
new Products('bubblegum.jpg','img/bubblegum.jpg');
new Products('chair.jpg','img/chair.jpg');
new Products('cthulhu.jpg','img/cthulhu.jpg');
new Products('dog-duck.jpg','img/dog-duck.jpg');
new Products('dragon.jpg','img/dragon.jpg');
new Products('pen.jpg','img/pen.jpg');
new Products('pet-sweep.jpg','img/pet-sweep.jpg');
new Products('scissors.jpg','img/scissors.jpg');
new Products('shark.jpg','img/shark.jpg');
new Products('sweep.png','img/sweep.png');
new Products('tauntaun.jpg','img/tauntaun.jpg');
new Products('unicorn.jpg','img/unicorn.jpg');
new Products('water-can.jpg','img/water-can.jpg');
new Products('wine-glass.jpg','img/wine-glass.jpg');
console.log(products);



function getRandomIndex(){
return Math.floor(Math.random()*products.length)
}
console.log(getRandomIndex());
let leftImageIndex
let middleImageIndex
let rightImageIndex

function renderThreeImages(){

  leftImageIndex=getRandomIndex();
    middleImageIndex=getRandomIndex();
    rightImageIndex=getRandomIndex();
    
    while(leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || rightImageIndex === middleImageIndex){
            rightImageIndex=getRandomIndex();
            middleImageIndex=getRandomIndex();
        }
    
    console.log(leftImageIndex,middleImageIndex,rightImageIndex);

leftImageIndex=getRandomIndex();
middleImageIndex=getRandomIndex();
rightImageIndex=getRandomIndex();

while(leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || rightImageIndex === middleImageIndex || numbers.includes(leftImageIndex)|| numbers.includes(middleImageIndex)|| numbers.includes(rightImageIndex)){
        rightImageIndex=getRandomIndex();
        middleImageIndex=getRandomIndex();
        leftImageIndex=getRandomIndex();
    }
    numbers=[leftImageIndex,rightImageIndex,middleImageIndex];

console.log(leftImageIndex,middleImageIndex,rightImageIndex);

console.log(products[leftImageIndex].name);
console.log(products[middleImageIndex].name);
console.log(products[rightImageIndex].name);

leftImageElement.src=products[leftImageIndex].src;
products[leftImageIndex].shown++;


middleImageElement.src=products[middleImageIndex].src;
products[middleImageIndex].shown++;


rightImageElement.src=products[rightImageIndex].src;
products[rightImageIndex].shown++;
}
renderThreeImages();

let imagesDiv=document.getElementById('images-div');
imagesDiv.addEventListener('click',handleUserClick);

leftImageElement.addEventListener('click',handleUserClick);
middleImageElement.addEventListener('click',handleUserClick);
rightImageElement.addEventListener('click',handleUserClick); 

function handleUserClick (event){
    console.log(event.target.id);
    userAttemptsCounter++;
     console.log(userAttemptsCounter);

     
let imagesDiv=document.getElementById('images-div');
imagesDiv.addEventListener('click',handleUserClick)
  
 if(userAttemptsCounter<maxAttempts){
     if(event.target.id==='left-image'){
         products[leftImageIndex].votes++;
         console.log(products[leftImageIndex]);
     }
 else if(event.target.id==='right-image'){
     products[rightImageIndex].votes++;
     console.log(products[rightImageIndex]);
 }
 else if(event.target.id==='middle-image'){
         products[middleImageIndex].votes++;
     console.log(products[middleImageIndex]);
     }
     renderThreeImages();
}
else{
  updateStorage();
  
  
    for (let i = 0; i <products.length; i++){
        console.log(products[i].votes);
         votesArr.push(products[i].votes);
    shownArr.push(products[i].shown);
          }
          showChart();

    let paragraph= document.createElement("button");
    imagesDiv.appendChild(paragraph);
    paragraph.textContent='ViewResults';

paragraph.addEventListener('click',ViewResults);
imagesDiv.removeEventListener('click',handleUserClick);
}
}

function ViewResults(){
    let paragraph=document.getElementById('results-list');
    for (let i=0;i<products.length;i++){
        let paragraphItem=document.createElement('li');
        paragraph.appendChild(paragraphItem);
        paragraphItem.textContent=`${products[i].name}has ${products[i].votes}votes,and was shown ${products[i].shown} times`;
    }
}




function updateStorage() {

  let arrayString=JSON.stringify(products);
  localStorage.setItem('Products',arrayString);
}








function getItems() {
  let data=localStorage.getItem('Products');
  console.log(data);

  let parsedData=JSON.parse(data);
  console.log(parsedData);

  console.log(parsedData);
  if (parsedData!==null) {
    products=parsedData
    // for (let i = 0; i < parsedData.length; i++) {
    // //  console.log(parsedData[i]);
    // let newProducts=new Products(parsedData[i].name,parsedData[i].source);

    // newProducts.votes=parsedData[i].votes;
    // newProducts.shown=parsedData[i].shown;
    
    // }
    
  }

}


getItems();
function showChart(){
    let data ={
      labels: namesArr,
      datasets: [{
        label: 'Votes',
        data: votesArr,
        backgroundColor:[
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      },
      {
        label: 'Shown',
        data: shownArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
    };
    let config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    }; 
    let myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  }







