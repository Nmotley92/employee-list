const Engineer = require('../lib/engineer');
const Employee= require('../lib/employee');

describe('Engineer', () => {
  it('Should create an Employee subclass with a github username property. ', () => {
    const engineer = new Engineer("github");
    expect(engineer.github).toEqual("github");
    
  });

  it('getGitHub() should return the engineers github', () => {
    const engineer = new Engineer("github");
   expect(engineer.getGitHub().toEqual("github"));
  });

  it('getRole() should return Engineer', () => {
    const engineer = new Engineer("github");

    // Letter was not originally visible
    expect(engineer.getRole()).toEqual("Engineer");
  });

});