const fs = require("fs");
const path = require("path");

function makeNewNote(note, notes) { 
    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )
    return note;
};

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

module.exports = {
    makeNewNote,
    deleteNote
};