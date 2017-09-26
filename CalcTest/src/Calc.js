Calculator = function() {
    this.value = 0;
};

Calculator.prototype.add = function(num) {
    if(typeof(num) == "number"){
        if(this.value == 0) {
            this.value = num;
        } else {
            this.value += num;
        }
        } else {
            alert("Argument must be a number!");
        }
};
Calculator.prototype.sub = function(num) {
    if(typeof(num) == "number"){
        if(this.value == 0) {
            this.value = num;
        } else {
            this.value -= num;
        }
        } else {
            alert("Argument must be a number!");
        }
};

Calculator.prototype.mul = function(num) {
    if(typeof(num) == "number"){
        if(this.value == 0) {
            this.value = num;
        } else {
            this.value *= num;
        }
        } else {
            alert("Argument must be a number!");
        }
};

Calculator.prototype.div = function(num) {
    if(typeof(num) == "number"){
        if(this.value == 0) {
            this.value = num;
        } else {
            this.value /= num;
        }
        } else {
            alert("Argument must be a number!");
        }
};