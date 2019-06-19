
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);


class Animation {
  constructor(domElement) {
    this.domElement = domElement;
    

    this.domElement.addEventListener('mouseover', this.changeColor.bind(this));
    this.domElement.addEventListener('mouseout', this.backToColor.bind(this));
  }
  changeColor(){
    this.domElement.style.color='red';
    TweenMax.to('li',1,{scale:1.5,opacity:1})
  }
  backToColor(){
    this.domElement.style.color='black';
    TweenMax.to('li',1,{scale:1, opacity:0.5,});
  }
}


const list = document.querySelectorAll('li');
list.forEach(function(animated){
  return new Animation(animated);
})

// const list = document.querySelectorAll('li')


// list[0].addEventListener('mouseover', function(e){
//   list[0].style.color='red';
//   TweenMax.to('li',1,{scale:1.5, opacity: 0.5,});
//   e.preventDefault();
// })

// list[0].addEventListener('mouseout', function(e){
//   TweenMax.to('li',1,{scale:1, opacity:1,});
//   list[0].style.color = 'black';
//   e.preventDefault();
// })

// list[1].addEventListener('mouseover', function(e){
//   list[1].style.color='blue';
//   TweenMax.to('li',1,{scale:1.5});
//   e.preventDefault();
// })

// list[1].addEventListener('mouseout', function(e){
//   TweenMax.to('li',1,{scale:1});
//   list[1].style.color = 'black';
//   e.preventDefault();
// })

// list[2].addEventListener('mouseover', function(e){
//   list[2].style.color='yellow';
//   TweenMax.to('li',1,{scale:1.5});
//   e.preventDefault();
// })

// list[2].addEventListener('mouseout', function(e){
//   TweenMax.to('li',1,{scale:1});
//   list[2].style.color = 'black';
//   e.preventDefault();
// })
 