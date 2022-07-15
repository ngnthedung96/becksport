const shoes = require('../models/shoes')
const Courses = require('../models/Course')
class SiteControllers {
    // Get / news
    home(req, res) {
        shoes.MongoClient.connect(shoes.url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("becksport_dev");
          dbo.collection("shoes").find({}).toArray(function(err, shoes) {
            if (err) throw err;
            res.render('home',{shoes});
          });
        });
        // Courses.find({})
        // .then(courses => res.json(courses))
    }
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteControllers();
