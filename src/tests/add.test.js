const add =   (a,b)  => a +b ;
const greet = (name) => `Hello ${name}!`;


test('should add two numbers', () => {
  const result = add(7,3);
  expect(result).toBe(10);
}); 

test('should be hello for given name', () => {
  const result = greet('Mark');
  expect(result).toBe('Hello Mark!');
});