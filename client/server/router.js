/*
var journal;
module.exports = function(app) {
    var journal = require('./controller/journal.server.controller.js');
    var user = require('./controller/user.server.controller.js');

    //For journal controls
    // Create a new Note
    app.post('/journal', journal.create);

    // Retrieve all Notes
    app.get('/journal', journal.findAll);

    // Retrieve a single Note with noteId
    app.get('/journal/:noteId', journal.findOne);

    // Update a Note with noteId
    app.put('/journal/:noteId', journal.update);

    // Delete a Note with noteId
    app.delete('/journal/:noteId', journal.delete);

    //For user controls
    //Create new user
    app.post('/user', user.create);

    // Retrieve all users
    app.get('/user', user.findAll);

    // Retrieve a single user with noteId
    app.get('/user/:userId', user.findOne);

    // Update a user with noteId
    app.put('/user/:userId', user.update);

    // Delete a user with noteId
    app.delete('/user/:userId', user.delete);
}
*/
