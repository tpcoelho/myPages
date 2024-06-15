const fs = require('fs');

const reportsDir = './Reports';

// Read the list of JSON files in the Reports directory
fs.readdir(reportsDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter out non-JSON files
  const jsonFiles = files.filter((file) => file.endsWith('.json'));

  // Write the list of JSON files to index.json
  fs.writeFile(
    `${reportsDir}/index.json`,
    JSON.stringify(jsonFiles),
    (err) => {
      if (err) {
        console.error('Error writing index.json:', err);
        return;
      }
      console.log('index.json generated successfully.');
    }
  );
});
