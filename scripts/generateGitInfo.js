const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  const lastCommit = execSync('git rev-parse --short HEAD').toString().trim();
  const lastCommitDate = execSync('git log -1 --format=%cd --date=format:"%Y-%m-%d %H:%M"').toString().trim();

  const gitInfo = {
    branch,
    lastCommit,
    lastCommitDate,
    buildTime: new Date().toISOString(),
  };

  // Create the public directory if it doesn't exist
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Write the git info to a JSON file
  fs.writeFileSync(
    path.join(publicDir, 'git-info.json'),
    JSON.stringify(gitInfo, null, 2)
  );

  console.log('Git info generated successfully');
} catch (error) {
  console.error('Error generating git info:', error);
  // Write empty git info to prevent build failures
  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'git-info.json'),
    JSON.stringify({
      branch: 'unknown',
      lastCommit: 'unknown',
      lastCommitDate: 'unknown',
      buildTime: new Date().toISOString(),
    }, null, 2)
  );
} 