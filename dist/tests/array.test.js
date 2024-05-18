"use strict";
describe('Array', function () {
    // array
    it('should array', function () {
        const names = ["Mamad", "Iqbal"];
        const values = [1, 2, 3, 4, 5];
        console.info(names);
        console.info(values);
    });
    // read only array
    it('should read only', function () {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        const books = [1, 2, 3, 4, 5];
        console.info(books);
    });
    // tuple
    it('should tuple', function () {
        const person = ["Mamad", 21];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
    });
});
