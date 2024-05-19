describe('if statement', function () {
    it("should if", function () {
        const value = 85;
        if (value >= 80) {
            console.info("Congrats");
        } else if (value >= 60) {
            console.info("Good");
        } else {
            console.info("Bad");
        }
    })
    // ternary operator
    it('should ternary operator', function () {
        const value = 80;
        const hasil = value >= 80 ? "Good" : "Bad";
        console.info(hasil);
    })
    // swith case
    it('should switch case', function () {
        function sayHello(name: string): string {
            switch (name) {
                case "Muhammad":
                    return "Hello Muhammad";
                default:
                    return "Hello";
            }
        }
        console.info(sayHello("Muhammad"));
    })
})