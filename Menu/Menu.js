/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const header = document.querySelector('.header');
menuItems.forEach((list)=>{
  header.appendChild(menu(list))
})

function menu(array){
  const menuBar = document.createElement('div');
  const list = document.createElement('ul');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');
  const listItem4 = document.createElement('li');
  const listItem5 = document.createElement('li');
  const listItem6 = document.createElement('li');

  menuBar.appendChild(list);
  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);
  list.appendChild(listItem4);
  list.appendChild(listItem5);
  list.appendChild(listItem6);

  menuBar.classList.add('menu');

  listItem1.textContent = array[0];
  listItem2.textContent = array[1];
  listItem3.textContent = array[2];
  listItem4.textContent = array[3];
  listItem5.textContent = array[4];
  listItem6.textContent = array[5];

  const buttonMenu = document.querySelector('.menu-button');
  buttonMenu.addEventListener('click', event=>{
    menuBar.classList.toggle('menu--open');
  });

  return menuBar;
}