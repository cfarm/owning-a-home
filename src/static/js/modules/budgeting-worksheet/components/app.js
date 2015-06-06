var React = require('react');
var BudgetStore = require('../stores/budget-store.js')
var ExpenseList = require('./expense-list.js')

var $ = jQuery = require('jquery');

var App = React.createClass({

    getInitialState: function() {
        return this.getAppState();
    },
  
    getAppState: function () {
        return {
            expenses: BudgetStore.getAll(),
        }
    },
    
    componentDidMount: function() {
        BudgetStore.addChangeListener(this._onChange);
    },
  
    componentWillUnmount: function() {
        BudgetStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
          <div>
            <ExpenseList expenses={this.state.expenses} />
          </div>
        );
    },
 
  /**
   * Event handler for 'change' events coming from the Stores
   */
    _onChange: function() {
        this.setState(this.getAppState());
  }

});

module.exports = App;