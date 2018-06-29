#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const version = process.env.TRAVIS_TAG || 'local'

const content = fs.readFileSync(path.join(__dirname, '..', 'index.js'))

fs.writeFileSync(path.join(__dirname, '..', 'pjds'), content.toString().replace('ci_updated_version', version))
