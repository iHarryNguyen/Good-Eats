var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var restaurants = [{
    name: "Anh Thu II",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrcvODByPIeAcJJ6XIRbErn1iNI0ZH4tzvR8VEhXAiw99WOgkSxg"
  },
  {
    name: "Bon Chon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwFekv_jqxVtp4GngP6KxOCs7v8m-eEGx_yHmiCmjKT8XlMi0"
  },
  {
    name: "Chuan Shabu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LY-4f6Xon78Y41RclIyIPAY1jfcN6ZTupcZbENDzB31VIORzow"
  },
  {
    name: "Anh Thu II",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrcvODByPIeAcJJ6XIRbErn1iNI0ZH4tzvR8VEhXAiw99WOgkSxg"
  },
  {
    name: "Bon Chon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwFekv_jqxVtp4GngP6KxOCs7v8m-eEGx_yHmiCmjKT8XlMi0"
  },
  {
    name: "Chuan Shabu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LY-4f6Xon78Y41RclIyIPAY1jfcN6ZTupcZbENDzB31VIORzow"
  }
]

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landings");
})

app.get("/restaurants", function(req, res) {

  res.render("restaurants", {
    restaurants: restaurants
  });
});

app.get("/restaurants/new", function(req, res) {
  res.render("new.ejs");
});

app.post("/restaurants", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newRestaurants = {
    name: name,
    image: image
  };
  restaurants.push(newRestaurants);
  res.redirect("/restaurants");
});


app.listen(3000, function(req, res) {
  console.log("Server has started");
});