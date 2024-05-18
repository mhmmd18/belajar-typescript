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
    // indexable interface array
    it('should indexable interface array', function () {
        const name = ["Ahmad", "Hayyi"];
        console.info(name[1]);
    });
    // indexable interface object
    it('should indexable interface object', function () {
        const book = {
            name: "Belajar TypeScript",
            author: "Mamad"
        };
        console.info(book.name);
        console.info(book.author);
    });
});
export {};
