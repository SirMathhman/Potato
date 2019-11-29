function Optional(value) {
  return [value];
}

function Optional_get(instance){
  return instance[0];
}

function Optional_isEmpty(instance) {
  return instance[0] === null;
}

function Optional_isPresent(instance) {
  return !Optional_isEmpty(instance);
}

function Optional_ifPresent(instance, action) {
  if(Optional_isPresent(instance)) {
    return action(instance[0]);
  }
  return Optional_isPresent(instance[0]);
}

function Optional_map(instance, mapper) {
  if(Optional_isPresent(instance)) {
    return Optional(mapper(instance[0]));
  } else {
    return EmptyOptional();
  }
}

function Optional_flatMap(instance, mapper) {
  if(Optional_isPresent(instance)) {
    return mapper(instance[0]);
  } else {
    return EmptyOptional();
  }
}

function EmptyOptional(){
  return Optional(null);
}
