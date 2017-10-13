#!/usr/bin/env node

const path = require('path')

const formatter = 'eslint-formatter-pretty'

if (!process.argv.includes('--format')) {
  process.argv.push('--format', path.join(__dirname, 'node_modules', formatter))
}

if (!process.argv.includes('--fix')) {
  process.argv.push('--fix')
}

require('eslint/bin/eslint')
