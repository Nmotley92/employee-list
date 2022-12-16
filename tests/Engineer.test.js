const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  it('should set name, id, email, and github when instantiated', () => {
    const engineer = new Engineer('Bob Smith', 3, 'bob.smith@company.com', 'bobsmith');
    expect(engineer.name).toEqual('Bob Smith');
    expect(engineer.id).toEqual(3);
    expect(engineer.email).toEqual('bob.smith@company.com');
    expect(engineer.github).toEqual('bobsmith');
  });

  it('should return the github when getGithub is called', () => {
    const engineer = new Engineer('Bob Smith', 3, 'bob.smith@company.com', 'bobsmith');
    expect(engineer.getGithub()).toEqual('bobsmith');
  });

  it('should return "Engineer" when getRole is called', () => {
    const engineer = new Engineer('Bob Smith', 3, 'bob.smith@company.com', 'bobsmith');
    expect(engineer.getRole()).toEqual('Engineer');
  });

  it('should have all the properties and methods of the Employee class', () => {
    const engineer = new Engineer('Bob Smith', 3, 'bob.smith@company.com', 'bobsmith');
    expect(engineer).toHaveProperty('getName');
    expect(engineer).toHaveProperty('getId');
    expect(engineer).toHaveProperty('getEmail');
    expect(engineer).toHaveProperty('getRole');
  });
});