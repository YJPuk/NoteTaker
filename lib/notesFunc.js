// Dependancies
const fs = require("fs");
const path = require("path");

//Function to add new notes to array by push and saved to db.json
function makeNewNote(note, notes) { 
    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )
    return note;
};


//Function that deletes specific notes by splice and then rewrites the db notes array
function deleteNote(notes, id) {
    let deleteID = parseInt(id);
    notes.splice(deleteID, 1);
 
    for (let i = deleteID; i < notes.length; i++) {
        notes[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes
        }, null, 2)
    )
};

//Exports save and delete notes
module.exports = {
    makeNewNote,
    deleteNote
};