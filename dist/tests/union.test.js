"use strict";
describe('union', function () {
    // union 
    it('should union', function () {
        let name = "Mamad";
        name = 50;
        console.info(name);
    });
    // jika ada method yang tipe data union maka harus menggunakan cek dengan typeOf
    // untuk mencegah adanya error
    it('should cek tipe data union dengan typeOf', function () {
        function person(value) {
            if (typeof value === "string") {
                value.toUpperCase();
            }
            else if (typeof value === "number") {
                value + 5;
            }
            else if (typeof value === "boolean") {
                !value;
            }
        }
        expect(person("mamad")).toBe("MAMAD");
        expect(person(50)).toBe(55);
        expect(person(true)).toBe(false);
    });
});
