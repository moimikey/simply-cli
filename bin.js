const meow = require('meow')
const simply = require('./')

const cli = meow(`
  Usage
  $ simply [command]

  Commands
  Options

  Examples
  $ simply
`, {
  flags: {}
})

switch(cli.input[0]) {
  case undefined:
    return cli.showHelp()
  default:
    process.stdin.pipe(simply(cli.input[0])).pipe(process.stdout)
}
