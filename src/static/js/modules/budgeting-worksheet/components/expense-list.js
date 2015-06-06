var React = require('react');

var ExpenseList = React.createClass({
    render: function () {
        return (

            <ol>
                <li>
                <h3>Monthly income</h3>

                </li>
                <li>
                <h3>Monthly spending</h3>

                </li>
                <li>
                <h3>Additional monthly homeownership expenses</h3>
                </li>
                <li>
                <h3>Monthly savings goals</h3>
                </li>
                <li>
                <h3>Home price assumption</h3>

                </li>
            </ol>

        );
    }
});

module.exports = ExpenseList;