#!/usr/bin/env node

const reader       = require('./read.js');

const pathFile     = process.argv[2];

const options      = process.argv[3];

reader.readFile(pathFile, options);


