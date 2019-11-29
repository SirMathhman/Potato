function Point(x, y) {
  return [x, y];
}

function getX(instance) {
  return instance[0];
}

function getY(instance) {
  return instance[1];
}

function distance(instance, other) {
  var xDelta = instance[0] - getX(other);
  var yDelta = instance[1] - getY(other);
  var xSquared = Math.pow(xDelta, 2);
  var ySquared = Math.pow(yDelta, 2);
  return Math.pow(xSquared + ySquared, 0.5);
}

function Origin() {
  return Point(0, 0);
}

var a = Point(3, 4);
var b = Origin();
var dist = distance(a, b);
console.log(dist);
// dist -> 5
