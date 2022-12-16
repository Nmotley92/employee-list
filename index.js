const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');


const team = [];

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's employee ID?"
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email address?"
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?"
    }
  ]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    team.push(manager);
    return promptMenu();
  });
}

const promptEngineer = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?"
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
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
        message: "What is the intern's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?"
      },
      {
        type: 'input',
        name: 'school',
        message: "What school is the intern attending?"
      }
    ]).then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      team.push(intern);
      return promptMenu();
    });
  }
const renderHTML = (team) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="./dist/style.css" />
    <title>My Team</title>
      
    </head>
    <header>
        <h1>My Team</h1>
    </header>
    <body>
        <div class="container">

      ${team.map(member => {
        return `
          <div class="card">
            <div class="card-header">
                <h3>${member.name}</h3>
                <p>${member.getRole()}</p>
            </div>
            <p>ID: ${member.id}</p>
            <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
            ${member.getRole() === 'Manager' ? `<p>Office number: ${member.officeNumber}</p>` : ''}
            ${member.getRole() === 'Engineer' ? `<p>GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></p>` : ''}
            ${member.getRole() === 'Intern' ? `<p>School: ${member.school}</p>` : ''}
          </div>
          
        `
      }).join('')}
      </div>
    </body>
    </html>
    `;
    fs.writeFileSync('index.html', html);
    console.log('HTML file generated successfully!');
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


