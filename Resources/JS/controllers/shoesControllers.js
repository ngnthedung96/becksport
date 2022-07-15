const shoes = require('../models/shoes')
class ShoesControllers {
    // Get / news
    show(req, res) {
        shoes.MongoClient.connect(shoes.url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("becksport_dev");
            dbo.collection("shoes").findOne({slug:req.params.slug}, function(err, shoes) {
                if (err) throw err;
                res.render('shoes/show', {shoes})
                db.close();
            });
          });
    }
}

module.exports = new ShoesControllers();
