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
    // extends interface
    it('should extends interface', function () {
        const employee = {
            id: 1,
            name: "Mamad",
            address: "Jl. Pangeran Antasari"
        };
        console.info(employee);
        const manager = {
            id: 2,
            name: "Yunus",
            address: "Jl. Pangeran Diponegoro",
            department: "IT"
        };
        console.info(manager);
    });
    // function in interface
    it('should function in interface', function () {
        const person = {
            name: "Mamad",
            sayHello: (name) => {
                return `Hello ${name}, my name is ${person.name}`;
            }
        };
        console.info(person.sayHello("Budi"));
    });
    // intersection interface
    // menggabungkan 2 interface dengan menggunakan type,
    it('should intersection interface', function () {
        const person = {
            id: 1,
            name: "Mamad"
        };
        console.info(person);
    });
    // type assertions
    // mengubah type data, jika terdapat perbedaan di 2 variabel, maka akan error
    // person2.age
    // person2.sayHello("Budi")
    it('should type assertions', function () {
        const person = {
            name: "Mamad",
            age: 23
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
