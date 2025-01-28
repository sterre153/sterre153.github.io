#!/usr/bin/env node

const fs = require('fs');
const Handlebars = require('handlebars');

const source = fs.readFileSync('./template.html', { encoding: 'utf8' });
const template = Handlebars.compile(source);

const albums = require('./pictures/index.json');
const output = template({ albums });

fs.writeFileSync('./index.html', output);
