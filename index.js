const intoStream = require('into-stream')
const duplexify = require('duplexify')

module.exports = function (command) {
  const out = intoStream(command + '\n')
  return duplexify(process.stdout, out)
}
