/**
 * Let's make a game 🕹
 */
type Directions = 'up' | 'down' | 'left' | 'right';

type Positions = {
  x: number;
  y: number;
};
let position: Positions = {
  x: 0,
  y: 0,
};
function move(direction: Directions): Positions {
  let x: number = 0;
  let y: number = 0;
  switch (direction) {
    case 'up':
      position.y += 1;
      return { x: x, y: y };
    case 'down':
      position.y -= 1;
      return { x: x, y: y };
    case 'left':
      position.x -= 1;
      return { x: x, y: y };
    case 'right':
      position.x += 1;
      return { x: x, y: y };
    default:
      throw new Error('unkowm direction');
  }
}
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
