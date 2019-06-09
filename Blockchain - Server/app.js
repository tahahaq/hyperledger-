let express = require("express"),
    methodOverride = require("method-override"),
    app = express(),
    cors = require('cors'),
    constants = require('./utils/constants'),
    bodyParser = require("body-parser");

let participantRoutes = require('./routes/participant');
let adminRoutes = require('./routes/admin');


app.use(bodyParser.json({extended: true}));
app.use(cors());
app.use(methodOverride("_method"));


////////////////////////---------------------------------------------  USER ROUTES -----------------------------------------------/////////////////////////

app.use('/participant', participantRoutes);
app.use('/admin' , adminRoutes);


const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Server listening on ${port}`);

module.exports.app = app;
