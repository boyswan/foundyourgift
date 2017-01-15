const aws = require('aws-lib');

const accessKeyId = process.env.ACCESS_KEY;
const secret = process.env.SECRET_KEY;
const tag = 'foundyourgift-21';
const product = aws.createProdAdvClient(accessKeyId, secret, tag)



const fn = (err, res) => console.log(err, res);
product.call('ItemSearch', {SearchIndex: "Books", Keywords: "Javascript"}, fn)
