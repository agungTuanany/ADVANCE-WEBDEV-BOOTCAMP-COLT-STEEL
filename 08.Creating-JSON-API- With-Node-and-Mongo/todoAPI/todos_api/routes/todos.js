
var express = require('express');
var router  = express.Router();
var db      = require('../models');
var helpers = require("../helpers/todos");

router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo)

router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)

module.exports = router;

/** 
 * THE LOGIC WILL BE ON HELPERS
 * why you refactor it?
 * for help us to debugging 
 * 
 *  
 // Defining The Index Route
 
 router.get('/', function(req, res) {
     // res.send("HELLO FORM TODOS ROUTES");
     db.Todo.find()
     .then(function(todos) {
         res.json(todos);
        })
        .catch(function(err) {
            res.send(err);
        })   
    });
    
    // defining The Create Route
    
    router.post('/', function(req, res) {
        // res.send("THIS IS THE POST ROUTE");
        // console.log(req.body);
        db.Todo.create(req.body)
        .then(function(newTodo) {
            // res.status(201).json(newTodo);
            res.json(newTodo);
        })
        .catch(function(err) {
            res.send(err);
        })
    });
    
    // defining The Show Route
    
    router.get('/:todoId', function(eq, res) {
        // res.send("Show ROUTE");
        db.Todo.findById(req.params.todoId)
        .then(function(foundTodo) {
            res.json(foundTodo)
        })
        .catch(function(err) {
            res.send(err);
        })
    });
    
    // Defining The Updates Route
    
    router.put('/:todoId', function(req, res) {
        // res.send("UPDATE ROUTE");
        db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body)
        .then(function(todo) {
            res.json(todo);
        })
        .catch(function(err) {
            res.send(err);
        })
    });
    
    // Defining The Delete Route
    
    router.delete('/:todoId', function(req, res) {
        // res.send("TRYING TO DELETE ROUTE");
        db.Todo.remove({_id: req.params.todoId})
        .then(function() {
            res.json({message: "WE DELETED IT"})
        })
        .catch(function(err) {
            res.send(err);
        })
        
    });
*/