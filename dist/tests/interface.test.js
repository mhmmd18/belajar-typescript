describe('interface', function () {
    // interface
    it('should interface', function () {
        const seller = {
            id: 1,
            name: "Mamad",
            address: "Jl. Pangeran Antasari",
            phone: "081234567890"
        };
        // phone tidak bisa diubah isi nya, karena readonly properties
        // seller.phone = "081234567891"
        console.info(seller);
    });
    // function interface
    it('should function interface', function () {
        const add = (a, b) => {
            return a + b;
        };
        console.info(add(1, 2));
    });
});
export {};
