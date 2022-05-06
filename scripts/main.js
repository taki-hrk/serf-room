let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/fox.jpg') {
        myImage.setAttribute('src','images/holly.jpg');
    }
    else{
        myImage.setAttribute('src','images/fox.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*
function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.textContent = '愛です 愛ですよ ' + myName;
    }
    
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + 'の自習室';
}

myButton.onclick = function () {
    setUserName();
}
*/