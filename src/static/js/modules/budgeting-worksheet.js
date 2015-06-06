var $ = jQuery = require('jquery');
var React = require('react');
var App = require('./budgeting-worksheet/components/app');


React.render(
  <App/>, document.getElementById('budget-app')
);