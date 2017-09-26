describe("Calculator", function() {
 
    beforeEach(function() {
        calc = new Calculator();
    });
    describe("Addition function", function() {
        it('should mul two numbers together and return the result', function() {
            calc.add(3);
            calc.add(5);
            expect(calc.value).toBe(8);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.add(12);
            calc.add(2);
            expect(calc.value).toBe(14);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number!");
        });
    });
    
    describe("Subtraction function", function() {
        it('should mul two numbers together and return the result', function() {
            calc.sub(3);
            calc.sub(5);
            expect(calc.value).toBe(-2);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.sub(12);
            calc.sub(2);
            expect(calc.value).toBe(10);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.sub();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number!");
        });
    });
    
    describe("Division function", function() {
        it('should mul two numbers together and return the result', function() {
            calc.div(3);
            calc.div(5);
            expect(calc.value).toBe(0.6);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.div(12);
            calc.div(2);
            expect(calc.value).toBe(6);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.div();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number!");
        });
    });
        
        describe("Multiplication function", function() {
        it('should mul two numbers together and return the result', function() {
            calc.mul(3);
            calc.mul(5);
            expect(calc.value).toBe(15);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.mul(12);
            calc.mul(2);
            expect(calc.value).toBe(24);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.mul();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number!");
        });
    });
});