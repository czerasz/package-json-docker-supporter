const path = require('path')
const fs = require('fs')

const arguments = process.argv.slice(2)

if (arguments[0] === '--help' || arguments[0] === '-h') {
  const usage = `
Usage: pjds [options]

Options:

  -V, --version    output the version number
  -h, --help       output usage information
`.trim()

  console.log(usage);
  process.exit(0)
} else if (arguments[0] === '--version' || arguments[0] === '-v') {
  console.log('ci_updated_version');
  process.exit(0)
}

const packageJSONPath = path.join(process.cwd(), 'package.json')
const packageLockJSONPath = path.join(process.cwd(), 'package-lock.json')
const packageJSON = require(packageJSONPath)
const packageLockJSON = require(packageLockJSONPath)

const newPackageJSON = {
  name: packageJSON.name,
  version: '0.1.0-irrelevant',
  description: 'irrelevant',
  dependencies: packageJSON.dependencies,
  devDependencies: packageJSON.devDependencies
}
const newPackageLockJSON = Object.assign(packageLockJSON, {
  version: '0.1.0-irrelevant',
})

fs.writeFileSync(packageJSONPath, JSON.stringify(newPackageJSON))
fs.writeFileSync(packageLockJSONPath, JSON.stringify(newPackageLockJSON))
