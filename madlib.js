const studentName = prompt("What is your name: ");
const favSubject = prompt ("Your is your favorite subject: ");

function readStory() {
  let finalString = "";

finalString = "My name is " + studentName + " and my favorite subject is " + favSubject;
 return finalString;
}

console.log( readStory());