//Helpers
function Array_indexOf(array, value){
  for (var i = 0; i < array.length; i++) {
    if(array[i] === value){
      return i;
    }
  }
  return -1;
}

//Internal
function write(value){
  write_native(value);
}

//Vehicle
function Vehicle(uuid) {
  return [uuid];
}
const Vehicle_impl = [2];
const Vehicle_getName_impl = [2];
function Vehicle_getName(instance){
  const index = Array_indexOf(Vehicle_impl, instance[0]);
  Vehicle_getName_impl[index](instance);
}

//Car
function Car() {
  return Vehicle(4820573820);
}
function Car_getName(instance){
  return "Lamborghini Huracan";
}
Vehicle_impl[0] = 4820573820;
Vehicle_getName_impl[0] = Car_getName;

//Boat
function Boat(){
  return Vehicle(1028478018);
}
function Boat_getName(instance){
  return "My Nice Yacht";
}
Vehicle_impl[1] = 1028478018;
Vehicle_getName_impl[1] = Boat_getName;

//Content
function getAVehicle() {
  if(Math.random() > 0.5){
    return Car();
  } else {
    return Boat();
  }
}

const vehicle = getAVehicle();
const vehicleName = Vehicle_getName(vehicle);
write(vehicleName);
