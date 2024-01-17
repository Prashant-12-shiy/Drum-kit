const btns = document.querySelectorAll(".drum");

const playGame = (userChoice) => {
 makeSound(userChoice);
 buttonAnimation(userChoice);
};


document.addEventListener("keydown", (ev) => {
 makeSound(ev.key);
 buttonAnimation(ev.key);
});

function makeSound(key) {
 switch (key) {
  case "w":
   const kick = new Audio("./sounds/kick-bass.mp3");
   kick.play();
   break;
  case "a":
   const tom1 = new Audio("sounds/tom-1.mp3");
   tom1.play();
   break;
   case "s":
   const tom2 = new Audio("sounds/tom-2.mp3");
   tom2.play();
   break;
   case "d":
   const tom3 = new Audio("sounds/tom-3.mp3");
   tom3.play();
   break;
   case "j":
   const tom4 = new Audio("sounds/tom-4.mp3");
   tom4.play();
   break;
   case "k":
   const crash = new Audio("sounds/crash.mp3");
   crash.play();
   break;
   case "l":
   const snare = new Audio("sounds/snare.mp3");
   snare.play();
   break;
  default: console.log(userChoice)
   break;
 }
}
 


btns.forEach((drum) => {
 drum.addEventListener("click", () => {
  const userChoice = drum.innerText;
  playGame(userChoice);
 });
});

function buttonAnimation(currentKey){
  const activeButton = document.querySelector("."+ currentKey);
   
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed")
  }, 100);

}