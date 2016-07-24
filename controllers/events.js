var mongoose = require('mongoose');
Event = mongoose.model('Event');

exports.findAll = function(req, res) {
  console.log('Endpoint hit');
  Event.find({}, function(err, results) {
    return res.send(results);
  });
};

exports.import = function(req,res) {
  Event.create(
    {name: "TIFF", description: "Toronto Sucks Dick", date: "2015-09-10"},
    {name: "GOW release", description: "God of war ps4 release date", date: "2016-10-10"},
    {name: "You're a dick", description: "You really are a dick", date: "0001-01-10"},
    function(err) {
      if (err) return console.log(err);
      return res.send(202);
    }
  );
};

exports.add = function(req, res) {
  Event.create(req.body, function(err, event) {
    if (err) return console.log(err);
    return res.send(event);
  })
};

exports.delete = function(req, res) {
  var id = req.params.id;
  Event.remove({'_id':id}, function(result) {
    return res.send(result);
  });
};
