import Validator from '../Validator';

test('expected user validate', () => {
  const received = new Validator('Alex-007_man');
  expect(received.validateUsername()).toBeTruthy();
});

test('expected wrong validate cause first symbol is wrong', () => {
  const received = new Validator('!Alex-007_man');
  expect(received.validateUsername()).toBeFalsy();
});

test('expected wrong validate cause too much numbers', () => {
  const received = new Validator('Alex-7777_man');
  expect(received.validateUsername()).toBeFalsy();
});

test('expected wrong validate cause last symbol is wrong', () => {
  const received = new Validator('Alex-007_man7');
  expect(received.validateUsername()).toBeFalsy();
});

test('expected wrong validate cause unexpected symbol', () => {
  const received = new Validator('Alex-007_!_man');
  expect(received.validateUsername()).toBeFalsy();
});

test('expected wrong validate cause not support cyrillic', () => {
  const received = new Validator('Алексей-007_man');
  expect(received.validateUsername()).toBeFalsy();
});
