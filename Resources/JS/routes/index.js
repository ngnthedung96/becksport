const newsRouter = require('./newsRoute');
const shoesRouter = require('./shoesRoute');
const siteRouter = require('./siteRoute');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/shoes', shoesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
