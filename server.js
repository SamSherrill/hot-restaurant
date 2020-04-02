const express = require("express");
var path = require("path");
var fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// * Backend Team:
// Create a set of variables (hint: arrays of objects) for holding the reservation
// and waitlist data

const tables = [
    // There are 5 tables total
    // WHAT DO WE DO IF WE HAVE SOMEONE ELSE WITH THE SAME NAME?
    // WHAT DO WE DO IF WE HAVE SOMEONE ELSE WITH THE SAME CUSTOMERID?
    {
        customerName: "Sam",
        phoneNumber: "111-111-1111",
        customerEmail: "sam@test.com",
        customerID: "SamS"
      },
      {
        customerName: "David",
        phoneNumber: "222-222-2222",
        customerEmail: "David@test.com",
        customerID: "DavidR"
      },
      {
        customerName: "Emerald",
        phoneNumber: "333-333-3333",
        customerEmail: "bob@test.com",
        customerID: "Emerald"
      },
      {
        customerName: "Jessie",
        phoneNumber: "444-444-444",
        customerEmail: "bob@test.com",
        customerID: "Jessie"
      }
  ];

  const waitlist = [
    {
      customerName: "Bob Waitlist",
      phoneNumber: "8888888888",
      customerEmail: "bob@test.com",
      customerID: "Bobby"
    }
  ];
  console.log(tables);
  console.log(waitlist);

  
// Create a set of routes that then display this data as JSONs. Users should be
// given these JSONs if they visit the appropriate page (i.e. if a user visits
// localhost:3000/api/tables they should see a JSON of table data).

// Route to serve index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/index.html"));
  });

// Route to serve tables.html
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/reservation.html"));
  });

// Route to serve new.html
app.get("/new", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/new.html"));
  });

// Route to serve JSON of the list of tables
// Thanks for your changes to the route, David.
app.get("/api/reservation/", function(req, res) {
    console.log("Returning tables object collection.");
   return res.json(tables);
});

// Route to serve JSON of the list of wait-listed tables
// Thanks for your changes to the route, David.
app.get("/api/waitlist", function(req, res) {
    console.log("Returning waitlist object collection.");
   return res.json(waitlist);
});


// Route to add new reservation
// Phase 4: Create the logic that handles reservation requests. Your code should work
// such that POST requests take in JSON objects, checks if there is any space left,
// then adds the JSON object to either the reservation array or the waitlist array.
// Your POST route should also respond to requests with a confirmation (true or false)
// of whether or not the requestor has a reservation (or is on the waiting list).
// You should be using Postman to do all your testing at this point.

  app.post("/api/reservation", function(req, res) {
    console.log("Post made!");
    const newReservation = req.body;
    console.log(newReservation);
    if(tables.length < 5)
      {tables.push(newReservation);
      return res.json(true);
    }else{
      waitlist.push(newReservation);
      return res.json(false)
    }
  });

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

// Create the logic that handles reservation requests. 
// Your code should work such that POST requests take in JSON objects, checks if there is any space left, 
// then adds the JSON object to either the reservation array or the waitlist array. 
// Your POST route should also respond to requests with a confirmation 
// (true or false) of whether or not the requestor has a reservation (or is on the waiting list).

// You should be using Postman to do all your testing at this point.