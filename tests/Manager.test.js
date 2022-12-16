const Manger = require('../lib/manager');
const Employee= require('../lib/employee');

describe('Manager', () => {
  it('Should create an Emplyee subclass called Manager with an office number as a property. ', () => {
    const manager = new Manger(1);
    expect(manager.offic).toEqual(1);
    
  });

  it('getRole() should return Manager', () => {
    const manager = new Manger(1);

    // Letter was not originally visible
    expect(manager.getRole()).toEqual("Manager");
  });

});