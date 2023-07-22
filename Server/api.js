const express = require("express");
const app = express();
const { pool } = require("");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.listen(8082, () => {
    console.log("Server running on port 8082");
});

/*Repeat these structures for the db interactions. It should cover everything*/

app.get(""/*Path comes here*/, /*Any middleware here, */ (req, res, next) => {
    try {
        /* query needs to be declared in const format if we change to JS. Then, once the query has been written, use pool.query to interact with the DB*/
    } catch (err) {
        next(err);
    }
});

app.post(""/*Path comes here*/, /*Any middleware here, */ (req, res, next) => {
    try {

    } catch (err) {
        next(err);
    }
});

app.put(""/*Path comes here*/, /*Any middleware here, */ (req, res, next) => {
    try {

    } catch (err) {
        next(err);
    }
});

app.delete(""/*Path comes here*/, /*Any middleware here, */ (req, res, next) => {
    try {

    } catch (err) {
        next(err);
    }
});