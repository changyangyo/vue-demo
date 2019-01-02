var myHeading = document.querySelector("h1");
myHeading.textContent = 'hello world !';
var var1 = 11;
var var2 = true;
var var3 = [1 , 3 ,'e'];
/*if (var1 === 10){
    myHeading.textContent = '你好！';
}else if (var2){
    myHeading.textContent ='结果：'+multiply(10,10);
}

function multiply( var1, var2){
    var result = var1 * var2;
    return result;
}*/

myHeading.onclick = function (){
    alert('Ouch! Stop poking me!')
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');

myButton.onclick = function (){
    if(!localStorage.getItem('name')){
        setUserName();
    }else{
        myHeading.textContent = 'Mozilla is cool, ' + localStorage.getItem('name');
    }
    
}
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }