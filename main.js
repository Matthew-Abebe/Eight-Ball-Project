let userName = 'Matthew';
userName ? console.log(`Hello, ${userName}!`) : consle.log('Hello!');
let userQuestion = 'Will I buy a new car?';
console.log(`${userName} asked ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'Outlook not so good';
    break;
  case 1:
    eightBall = 'My sources say no';
    break;
  case 2:
    eightBall = 'Do not count on it';
    break;
  case 3:
    eightBall = 'Signs point to yes';
    break;
  case 4:
    eightBall = 'It is certain'
    break;
  case 5:
    eightBall = 'It is decidedly so';
    break;
  case 6:
    eightBall = 'Reply hazy try again';
    break;
  case 7:
    eightBall = 'Cannot predict now'
    break;
}
// if (randomNumber === 0) {
//   eightBall = 'Outlook not so good';
// } else if
//   (randomNumber === 1) {
//     eightBall = 'My soures say no';
// } else if
//   (randomNumber === 2) {
//     eightBall = 'Do not count on it';
// } else if
//   (randomNumber === 3) {
//     eightBall = 'Signs point to yes';
// } else if 
//   (randomNumber === 4) {
//     eightBall = 'It is certain';
// } else if 
//   (randomNumber === 5) {
//     eightBall = 'It is decidedly so';
// } else if
//   (randomNumber === 6) {
//     eightBall = 'Reply hazy try again';
// } else if
//   (randomNumber === 7) {
//     eightBall = 'Cannot predict now';
//   }
console.log(`The eight ball answered: ${eightBall}`);

  

