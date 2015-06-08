var React = require('react');
var ExpenseFormInput = require('./expense-form-input.js')
var $ = jQuery = require('jquery');

var ExpenseForm = React.createClass({
    render: function () {
        var expenses = $.map( this.props.expenses, function(expense, name) {
            return (
                <ExpenseFormInput expense={expense} name={name} />
            )
        });
        return (
            <div className="form-group">
                <h1>a form</h1>
                {expenses}
            </div>
        );
    }
});

module.exports = ExpenseForm;