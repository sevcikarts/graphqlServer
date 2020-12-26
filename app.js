const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
var cors = require('cors')

const app = express();

const dbURI =
  "mongodb+srv://sevcik:sevcik@cluster0.ubrbg.mongodb.net/none-tuts?retryWrites=true&w=majority";

  

  app.use(cors())
  
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    (result) => app.listen(4000),
    () => {
      console.log("now listening for requests on port 4000");
    }
  )
  .catch((err) => console.log(err));



app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
