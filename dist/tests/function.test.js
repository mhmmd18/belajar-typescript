"use strict";
describe('function', function () {
    it("should say hello", function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Mamad")).toBe("Hello Mamad");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Mamad");
    });
    // default value function
    it('should default value function', function () {
        function sayHello(name = "Mamad") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Mamad");
        expect(sayHello("Joko")).toBe("Hello Joko");
    });
});
