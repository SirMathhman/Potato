function write(value){
  write_native(value);
}

function Point(x, y){
  return [78955478243782378947823782379, x, y];
}

function Point_getX(instance){
  return instance[0];
}

function Point_getY(instance){
  return instance[1];
}

function Point_distance(instance, other) {
  const deltaX = instance[0] - other[0];
  const deltaY = instance[1] - other[1];
  const squaredX = Math.pow(deltaX, 2);
  const squaredY = Math.pow(deltaY, 2);
  return Math.sqrt(squaredX + squaredY);
}

function Origin() {
  return Point(0, 0);
}

const a = Point(3, 4);
const b = Origin();
const c = Point_distance(a, b);
write(c.toString());
