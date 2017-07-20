import readlineSync from 'readline-sync';
import getRandomNum from './getRandomNum';
import isEven from './isEven';

export const helloUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log('Hello ' + userName + '!');
};

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const correctAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

export const mainEven = () => {
  const userName = getName();
  const iter = (user, times) => {
    const number = getRandomNum();
    console.log('Question: ' + String(number));
    const answer = readlineSync.question('Your answer: ');
    if (times === 0 && correctAnswer(number) === answer) {
      return console.log('Correct!  \nCongratulations, ' + user + '!');
    } else if (correctAnswer(number) === answer) {
      console.log('Correct!');
      return iter(user, times - 1);
    }
    const response = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(number)}'.\nLet's try again, ${user}!`;
    return console.log(response);
  };
  return iter(userName, 2);
};
