
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Manager', () => {
  it('should set name, id, email, and officeNumber when instantiated', () => {
    const manager = new Manager('Jane Doe', 2, 'jane.doe@company.com', 123);
    expect(manager.name).toEqual('Jane Doe');
    expect(manager.id).toEqual(2);
    expect(manager.email).toEqual('jane.doe@company.com');
    expect(manager.officeNumber).toEqual(123);
  });

  it('should return "Manager" when getRole is called', () => {
    const manager = new Manager('Jane Doe', 2, 'jane.doe@company.com', 123);
    expect(manager.getRole()).toEqual('Manager');
  });

  it('should have all the properties and methods of the Employee class', () => {
    const manager = new Manager('Jane Doe', 2, 'jane.doe@company.com', 123);
    expect(manager).toHaveProperty('getName');
    expect(manager).toHaveProperty('getId');
    expect(manager).toHaveProperty('getEmail');
    expect(manager).toHaveProperty('getRole');
  });
});