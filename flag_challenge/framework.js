const canvas = document.getElementById('screen');
const r = canvas.parentElement.getBoundingClientRect();
canvas.setAttribute('width', r.width - 2);
canvas.setAttribute('height', r.height - 2);

const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const RED = '#b31942';
const WHITE = '#ffffff';
const BLUE = '#0a3161';

const drawFilledRect = (x, y, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

const drawStar = (x, y, d, color) => {

  const makeStar = (d) => {
    const theta = Math.PI * 2 / 5;
    const r = d / 2;
    const r2 = 1.25 * r * Math.cos(theta) / Math.cos(theta / 2);

    const points = [];
    const offsetAngle = Math.PI / 2;
    for (let i = 0; i < 5; i++) {
      const a = i * theta - offsetAngle;
      points.push(pointOnCircle(r, a));
      points.push(pointOnCircle(r2, a + theta / 2));
    }
    return points;
  }

  const pointOnCircle = (r, a) => {
    return { x: x + Math.cos(a) * r, y: y + Math.sin(a) * r };
  }

  const points = makeStar(d);

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.fill();
};

drawFilledRect(0, 0, width, height, '#888888');
