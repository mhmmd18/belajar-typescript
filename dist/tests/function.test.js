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
    // rest parameter
    // rest parameter ini pasti type datanya array
    it('should rest parameter', function () {
        function sum(...numbers) {
            let total = 0;
            for (const number of numbers) {
                total += number;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    // optional parameter
    it('should optional parameter', function () {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Mamad")).toBe("Hello Mamad");
        expect(sayHello("Muhammad", "Joko")).toBe("Hello Muhammad Joko");
    });
    // function overloading
    // membuat function yang sama namanya tapi parameter berbeda
    it('should function overloading', function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else {
                return value * 10;
            }
        }
        expect(callMe("mamad")).toBe("MAMAD");
        expect(callMe(50)).toBe(500);
    });
});
