describe('null-undefined', function () {
    it("should say hello", function () {
        function sayHello(name?: string | null) {
            if (name) {
                console.info(`Hello ${name}`);
            } else {
                console.info("Hello");
            }
        }
        sayHello("Mamad");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    })
})