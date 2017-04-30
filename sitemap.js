require('babel-register')

const Sitemap = require('react-router-sitemap').default
const routes = require('./src/utils/routes.js').default

new Sitemap(routes).build('http://foundyourgift.com').save('./public/sitemap.xml')
