const Employee = require('../lib/employee');

describe('Employee', () => {
  it('Should create an object with a name, an id number, and email if provided with valid arguments ', () => {
    const employee= new Employee("Jack", 1, "Jack@gmail.com");
    expect(employee.name).toEqual("Jack");
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual("Jack@gmail.com");
  });

  it('getName() should return the employee name', () => {
   const employee= new (Employee)("John", 2, "john@gmail.com");
   expect(employee.getName()).toEqual("John");
  });

  it('getId() should return employee id number', () => {
    const employee= new (Employee)("John", 2, "john@gmail.com");
    expect(employee.getId()).toEqual(2);
  });

  it('getEmail() should retun employee email', () => {
    const employee= new (Employee)("John", 2, "john@gmail.com");
    expect(employee.getEmail()).toEqual("john@gmail.com");
  });
  it('getRole() should retun Employee', () => {
    const employee= new (Employee)("John", 2, "john@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
  });
});

