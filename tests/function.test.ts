describe('function', function () {
    it("should say hello", function () {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }
        expect(sayHello("Mamad")).toBe("Hello Mamad");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }
        printHello("Mamad");
    });
    // default value function
    it('should default value function', function () {
        function sayHello(name: string = "Mamad"): string {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Mamad");
        expect(sayHello("Joko")).toBe("Hello Joko");
    })
})