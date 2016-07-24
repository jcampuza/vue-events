
// API endpoints for event tracking app // 

module.exports = function(app) {

  // Event model object //
  var events = require('./controllers/events');
  app.get('/events', events.findAll);
  app.post('/events', events.add);
  app.delete('/events/:id', events.delete);
  app.get('/import', events.import)
}
