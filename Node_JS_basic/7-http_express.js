const express = require('express');
const fs = require('fs');

function buildStudentsReport(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, fileContent) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = fileContent.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const fields = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      });

      const report = [`Number of students: ${students.length}`];

      Object.keys(fields).forEach((field) => {
        report.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });

      resolve(report.join('\n'));
    });
  });
}

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  buildStudentsReport(process.argv[2])
    .then((report) => {
      response.status(200).send(`This is the list of our students\n${report}`);
    })
    .catch((error) => {
      response.status(200).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
