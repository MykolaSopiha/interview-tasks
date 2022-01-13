((EventEmitter) => {

  const ee = new EventEmitter();

  /**
   * Task:
   * 
   * Add logging for `ee.on(task, cb)` method.
   * Log `task` and `cb` in console.
   */
  
  //...your code here...

  ee.on("foo", (data) => console.log(data));
  ee.on("bar", (data) => console.log(data));

  ee.emit("foo", 111);
  ee.emit("bar", 222);

})(require("events"));


/**
 * Answer:
 */
// const oldOn = ee.on;
// ee.on = function (task, cb) {
//   console.log(task, cb);
//   oldOn.apply(this, [task, cb]);
// };