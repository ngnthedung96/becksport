class NewsControllers {
    // Get / news
    index(req, res) {
        res.render('news');
    }
    moreDetail(req, res) {
        res.send('DETAIL');
    }
}

module.exports = new NewsControllers();
