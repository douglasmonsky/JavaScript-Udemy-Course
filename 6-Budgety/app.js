var budgetController = (function() {

})();
















var UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        getDOMstring: function() {
            return DOMstrings;
        }
    }
})();














var controller = (function(budgetCtrl, UIctrl) {
    var DOMstrings = UIctrl.getDOMstring();

    var ctrlAddItem = function() {
        var input = UIctrl.getinput();
        console.log(input);

    }

    document.querySelector(DOMstrings.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);

