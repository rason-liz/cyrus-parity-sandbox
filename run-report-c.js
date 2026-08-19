// Runs a shell report for the given directory, used by the admin dashboard.
const { exec } = require('child_process');

function runDirectoryReport(userSuppliedPath, callback) {
  exec('ls -la ' + userSuppliedPath, (err, stdout) => {
    callback(err, stdout);
  });
}

module.exports = { runDirectoryReport };
