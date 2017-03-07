require("babel-register");

const renderToString = require("react-dom/server").renderToString;

const rr = require("react-router");

const match = rr.match;
const RouterContext = rr.RouterContext;

const express = require("express");
const routes = require("./src/utils/routes");

const app = express();

app.use((req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      res.status(200).send(renderToString(<RouterContext {...renderProps} />));
    } else {
      res.status(404).send("Not found");
    }
  });
});
