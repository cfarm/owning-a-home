var $ = jQuery = require('jquery');
require('jquery-easing');
require('cf-expandables');
var React = require('react');
var App = require('./budgeting-worksheet/components/app');


React.render(
  <App/>, document.getElementById('budget-app')
);