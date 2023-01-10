// Traversing the nodes

var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//ChildNode
// console.log(itemList.childNodes)

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow'

// firstChild
// console.log(itemList.firstChild)

  
//   FirstElementChild

// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent='Hello1'

// LastChild

// console.log(itemList.lastChild)

// LastElementChild
// console.log(itemList.lastElementChild)

// itemList.lastElementChild.textContent='Hello4'


// NextSibling
// console.log(itemList.nextSibling)

// nextSiblingElement

// console.log(itemList.nextSiblingElement)


// PreviousSibling

// console.log(itemList.previousSibling)

// previousSiblingElement

// console.log(itemList.previousElementSibling)



// CreateElement

// Create a div

var newDiv = document.createElement('div');

console.log(newDiv)


// Add class

newDiv.className = 'Hell0';

// Add id

newDiv.id = 'hello1'


// Add attr

newDiv.setAttribute('title', 'Hello div')
console.log(newDiv)

// Create text node
var newDivText = document.createTextNode('Hello world');


// Add text to div

newDiv.appendChild(newDivText);

var container = document.querySelector('header  .container');
var h1 = document.querySelector('header h1')

console.log(newDiv);
newDiv.style.fontSize='30px'

container.insertBefore(newDiv, h1)
var newDivText = document.createTextNode('Hello world');


 






 