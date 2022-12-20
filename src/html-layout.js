const fs = require('fs');
const renderHTML = (team) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../dist/style.css" />
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
    fs.writeFile(`./dist/index.html`, html, (err)=> 
    err
      ?console.error(err)
      : console.log('HTML file generated successfully!'));
    
  }

  module.exports= renderHTML;