const router = require("express").Router();
const {
    notes
} = require('../../db/db.json');
const {
    newNote,
    deleteNote
} = require('../../lib/notes');


router.get('/notes', (req, res) => {
    let result = note;
    res.json(result);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = newNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})


module.exports = router;