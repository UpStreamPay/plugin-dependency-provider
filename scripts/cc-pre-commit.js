// Set the new version into the pom.xml file
var exec = require('child_process').execSync;

exports.preCommit = (props) => {
  exec("awk -i inplace '/<version>/ && !f {sub(/<version>.*<\\/version>/,\"<version>" + props.version + "<\\/version>\"); f=1} 1' pom.xml");
}
