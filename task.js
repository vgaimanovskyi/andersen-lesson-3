// task 1
Array.prototype.myFilter = function (callback, thisArg) {
  const context = this;
  const result = [];
  for (let i = 0; i < context.length; i++) {
    if (i in context) {
      let val = context[i];
      if (callback.call(thisArg, val, i, context)) {
        result.push(val);
      }
    }
  }
  return result;
}


// task 2 :(
const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100()
setTimeout(debounceLog100, 200);

function createDebounceFunction(fun, ms) {

  return function () {
    setTimeout(fun, ms)
  }
}
