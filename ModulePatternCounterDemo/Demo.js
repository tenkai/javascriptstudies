// module pattern demonstration
var counterFunc = ( function() {
       var counter = 0;
    return {
        incrementCounter: function(){
         counter++;
            console.log("counter value: " + counter);
           
        },
        resetCounter: function() {
            console.log("counter value bfore reset: " + counter);
            counter = 0;
        }
        
    }
}) ();

counterFunc.incrementCounter();
counterFunc.incrementCounter();
counterFunc.incrementCounter();
counterFunc.incrementCounter();
counterFunc.incrementCounter();
counterFunc.resetCounter();
