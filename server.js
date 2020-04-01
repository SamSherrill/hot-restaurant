const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Route to serve index.html

// Route to serve reservations.html

// Route to serve new.html

// Route to serve JSON of the list of reservations

// Route to serve JSON of the list of wait-listed reservations

// Route to add new reservation

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});