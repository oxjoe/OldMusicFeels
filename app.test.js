//npm install babel-core@bridge
//npm install babel-jest

// ask for help via hackhands
let module = require('./app')
let list = module.list
test('Head node', () => {
  expect(list.getHeadNode().getData()).toBe('{noteName: "A"}')
})