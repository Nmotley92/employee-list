const Intern = require('../lib/intern');
const Employee= require('../lib/employee');

describe('Intern', () => {
  it('Should create an Employee subclass called Intern with a school name as a property. ', () => {
    const intern=new Intern("school");

    expect(intern.school).toEqual("school");
    
  });

  it('getSchool() should return the interns school name', () => {
    const intern=new Intern("school");
   expect(intern.getSchool().toEqual("school"));
  });

  it('getRole() should return Engineer', () => {
    const engineer = new Engineer("github");

    // Letter was not originally visible
    expect(engineer.getRole()).toEqual("Engineer");
  });

});