var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply (num1, num2){
    var result = (num1 * num2);
    return result;
}

var m1 = multiply(5, 5);
console.log('m1 :' + m1);
var m2 = multiply(2, 3);
console.log('m1 :' + m2);

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Firefox_Logo.png') {
      myImage.setAttribute ('src','images/Google_Logo.png');
    } else {
      myImage.setAttribute ('src','images/Firefox_Logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
    //$().DataTable();
}