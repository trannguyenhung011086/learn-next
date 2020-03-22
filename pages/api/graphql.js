const express = require("express");
const graphqlHTTP = require("express-graphql");

const schema = require("../../graphql/schema");

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  if (req.body.query) {
    console.log("Request with query:\n", req.body.query || req.body.mutation);
  }
  next();
});

app.use(
  "/api/graphql",
  graphqlHTTP(req => ({
    schema,
    context: { req },
    graphiql: true
  }))
);

app.use((req, res, next, err) => {
  console.error(err.message);
  next(err);
});

module.exports = app;

if (process.env.USE_SERVER) {
  app.listen(3000, () => console.log("App is running at port 3000"));
}
