"use strict"

let leftImageElement=document.getElementById('left-image');
let middleImageElement=document.getElementById('middle-image');
let rightImageElement=document.getElementById('right-image');

let maxAttempts=25;
let userAttemptsCounter=0;

let products=[];
function Products (name,src){
    this.name=name;
    this.src=src;
    this.shown=0;
    this.votes=0;
    products.push(this);
}

new Products('bag.jpg','./amman-201d33/class-11/lab/assets/bag.jpg');
new Products('banana.jpg','./amman-201d33/class-11/lab/assets/banana.jpg');
new Products('bathroom.jpg','./amman-201d33/class-11/lab/assets/bathroom.jpg');
new Products('boots.jpg','./amman-201d33/class-11/lab/assets/boots.jpg');
new Products('breakfast.jpg','./amman-201d33/class-11/lab/assets/breakfast.jpg');
new Products('bubblegum.jpg','./amman-201d33/class-11/lab/assets/bubblegum.jpg');
new Products('chair.jpg','./amman-201d33/class-11/lab/assets/chair.jpg');
new Products('cthulhu.jpg','./amman-201d33/class-11/lab/assets/cthulhu.jpg');
new Products('dog-duck.jpg','./amman-201d33/class-11/lab/assets/dog-duck.jpg');
new Products('dragon.jpg','./amman-201d33/class-11/lab/assets/dragon.jpg');
new Products('pen.jpg','./amman-201d33/class-11/lab/assets/pen.jpg');
new Products('pet-sweep.jpg','./amman-201d33/class-11/lab/assets/pet-sweep.jpg');
new Products('scissors.jpg','./amman-201d33/class-11/lab/assets/scissors.jpg');
new Products('shark.jpg','./amman-201d33/class-11/lab/assets/shark.jpg');
new Products('sweep.png','./amman-201d33/class-11/lab/assets/sweep.png');
new Products('tauntaun.jpg','./amman-201d33/class-11/lab/assets/tauntaun.jpg');
new Products('unicorn.jpg','./amman-201d33/class-11/lab/assets/unicorn.jpg');
new Products('water-can.jpg','./amman-201d33/class-11/lab/assets/water-can.jpg');
new Products('wine-glass.jpg','./amman-201d33/class-11/lab/assets/wine-glass.jpg');
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

while(
    leftImageIndex===middleImageIndex|| leftImageIndex===rightImageIndex || middleImageIndex===leftImageIndex||middleImageIndex===rightImageIndex||rightImageIndex===leftImageIndex||rightImageIndex===middleImageIndex){
        rightImageIndex=getRandomIndex();
        middleImageIndex=getRandomIndex();
    }
console.log(leftImageIndex,middleImageIndex,rightImageIndex);

console.log(products[leftImageIndex].name);
console.log(products[middleImageIndex].name);
console.log(products[rightImageIndex].name);

leftImageElement.src=products
[leftImageIndex].src;

middleImageElement.src=products
[middleImageIndex].src;

rightImageElement.src=products
[rightImageIndex].src;
console.log(products);
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
        paragraphItem.textContent=`${products[i].name}has ${products[i].votes}votes`
    }
}
leftImageElement.removeEventListener('click',handleUserClick);
middleImageElement.removeEventListener('click',handleUserClick);
rightImageElement.removeEventListener('click',handleUserClick);






























