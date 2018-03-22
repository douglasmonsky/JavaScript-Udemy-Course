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
            inc: 0,
            budget: function() {
                return (data.totals.inc - data.totals.exp);
            },
            percentage: function() {
                return (data.totals.inc ? Math.round((data.totals.exp / data.totals.inc) * 100) : 0)
            }
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
        },
        getBudgetInfo: function() {
            return {
                budget: data.totals.budget(),
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.totals.percentage()
            }
        }
    };
    

})();















var UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'
    }

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id$"> <div class="item__description">%description%' +
                '</div> <div class="right clearfix"> <div class="item__value">%value%</div>' +
                '<div class="item__delete"> <button class="item__delete--btn">' + 
                '<i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div>' +
                '<div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div>' +
                '<div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                 '</div></div></div>';
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        clearFields: function() {
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(current, index, array) {
                current.value = "";
            });
            fieldsArray[0].focus();
        },

        displayBudget: function(obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            if (obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
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

    var updateBudget = function() {
        budgetInfo = budgetCtrl.getBudgetInfo();
        UIctrl.displayBudget(budgetInfo);
        
    };

    var ctrlAddItem = function() {
        var input, newItem, budget;
        input = UIctrl.getinput();
        if (input.description && input.value) {
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            UIctrl.addListItem(newItem, input.type);
            UIctrl.clearFields();
            updateBudget();
        }
    };

    
    return {
        init: function() {
            setupEventListeners();
        }
    };
})(budgetController, UIController);


(function() { 
    controller.init();
})();