// dom elements
const noteAddButton = document.getElementById("note-add");
const noteEditButton = document.getElementById("note-edit");
const noteDeleteButton = document.getElementById("note-delete");
const noteColour = document.getElementById("notes-colour-select");
const noteText = document.getElementById("notes-textarea")
const storedNotes = document.getElementById('notes-stored');

// adding listeners to buttons so we can trigger functions
noteAddButton.addEventListener("click", addNote);
noteEditButton.addEventListener("click", editNote);
noteDeleteButton.addEventListener("click", deleteNote);

let currentNote = null;

// functions
function addNote() {
    const newNoteText = noteText.value;
    
    if (newNoteText.trim() !== "") {
        const newNote = document.createElement("div"); // create a new div 
        newNote.className = "note"; // let newNote inherit note class styles
        newNote.textContent = newNoteText; // set text
        newNote.style.backgroundColor = noteColour.value; // set background colour
        
        newNote.addEventListener("click", () => { // if the note is clicked on, make it current selected
            currentNote = newNote;
            updateButtons(); // reset button activity
        });

        storedNotes.appendChild(newNote); // add the new note to the stored notes div
        noteText.value = ""; // reset textarea value
        updateButtons(); // reset button activity
    }
}

function editNote() {
    if (currentNote) { // if there is a note selected
        const editedText = prompt("edit note text/colour", currentNote.textContent); // prompt for new text
        if (editedText !== null) { // if text isn't empty
            currentNote.textContent = editedText; // set note to new text
            currentNote.style.backgroundColor = noteColour.value; // update selected colour
        }
    }
}

function deleteNote() {
    if (currentNote) { // if there is a note selected
        if (confirm("delete selected note?")) { // prompt to delete
            storedNotes.removeChild(currentNote); // delete the note
            currentNote = null; // reset note selection
            updateButtons(); // reset which buttons are active
        }
    }
}

function updateButtons() {
    if (currentNote) { // if there's a note selected
        noteEditButton.disabled = false;    // enable edit
        noteDeleteButton.disabled = false;  // enable delete
    } else {           // if there's no note selected
        noteEditButton.disabled = true;     // disable edit
        noteDeleteButton.disabled = true;   // disable delete
    }
}