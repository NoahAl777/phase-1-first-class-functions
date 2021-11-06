function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function functionWithAName() {
    console.log("Wow!")
  };
}

function returnsAnAnonymousFunction() {
  return () => console.log("anonymous function");
}