const router = require("express").Router();
const {
    notes
} = require('../../db/db.json');
const {
    makeNewNote,
    deleteNote
} = require('../../lib/notesFunc.js');


router.get('/notes', (req, res) => {
    let result = notes;
    res.json(result);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = makeNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})


module.exports = router;