const Stack = require("./stack1");

//write me a test that my class is instacionaded
test("Stack is instanciated", () => {
  // test is a function
  const stack = new Stack(); // instanciate the class
  expect(stack).toBeInstanceOf(Stack); // expect is a function
});

//write me a test that the instance of my class has a property called items and it is an array and it is empty at the beginning
test("Stack has a property called items and it is an array and it is empty at the beginning", () => {
  const stack = new Stack();

  expect(stack.items).toEqual([]);
});

//write me a test that the instance of my class has a property called top and it is a number and it is -1 at the beginning
test("Stack has a property called top and it is a number and it is -1 at the beginning", () => {
  const stack = new Stack();

  expect(stack.top).toEqual(-1);
});

//write me a test that the instance of my class has a method called push
test("Stack has a method called push", () => {
  const stack = new Stack();

  expect(stack.push).toBeDefined();
});

//write me a test that the instance of my class has a method called pop and it doesnt return something
test("Stack has a method called pop", () => {
  const stack = new Stack();

  expect(stack.pop).toBeDefined();
  expect(stack.pop()).toBeUndefined();
});

//write me a test that the instance of my class has a method called size
test("Stack has a method called size", () => {
  const stack = new Stack();

  expect(stack.size).toBeDefined();
});

//write me a test that the instance of my class has a method called isEmpty
test("Stack has a method called isEmpty", () => {
  const stack = new Stack();

  expect(stack.isEmpty).toBeDefined();
});

//write me a test that the instance of my class has a method called isFull
test("Stack has a method called isFull", () => {
  const stack = new Stack();

  expect(stack.isFull).toBeDefined();
});

//write me a test that the instance of my class has a method called push that receives a parameter and it is a number
test("Stack has a method called push that receives a parameter and it is a number", () => {
  const stack = new Stack();

  expect(stack.push).toBeDefined();
  expect(stack.push).toBeInstanceOf(Function);
  expect(stack.push(1)).toBeUndefined();
  expect(stack.push("1")).toBeUndefined();
  expect(stack.push(true)).toBeUndefined();
  expect(stack.push({})).toBeUndefined();
  expect(stack.push([])).toBeUndefined();
  expect(stack.push(null)).toBeUndefined();
});

//write me a test that the instance of my class has a method called push that receives a parameter and it is a number and it is added to the items array
test("Stack has a method called push that receives a parameter and it is a number and it is added to the items array", () => {
  const stack = new Stack();

  expect(stack.push).toBeDefined();
  expect(stack.push).toBeInstanceOf(Function);
  expect(stack.push(1)).toBeUndefined();
  expect(stack.items).toEqual([1]);
});

//write me a test that if the function isEmpty is called and its returns true, a number grateer than -1 has to be on the propriete top
test("if the function isEmpty is called and its returns true, a number on top has to be -1", () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBeTruthy();
  expect(stack.top).toEqual(-1);
});
//write me a test that if the function isEmpty is called and its returns true, a number grateer than -1 has to be on the propriete top
test("if the function isEmpty is called and its returns false, a number on top has to be greater than -1", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);

  expect(stack.isEmpty()).toBeFalsy();
  expect(stack.top).toBeGreaterThan(-1);
});

//Write a test to check if pop() removes the top element from the stack.
test("if the function pop is called and its returns true, a number on top has to be -1", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop();
  expect(stack.top).toEqual(1);
});

//Write a test to check if pop() returns the removed element.
test("if the function pop is called and its returns true, a number on top has to be -1", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.pop()).toEqual(3);
});

//Write a test to check if pop() returns undefined if the stack is empty.
test("if the function pop is called and its returns true, a number on top has to be -1", () => {
  const stack = new Stack();
  expect(stack.pop()).toBeUndefined();
});

//Write a test to check if size() returns the number of elements in the stack.
test("if the function size is called and its returns true, a number on top has to be -1", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.size()).toEqual(3);
});

//Write a test to check if size() returns 0 if the stack is empty.
test("if the function size is called and its returns true, a number on top has to be -1", () => {
  const stack = new Stack();
  expect(stack.size()).toEqual(0);
});

//Add tests for specific edge cases, such as pushing and popping elements when the stack is empty or full.
test("if the function size is called and its returns true, a number on top has to be -1", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  expect(stack.isFull()).toBeTruthy();
});
