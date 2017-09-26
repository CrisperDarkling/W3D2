    describe("fizzBuzz", function() {
        it("Should return FizzBuzz if the number is divisible by 3 or 5", function() {
            expect(FizzBuzz(15)).toBe("FizzBuzz")
    });
    
        it("Should return Fizz if the number is divisible by 3", function() {
            expect(FizzBuzz(33)).toBe("Fizz")
    });
    
    it("Should return Buzz if the number is divisible by 5", function() {
            expect(FizzBuzz(50)).toBe("Buzz")
    });
    
    
});
