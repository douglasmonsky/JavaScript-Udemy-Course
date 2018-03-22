var data = {
        test: 1,
        test2: function() {
           return this.test;
       }
       test3: {
        test4: function() {
           return this.test;
       }
    };

console.log(data.test3.test4())