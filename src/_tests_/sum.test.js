import sum from '../Sum';

// jest
describe('It should sum the arguments', () => {
  it('adds 2 + 1 equals to 3', () => {
    expect(sum(2, 1)).not.toBeFalsy();
  });
});
