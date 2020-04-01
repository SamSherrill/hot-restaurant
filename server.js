const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// * Backend Team:
// Create a set of variables (hint: arrays of objects) for holding the reservation
// and waitlist data

// Create a set of routes that then display this data as JSONs. Users should be
// given these JSONs if they visit the appropriate page (i.e. if a user visits
// localhost:3000/api/tables they should see a JSON of table data).

// Route to serve index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/index.html"));
  });

// Route to serve reservations.html
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/reservation.html"));
  });

// Route to serve new.html
app.get("/new", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/new.html"));
  });

// Route to serve JSON of the list of reservations
    // Example from Star Wars Final -- Displays all characters
    // app.get("/api/characters", function(req, res) {
    //     return res.json(characters);
    //   });

app.get("/", function(req, res) {
   return res.json();
   // Need parameter name for json()
});

// Route to serve JSON of the list of wait-listed reservations

// Route to add new reservation

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});