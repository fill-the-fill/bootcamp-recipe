const express = require("express");
const request = require("request");
const path = require("path");
const app = express();
const urllib = require("urllib");
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get(`/sanity`, function (res, req) {
  console.log("OK!");
});


// app.get(`/recipes/:ingredient`, function (res, req) {
//   ingredient = req.params.ingredient;
//   urllib.request(
//     `https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,
//     function (err, data, res) {
//       if (err) {
//         console.log("ERROR");
//       }
//       console.log(ingredient)
//       const recipe = JSON.parse(res.body);
//       const map = recipe.results.map;
//       (food => { return {"thumbnail": food.thumbnail, "title": food.title, "ingredients": food.ingredients, "href": food.href, }})
//     console.log (map)          
//     res.send (map)
//     }
//   );
// });

app.get ('/recipes/:ingredient', function (req,res) { 
    const ingredient = req.params.ingredient
    console.log (ingredient)

    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err,response) {
    const recipe = JSON.parse(response.body)        
    const data = recipe.results.map 
    (food => { return {"title": food.title,"videoLink": food.href,"picture": food.thumbnail, "ingredients": food.ingredients}})
    console.log (data)        
    res.send (data)
})})



const port = 8082;
app.listen(port, () => console.log(`Server is running on port ${port}`));
