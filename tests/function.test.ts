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
})