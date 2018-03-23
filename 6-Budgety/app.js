var budgetController = (function() {
    function Expense(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
        var percent;
        if (totalIncome > 0) {
            percent = Math.round((this.value / totalIncome) * 100);
            percent = percent > 0 ? percent : -2;
            this.percentage = percent;
        }
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
            val = Math.abs(val);
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

        deleteItem: function(type, id) {
            var ids, index, value;
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });
            index = ids.indexOf(id);
            if (index !== -1) {
                value = data.allItems[type][index].value;
                data.totals[type] -= value;
                data.allItems[type].splice(index, 1);
            };
        },

        getBudgetInfo: function() {
            return {
                budget: data.totals.budget(),
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.totals.percentage()
            }
        },

        updatePercentages: function() {
            data.allItems.exp.forEach(function(current) {
                current.calcPercentage(data.totals.inc);
            })
        },

        getPercentages: function() {
            var allPerc;
            allPerc = data.allItems.exp.map(function(current) {
                return current.percentage;
            });
            return allPerc;
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
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var nodelistForEach = function(list, callback) {
                for (var i = 0; i < list.length; ++i) {
                    callback(list[i], i);
                }
            };

    var formatNumber = function(num, type) {
            var numSplit, int, dec, sign;
            num = Math.abs(num);
            num = num.toFixed(2);
            numSplit = num.split('.');
            int = numSplit[0];
            if (int.length > 3) {
                int = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            dec = numSplit[1];
            sign = (type === 'exp' ?  '- ' : '+ ');
            return sign + int + '.' + dec;

        };

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
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%' +
                '</div> <div class="right clearfix"> <div class="item__value">%value%</div>' +
                '<div class="item__delete"> <button class="item__delete--btn">' + 
                '<i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div>' +
                '<div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div>' +
                '<div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                 '</div></div></div>';
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        deleteListItem: function(SelectorID) {
            var element;
            element = document.getElementById(SelectorID)
            element.parentNode.removeChild(element);
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
            budgetType = (obj.budget >= 0 ? 'inc' : 'exp');
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, budgetType);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if (obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
        },

        displayPercentages: function(percentages) {
            var fields;
            fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);
            nodelistForEach(fields, function(current, index) {
                var percent;
                percent = percentages[index];
                percent = (percent === -2) ? '<1' : percent;
                current.textContent = ((percent > 0 || percent === '<1') ? percent + '%' : '---');
            });
        },

        displayMonth: function() {
            var now, year, month;
            now = new Date();
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ', ' + year;
        },

        changeColor: function() {
            var fields;
            fields = document.querySelectorAll(
                DOMstrings.inputType + ',' + 
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue);
            nodelistForEach(fields, function(current) {
                current.classList.toggle('red-focus');
            })
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
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
        document.querySelector(DOMstrings.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOMstrings.inputType).addEventListener('change', UIctrl.changeColor);
    };

    var updateBudget = function() {
        budgetInfo = budgetCtrl.getBudgetInfo();
        UIctrl.displayBudget(budgetInfo);
        
    };

    var updatePercentages = function() {
        var percentages;
        budgetCtrl.updatePercentages();
        percentages = budgetCtrl.getPercentages();
        UIctrl.displayPercentages(percentages);
    };

    var ctrlAddItem = function() {
        var input, newItem, budget;
        input = UIctrl.getinput();
        if (input.description && input.value) {
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            UIctrl.addListItem(newItem, input.type);
            UIctrl.clearFields();
            updateBudget();
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            budgetCtrl.deleteItem(type, ID);
            UIctrl.deleteListItem(itemID);
            updateBudget();
            updatePercentages();
        }   
    };
    
    return {
        init: function() {
            UIctrl.displayMonth();
            updateBudget();
            setupEventListeners();
        }
    };
})(budgetController, UIController);


(function() { 
    controller.init();
})();