var budgetController = (function() {
    function Expense(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    function Income(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };


    return {
        addItem: function (type, desc, val) {
            var newItem, ID;

             //Create new ID by retrieving last item in arrays id +1
             if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //Create new item based on type
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            }

            data.allItems[type].push(newItem);
            data.totals[type] += val;
            return newItem;
        }
    };
    

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
    var setupEventListeners = function() {
        var DOMstrings = UIctrl.getDOMstring();

        document.querySelector(DOMstrings.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                ctrlAddItem();
            }
        });
    };


    var ctrlAddItem = function() {
        var input, newItem;

        input = UIctrl.getinput();
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        console.log(input);
    }

    
    return {
        init: function() {
            setupEventListeners();
        }
    }
})(budgetController, UIController);


controller.init();