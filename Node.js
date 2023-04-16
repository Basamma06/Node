 
 //parentElement
 console.log(itemList.parentElement);
 itemList.parentElement.style.backgroundColor = '#f4f4f4';
 console.log(itemList.parentElement.parentElement.parentElement);
 //childnode
 console.log(itemList,childNodes);
 console.log(itemList.children);
 console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';
 //FirstChild
 console.log(itemList.firstChild);
 //FirstElementChild
 console.log(itemList.firstElementChild);
 itemList.firstElementChild.textContent = 'Hello 1';
  
 //lastchild
 console.log(itemList.lastElementChild);
 itemList.lastElementChild.textContent = 'Hello 4';

 //nextSibiling
 console.log(itemList.nextSibling);

 //nextElementSibiling
 console.log(itemList.nextElementSibling);
  
 //previousSibling
 console.log(itemList.previousSibling);

 //previousElementSibling
 console.log(itemList.previousElementSibling);
 itemList.previousElementSibling.style.color ='green';

//creatElement 
//create a div
var newDiv=document.createElement('div');

//add class

newDiv.className= 'hello';

//add id
newDiv.id ='hello1';

//add attr
newDiv.setAttribute('title','hello Div');
 
//creat text node
var newDivtext = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header.container');
var h1=document.querySelector('header h1');

 console.log(newDiv);

 newDiv.style.fontSize = '30px';

 container.insertBefore(newDiv,h1);
