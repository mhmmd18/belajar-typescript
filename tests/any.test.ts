describe('any', function () {
    it('should any', function () {
        const person: any = {
            name: "Mamad",
            age: 21,
            address: "Jl. Pangeran Antasari"
        }
        person.telp = "081234567890";
        console.info(person);
    })
})