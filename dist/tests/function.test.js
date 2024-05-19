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
});
