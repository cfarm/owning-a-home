var React = require('react');
var BudgetActions = require('../actions/budget-actions');

var ExpenseFormInput = React.createClass({
    handleChange: function (e) {
        BudgetActions.update(this.props.name, e.target.value);
    },
    render: function () {
        return (
            <div>
                <label className="form-label-header">{this.props.name}</label>
                <div className="form-group_item">
                    <input type="text" defaultValue={this.props.expense} title="Test input" onChange={this.handleChange} />
                </div>
            </div>
        );
    }
});

module.exports = ExpenseFormInput;