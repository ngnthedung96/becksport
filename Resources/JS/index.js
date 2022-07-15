const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const morgan = require('morgan');

const route = require('./routes/index');
const db = require('./config/db/index')

// Connect to DB
// db.connect()


const app = express();
const port = 3000;
app.use(express.static('../SASS'));
app.use(express.static('../IMG')); //đặt file ở IMG

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// http logger
// app.use(morgan('combined'))

// template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs', //đổi đường dẫn
    }),
);
app.set('view engine', 'hbs');
// set đường dẫn cho view
app.set('views', path.join(__dirname, 'views')); //__dirname là đường dẫn tới index.js(file chính)

route(app);

app.listen(3000);
