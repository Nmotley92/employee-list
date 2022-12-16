const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Intern', () => {
  it('should set name, id, email, and school when instantiated', () => {
    const intern = new Intern('Alice Smith', 4, 'alice.smith@company.com', 'University of Technology');
    expect(intern.name).toEqual('Alice Smith');
    expect(intern.id).toEqual(4);
    expect(intern.email).toEqual('alice.smith@company.com');
    expect(intern.school).toEqual('University of Technology');
  });

  it('should return the school when getSchool is called', () => {
    const intern = new Intern('Alice Smith', 4, 'alice.smith@company.com', 'University of Technology');
    expect(intern.getSchool()).toEqual('University of Technology');
  });

  it('should return "Intern" when getRole is called', () => {
    const intern = new Intern('Alice Smith', 4, 'alice.smith@company.com', 'University of Technology');
    expect(intern.getRole()).toEqual('Intern');
  });

  it('should have all the properties and methods of the Employee class', () => {
    const intern = new Intern('Alice Smith', 4, 'alice.smith@company.com', 'University of Technology');
    expect(intern).toHaveProperty('getName');
    expect(intern).toHaveProperty('getId');
    expect(intern).toHaveProperty('getEmail');
    expect(intern).toHaveProperty('getRole');
  });
});