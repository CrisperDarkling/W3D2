    describe("whatCanIDrink", function() {
        it("Sorry. I can't tell what drink because you don't exist yet sir!?!?!???", function() {

            expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell what drink because you don't exist yet sir!?!?!???")
        });
        
        it("Drink Calpol!!", function() {

            expect(whatCanIDrink(13)).toBe("Drink Calpol!!")
        });
        
         it("Drink Caaaaaaaaaaaaaaanz man", function() {

            expect(whatCanIDrink(17)).toBe("Drink Caaaaaaaaaaaaaaanz man")
        });
        
        it("Now try the 2nd cheapest Wine!", function() {

            expect(whatCanIDrink(20)).toBe("Now try the 2nd cheapest Wine!")
        });
        
        it("Drink liquid fire and transcend this forgotten realm", function() {

            expect(whatCanIDrink(42)).toBe("Drink liquid fire and transcend this forgotten realm")
        });
        
        it("YOU HAVE NOW ENTERED THE EVERDARK", function() {

            expect(whatCanIDrink(54)).toBe("YOU HAVE NOW ENTERED THE EVERDARK")
        });
        
        
    });