const express = require('express');
const path = require('path');
const app = express();
let {PythonShell} = require('python-shell')
// Serve static files....
app.use(express.static(__dirname + '/dist/front'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/front/index.html'));
});

let options = {
  args: ['5000']
};
PythonShell.run('server/uniopt-server/main.py', options, null, function (err) {
  if (err) throw err;
  console.log('finished');
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);

console.log('console listen');
