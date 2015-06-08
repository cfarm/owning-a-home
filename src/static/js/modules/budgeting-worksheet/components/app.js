var React = require('react');
var BudgetStore = require('../stores/budget-store.js')
var ExpenseForm = require('./expense-form.js')

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

    getMonthlyIncome: function() {
        
    },

    render: function() {
        var expenses = this.state.expenses;
        var monthlyExpenses = {};
        var closingCosts = {};
        var overallCosts = {};

        monthlyExpenses['monthly-your-income'] = expenses['monthly-your-income'],
        monthlyExpenses['monthly-partner-income'] = expenses['monthly-partner-income'],
        monthlyExpenses['monthly-income-total'] = expenses['monthly-income-total'];

        return (
            <section>
                {/*<ExpenseForm expenses={this.state.expenses} />*/}
                <ExpenseForm expenses={monthlyExpenses} />
            </section>
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