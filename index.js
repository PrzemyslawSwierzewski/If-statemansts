let userName = "Przemek";
userName ? 
  console.log(`Good morning, ${userName}`) 
  :console.log("Good morning");

let userQuestion = "Could I be a programmer?";
userQuestion ? 
  console.log(`${userName} asked for ${userQuestion}`)
  :console.log("Where is your question?"); 

let randomNumber = Math.floor(Math.random() * 8);


let kulazgadula = '';
kulazgadula = randomNumber;
if (userQuestion.length>3){
switch (kulazgadula){
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Signs point to yes');
  default:
    console.log('') 
}}else{
  console.log("No question no answer!")
}
