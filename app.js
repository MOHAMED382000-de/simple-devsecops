const express = require("express");

const app = express();

app.use(express.json());

let notes = [];

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to DevSecOps Lab ");
});

// Get All Notes
app.get("/notes", (req, res) => {
    res.json(notes);
});

// Add Note
app.post("/notes", (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "Note Added Successfully",
        data: req.body
    });
});

// Delete Note
app.delete("/notes/:id", (req, res) => {

    const id = Number(req.params.id);

    if (id >= notes.length) {
        return res.status(404).json({
            message: "Note Not Found"
        });
    }

    notes.splice(id, 1);

    res.json({
        message: "Note Deleted Successfully"
    });

});

app.listen(3000, () => {
    console.log("Server Running On Port 3000");
});