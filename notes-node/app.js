console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
 
const notes = require('./notes.js');
const argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body); 
  note === undefined ? 
    console.log('The note already exists') :
    console.log(`The note with the tile "${argv.title}" has been saved` )
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    debugger;
    note ?
      console.log(`Title: ${note.title} \nBody: ${note.body}`) : 
      console.log(`The note doesn't exist, right`);
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);            
} else {
    console.log('Command not found');
}

