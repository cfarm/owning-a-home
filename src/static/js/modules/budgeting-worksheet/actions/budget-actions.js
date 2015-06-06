var AppDispatcher = require('../dispatcher/app-dispatcher');
var BudgetConstants = require('../constants/budget-constants');

var BudgetActions = {

  /**
 * @param  {string} name The EXPENSE label
 * @param  {number} val The EXPENSE input value
 */
  create: function(name, val) {
    AppDispatcher.dispatch({
      actionType: BudgetConstants.EXPENSE_CREATE,
      name: name,
      val: val
    });
  },

  /**
   * @param  {number} val
   */
  update: function(val) {
    AppDispatcher.dispatch({
      actionType: BudgetConstants.EXPENSE_UPDATE,
      val: val
    });
  },

  /**
   * Reset all expenses
   */
  resetAll: function() {
    AppDispatcher.dispatch({
      actionType: BudgetConstants.EXPENSE_RESET_ALL
    });
  },

  /**
   * @param  {string} id
   */

  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: BudgetConstants.EXPENSE_DESTROY,
      id: id
    });
  },

 /**
   * Delete all the completed ToDos
   */
  destroyReset: function() {
    AppDispatcher.dispatch({
      actionType: BudgetConstants.EXPENSE_DESTROY_RESET
    });
  }

};

module.exports = BudgetActions;