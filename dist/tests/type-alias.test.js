describe('type-alias', function () {
    it('should must declare', function () {
        const category = {
            id: 1,
            name: "Handphone"
        };
        const product = {
            id: "satu",
            name: "Samsung",
            price: 1000000,
            category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
