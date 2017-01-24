// const aws = require('aws-lib');
//
// const accessKeyId = process.env.ACCESS_KEY;
// const secret = process.env.SECRET_KEY;
// const tag = 'foundyourgift-21';
// const product = aws.createProdAdvClient(accessKeyId, secret, tag)
//
//
//
// const fn = (err, res) => console.log(err, res);
// product.call('ItemSearch', {SearchIndex: "Books", Keywords: "Javascript"}, fn)


const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(process.env.PORT || 3000, function() {
  console.log('\n\n ==> 🌎  Server listening on port 3000\n')
});
