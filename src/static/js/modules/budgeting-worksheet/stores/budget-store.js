var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var BudgetConstants = require('../constants/budget-constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _expenses = {};

var $ = jQuery = require('jquery');

var CHANGE_EVENT = 'change';

var defaultBudgetData = [
    {name: 'monthly-your-income',
     val: 0},
    {name: 'monthly-partner-income',
     val: 0},
    {name: 'monthly-income-total',
     val: 0},
    {name: 'take-home-your-income',
     val: 0},
    {name: 'take-home-partner-income',
     val: 0},
    {name: 'take-home-income-total',
     val: 0},
    {name: 'monthly-spending-rent',
     val: 0},
    {name: 'monthly-spending-utilities',
     val: 0},     
    {name: 'monthly-spending-debt',
     val: 0},
    {name: 'monthly-spending-living',
     val: 0},
    {name: 'monthly-spending-savings',
     val: 0},
    {name: 'monthly-spending-total',
     val: 0},
    {name: 'monthly-home-maintenance',
     val: 0},
    {name: 'monthly-home-improvement',
     val: 0},
    {name: 'monthly-home-utilities',
     val: 0},


    // ,
    // '': 0,
    // '': 0,
    // '': 0,
    // '': 0,
    // '': 0,
    // '': 0,
    // '': 0,
    // '': 0,
    // '': 0,
    // '': 0,
    // '': 0,
    // 'monthly-home-hoa': 0,
    // 'monthly-home-total': 0,
    // 'monthly-savings-emergency': 0,
    // 'monthly-savings-long-term': 0,
    // 'monthly-savings-total': 0,
    // 'home-price-assumption': 0
// ];

// var defaultBudgetResults = [
    {name: 'monthly-principal-interest',
     val: 0},
    {name: 'monthly-taxes-insurance',
     val: 0},
    {name: 'monthly-payment',
     val: 0},
    {name: 'monthly-hoa-fees',
     val: 0},
    {name: 'monthly-housing-total',
     val: 0},
    {name: 'monthly-income-percentage',
     val: 0},
    {name: 'budget-monthly-housing',
     val: 0},
    {name: 'budget-monthly-maintenance',
     val: 0},
    {name: 'budget-monthly-utilities',
     val: 0},
    {name: 'budget-monthly-debt',
     val: 0},
    {name: 'budget-monthly-living',
     val: 0},
    {name: 'budget-monthly-savings',
     val: 0},
    {name: 'budget-monthly-total',
     val: 0},
    {name: 'budget-monthly-take-home-income',
     val: 0},
    {name: 'monthly',
     val: 0},
    {name: 'monthly',
     val: 0},
    {name: 'monthly',
     val: 0},
]

function init () {
    updateAll({reset: true});
    updateAll(defaultBudgetData);
    console.log(_expenses);
}

/**
 * Create or update an EXPENSE item.
 * @param  {string} name The EXPENSE label
 * @param  {number} val The EXPENSE input value
 */
function update(name, val) {
  _expenses[name] = val;
}

/**
 * Update all of the EXPENSE items with the same object.
 *     the data to be updated. Used to clear all EXPENSEs or update at once.
 * @param  {array} data An array of key:value pairs
 */
function updateAll(data) {
    for (i = 0; i < data.length; i++) {
        expense = data[i];
        update(expense.name, expense.val);
    }
}

/**
 * Delete an EXPENSE item.
 * @param  {string} id
 */
function destroy(name) {
  delete _expenses[name];
}

/**
 * Delete all the reset EXPENSE items.
 */
function destroyReset() {
  for (var name in _expenses) {
    if (_expenses[name] === 0) {
      destroy(name);
    }
  }
}

var BudgetStore = assign({}, EventEmitter.prototype, {

  /**
   * Tests whether all the EXPENSE items are marked as reset.
   * @return {boolean}
   */
  areAllReset: function() {
    for (var name in _expenses) {
      if (!_expenses[name] === 0) {
        return false;
      }
    }
    return true;
  },

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _expenses;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var name,
      val;

  switch(action.actionType) {
    case BudgetConstants.EXPENSE_CREATE:
      name = action.name.trim();
      val = action.val.trim();
      if (name !== '' && val !== '') {
        update(name, val);
        BudgetStore.emitChange();
      }
      break;

    case BudgetConstants.EXPENSE_UPDATE:
      val = action.val.trim();
      if (val !== '') {
        update(action.name, val);
        BudgetStore.emitChange();
      }
      break;

    case BudgetConstants.EXPENSE_RESET:
      val = 0;
      update(action.name, 0);
      BudgetStore.emitChange();
      break;

    case BudgetConstants.EXPENSE_RESET_ALL:
      updateAll(0);
      BudgetStore.emitChange();
      break;

    case BudgetConstants.EXPENSE_DESTROY:
      destroy(action.id);
      BudgetStore.emitChange();
      break;

    case BudgetConstants.EXPENSE_DESTROY_RESET:
      destroyReset();
      BudgetStore.emitChange();
      break;

    default:
      // no op
  }
});


// INITIAL SETUP
init();

module.exports = BudgetStore;