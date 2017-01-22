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

const data = [
  { type: 'business', title: 'Canon SLR E2 Camera', price: "130.99", image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' },
  { type: 'business', title: 'Canon SLR E2 Camera', price: '130.99', image: 'http://animal-dream.com/data_images/leaves/leaves2.jpg' }
]

const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/api/search', (req, res) =>
  res.send(data)
)

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(process.env.PORT || 3000, function() {
  console.log('\n\n ==> 🌎  Server listening on port 3000\n')
});
