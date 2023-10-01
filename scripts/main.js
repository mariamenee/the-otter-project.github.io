const text = document.querySelector(" .text");
const image = document.querySelector(" .image");

window.addEventListener("scroll",appearOnScroll);

function appearOnScroll(){
    let textPosition = text.getBoundingClientRect().top ;
    let windowHeight = window.innerHeight/1.5;
    if(windowHeight>textPosition){
        text.classList.remove("push-left");
        image.classList.remove("push-right");
    }else{
      text.classList.add("push-left");
      image.classList.add("push-right");
    }
}




const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }  

  myButton.onclick = () => {
    setUserName();
  };  