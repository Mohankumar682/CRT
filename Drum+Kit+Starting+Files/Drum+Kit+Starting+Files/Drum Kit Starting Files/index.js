let Keys = document.querySelectorAll('button');

for (let i = 0; i < Keys.length; i++) {
  Keys[i].addEventListener('click', () => {
    let key = Keys[i].textContent;
    makeSound(key);
    buttonAnimation(key); 
  });
}

document.addEventListener("keydown", function(event) {
  let key = event.key;
  // alert(key);
  makeSound(key);
  buttonAnimation(key); 
});
document.addEventListener("keydown", function(event) {
  alert(event.key);
  makeSound(event.key); 
});

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100); 
  }
}

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log(key);
  }
}
