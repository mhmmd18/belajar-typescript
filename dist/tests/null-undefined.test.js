"use strict";
describe('null-undefined', function () {
    it("should say hello", function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Mamad");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
