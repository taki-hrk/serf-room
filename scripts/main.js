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