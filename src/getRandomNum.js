

const generateRandomNum = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const getRandomNum = () => generateRandomNum(1, 1000);

export default getRandomNum;
