function receivesAFunction(callback) {
callback()
}

function returnsANamedFunction() {
  function ANamedFunction() {
    return "Jeff";
  }
  return ANamedFunction;
} 

function returnsAnAnonymousFunction() {
  return function() {
    return "Hello,World!";
  }
}