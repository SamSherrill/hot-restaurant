const express = require("express");
var path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// * Backend Team:
// Create a set of variables (hint: arrays of objects) for holding the reservation
// and waitlist data

// Jonathan's example uses: const tables instead of const reservations
const reservations = [
    // WHAT DO WE DO IF WE HAVE SOMEONE ELSE WITH THE SAME NAME?
    {
        customerName: "Sam",
        phoneNumber: "111-111-1111",
        customerEmail: "sam@test.com",
        //How should numbering be across seated & waitining customers?
        customerID: "0"
      },
      {
        customerName: "David",
        phoneNumber: "222-222-2222",
        customerEmail: "David@test.com",
        customerID: "1"
      },
      {
        customerName: "Emerald",
        phoneNumber: "333-333-3333",
        customerEmail: "bob@test.com",
        customerID: "2"
      },
      {
        customerName: "Jessie",
        phoneNumber: "444-444-444",
        customerEmail: "bob@test.com",
        customerID: "3"
      }
  ];

  const waitlist = [
    {
      customerName: "Bob Waitlist",
      phoneNumber: "8888888888",
      customerEmail: "bob@test.com",
      //How should numbering be across seated & waitining customers?
      customerID: "4"
    }
  ];
  console.log(reservations);
  console.log(waitlist);

  
// Create a set of routes that then display this data as JSONs. Users should be
// given these JSONs if they visit the appropriate page (i.e. if a user visits
// localhost:3000/api/tables they should see a JSON of table data).

// Route to serve index.html
app.get("/", function(req, res) {
    console.log("Going to Index.html");
    res.sendFile(path.join(__dirname, "/views/index.html"));
  });

// Route to serve reservations.html
app.get("/reservations", function(req, res) {
    console.log("Going to reservations.html");
    res.sendFile(path.join(__dirname, "/views/reservation.html"));
  });

// Route to serve new.html
app.get("/new", function(req, res) {
    console.log("Going to new.html");
    res.sendFile(path.join(__dirname, "/views/new.html"));
  });

// Route to serve JSON of the list of reservations
// Thanks for your changes to the route, David.
app.get("/api/reservations", function(req, res) {
    console.log("Returning reservations object collection.");
   return res.json(reservations);
});

// Route to serve JSON of the list of wait-listed reservations
// Thanks for your changes to the route, David.
app.get("/api/waitlist", function(req, res) {
    console.log("Returning waitlist object collection.");
   return res.json(waitlist);
});

// Route to add new reservation
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

// Create the logic that handles reservation requests. 
// Your code should work such that POST requests take in JSON objects, checks if there is any space left, 
// then adds the JSON object to either the reservation array or the waitlist array. 
// Your POST route should also respond to requests with a confirmation 
// (true or false) of whether or not the requestor has a reservation (or is on the waiting list).

// You should be using Postman to do all your testing at this point.