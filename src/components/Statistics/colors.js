export function getColor() {
  const getRandomNumber = limit => {
    return Math.floor(Math.random() * limit);
  };

  const i = getRandomNumber(360);

  const color = `hsl(${i}deg, 100%, 90%)`;
  return color;
}
