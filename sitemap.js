require('babel-register')

const Sitemap = require('react-router-sitemap').default
const Routes = require('./src/utils/routes.js').default

new Sitemap(Routes).build('http://foundyourgift.com').save('./public/sitemap.xml')
