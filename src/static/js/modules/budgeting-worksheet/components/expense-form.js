var React = require('react');
var ExpenseFormInput = require('./expense-form-input.js')
var $ = jQuery = require('jquery');

var ExpenseForm = React.createClass({
    render: function () {
        var expenses = $.map( this.props.expenses, function(expense, name) {
            return (
                <ExpenseFormInput expense={expense} name={name} key={expense.id} />
            )
        });
        return (
            <div className="form-group">
                {expenses}
            </div>
        );
    }
});

module.exports = ExpenseForm;