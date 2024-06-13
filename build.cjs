const { exec } = require("child_process");
const path = require("path");

// Get the directory of the current script
const scriptDir = path.resolve(__dirname);

exec("npm run build", { cwd: scriptDir }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing npm run build: ${error}`);
    process.exit(1);
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
