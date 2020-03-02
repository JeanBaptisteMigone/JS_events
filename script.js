// 1 - Click on footer

var footer = document.getElementsByTagName('footer')[0];
var i=1;

footer.addEventListener('click', function(){ 
  console.log(`clique numéro : ${i}`);
  i+=1
});


// 2 - Hamburger menu

var navbarToggler = document.getElementsByClassName('navbar-toggler')[0];
var navbarHeader = document.getElementById('navbarHeader');

navbarToggler.addEventListener('click', function(){
  navbarHeader.classList.toggle('collapse');
});


// 3 - Edit => 1st card text in red

var editBtn1 = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];

editBtn1.addEventListener('click', function(){
  document.getElementsByClassName('card-text')[0].style.color = 'red';
});


// 4 - Edit => 2nd card text in green

var editBtn2 = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1];
var secondCard = document.getElementsByClassName('card-text')[1];

editBtn2.addEventListener('click', function(){
  if (secondCard.style.color === 'green'){
    secondCard.style.color = '' ;
    }
  else {
    secondCard.style.color = 'green';
  }
});


// 5 - Double click on navbar => Bootstrap disappears

var navbar = document.querySelector('.navbar');
var boostrapCdn = document.getElementsByTagName('link')[0];

navbar.addEventListener('dblclick', function(){
  if(boostrapCdn.disabled == false){
    boostrapCdn.disabled = true;
  }
  else {
    boostrapCdn.disabled = false;
  }
});


// 6 - Hover on view button => card gets smaller

const viewBtn = document.getElementsByClassName('btn btn-sm btn-success');
const card = document.getElementsByClassName('card');
const cardText = document.getElementsByClassName('card-text');


for(let a = 0; a < viewBtn.length; a++){
  viewBtn[a].addEventListener("mouseover", function(){
    cardText[a].classList.toggle('collapse');
    if (card[a].style.width === '20%'){
      card[a].style.width = '100%';
    }
    else {
      card[a].style.width = '20%';
    }
  });
}


// 7 - click on top grey button '==>' => last card first card

var rightBtn = document.getElementsByClassName('btn btn-secondary my-2')[0];
const colMd = document.getElementsByClassName('col-md-4');
var parentNode = colMd[0].parentNode;

rightBtn.addEventListener('click', function(){
  parentNode.insertBefore(colMd[5], colMd[0]);
})


// 8 - click on top blue button '<==' => first card last card

var leftBtn = document.getElementsByClassName('btn btn-primary my-2')[0];

leftBtn.addEventListener('click', function(e){
  e.preventDefault();
  parentNode.insertBefore(colMd[0], colMd[6])
})


// 9 - 

var jsEventsBtn = document.getElementsByTagName('strong')[0];

document.addEventListener("keydown", function(e){
  for(let j = 0; j < colMd.length; j++){
    if(e.key == "a"){
      colMd[j].className = 'col-md-2 float-left';
      document.getElementsByClassName('album py-5 bg-light')[0].classList.add('float-left')
    }
    else if(e.key == "y"){
      colMd[j].className = 'col-md-2'
    }
    else if(e.key == "p"){
      colMd[j].className = 'col-md-2 float-right'
      document.getElementsByClassName('album py-5 bg-light')[0].classList.add('float-right')
    }
    else if(e.key == "b"){
      colMd[j].className = 'col-md-4'
    };
  };
})