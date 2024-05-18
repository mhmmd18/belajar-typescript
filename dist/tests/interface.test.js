describe('interface', function () {
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
});
export {};
