const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const renderHTML = require('./src/html-layout');

// stores the team members made so far
const team = [];
// stores Id numbers that are being used
idNumbersInUse=[];

// strats the Manager prompts
const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      },
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's employee ID?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
        return 'Please enter a positive number greater than zero.';
      },
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email address?",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return 'Please enter a valid email address.';
      },
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
        return 'Please enter a positive number greater than zero.';
      },
    }
  ]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    team.push(manager);
    idNumbersInUse.push(answers.id);
    return promptMenu();
  });
}

const promptEngineer = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Please enter at least one character.';
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID?",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            if (idNumbersInUse.includes(answer)) {
              return 'This ID is already taken. Please enter a different number.';
            } else {
              return true;
            }
          }
          return 'Please enter a positive number greater than zero.';
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return 'Please enter a valid email address.';
        },
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Please enter at least one character.';
        },
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      team.push(engineer);
      return promptMenu();
    });
  }

  const promptIntern = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Please enter at least one character.';
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID?",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            if (idNumbersInUse.includes(answer)) {
              return 'This ID is already taken. Please enter a different number.';
            } else {
              return true;
            }
          }
          return 'Please enter a positive number greater than zero.';
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return 'Please enter a valid email address.';
        },
      },
      {
        type: 'input',
        name: 'school',
        message: "What school is the intern attending?",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Please enter at least one character.';
        },
      }
    ]).then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      team.push(intern);
      return promptMenu();
    });
  }

const promptMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['Add an engineer', 'Add an intern', 'Finish Building Team'],
    },
])
.then(answers => {
    console.log(answers.choice)
    if(answers.choice==='Add an engineer'){
        return promptEngineer();
         
    }

    if(answers.choice==='Add an intern'){
        return promptIntern();
    }
    return renderHTML(team);
    
    
});
}
 promptManager();


