const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("index")
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipes", function(req, res){
    return res.render("recipes", { recipes })
})

server.get("/recipes/:index", function (req, res){
    const recipeIndex = req.params.index
    const recipe = recipes[recipeIndex]
    return res.render("recipe", { recipe })
    //console.log({recipeIndex: recipe})
  })


server.listen(5000, function(){
    //console.log(recipes[0].title)
})


