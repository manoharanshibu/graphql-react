const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());


mongoose.connect('mongodb://shibu:test123@ds211309.mlab.com:11309/gql-ninja');

mongoose.connection.once('open', () => {
    console.log("connected database...");
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, ()=> {
    console.log("Listening on port 4000");
})